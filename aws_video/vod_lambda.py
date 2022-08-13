"""Python lambda function to trigger Media Convert."""

import json
import os
import time
import uuid
from pathlib import PurePath

import boto3


def get_s3_source_key_path(event):
    this_s3 = event["Records"][0]["s3"]
    this_bucket_name = this_s3["bucket"]["name"]
    this_bucket_key = this_s3["object"]["key"]
    this_bucket_path = PurePath(f"s3://{this_bucket_name}/{this_bucket_key}")
    return this_bucket_key, this_bucket_path


# noinspection PyUnusedLocal
def lambda_handler(event, context):
    s3_key, s3_source_path = get_s3_source_key_path(event)
    s3_source_basename = s3_source_path.stem

    region = os.environ["AWS_DEFAULT_REGION"]
    status_code = 200
    body = {}
    if not s3_key.endswith(".mp4"):
        raise ValueError("Tried to upload a file not ending in .mp4")

    # Use MediaConvert SDK UserMetadata to tag jobs with the assetID
    # Events from MediaConvert will have the assetID in UserMedata
    job_metadata = {"assetID": s3_source_basename}

    try:
        # Job settings are in the lambda zip file in the current working directory
        with open("job.json") as json_data:
            job_settings = json.load(json_data)

        # get the account-specific mediaconvert endpoint for this region
        mc_client = boto3.client("mediaconvert", region_name=region)
        endpoints = mc_client.describe_endpoints()

        # Update the job settings with the source video from the S3 event and destination
        # paths for converted videos
        job_settings["Inputs"][0]["FileInput"] = (
            "s3://" + s3_source_path.parent.name + "/" + s3_key
        )

        destination_s3 = "s3://" + os.environ["DestinationBucket"]
        og = job_settings["OutputGroups"]

        # We need the correct initials to use as a subdirectory under assets
        principal_id = event["Records"][0]["userIdentity"]["principalId"]
        if "paul.everitt@jetbrains.com" in principal_id:
            initials = "pwe/"
        else:
            initials = ""

        # Clean up the CDN caching
        cdn_path = f"/assets/{initials}{s3_source_basename}/HLS/*"
        cdn_client = boto3.client("cloudfront")
        cdn_client.create_invalidation(
            DistributionId="E1166YMX8A3BF5",
            InvalidationBatch={
                "Paths": {"Quantity": 1, "Items": [cdn_path]},
                "CallerReference": str(time.time()),
            },
        )

        # HLS
        hd = (
            destination_s3
            + "/"
            + f"assets/{initials}{s3_source_basename}/HLS/{s3_source_basename}"
        )
        og[0]["OutputGroupSettings"]["HlsGroupSettings"]["Destination"] = hd

        # Thumbnails
        td = (
            destination_s3
            + "/"
            + f"assets/{initials}{s3_source_basename}/Thumbnails/{s3_source_basename}"
        )
        og[1]["OutputGroupSettings"]["FileGroupSettings"]["Destination"] = td

        # Convert the video using AWS Elemental MediaConvert
        media_convert_role = os.environ["MediaConvertRole"]
        client = boto3.client(
            "mediaconvert",
            region_name=region,
            endpoint_url=endpoints["Endpoints"][0]["Url"],
            verify=False,
        )
        client.create_job(
            Role=media_convert_role, UserMetadata=job_metadata, Settings=job_settings
        )

    except Exception as e:
        print("Exception: %s" % e)
        status_code = 500
        raise

    finally:
        return {
            "statusCode": status_code,
            "body": json.dumps(body),
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }
