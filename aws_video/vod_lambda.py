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
    s3_source_basename = s3_source_path.name

    destination_s3 = "s3://" + os.environ["DestinationBucket"]
    region = os.environ["AWS_DEFAULT_REGION"]
    status_code = 200
    body = {}
    if s3_key.__contains__(".mp4"):
        # Trim off the "jbguideinput" part of the path and keep the rest
        # chopped_path = "-".join(s3_key.split("/")[:-1])
        # assetID = chopped_path + '-' + s3_key.split(".mp4")[0]
        asset_id = s3_key.split(".mp4")[0]
    else:
        asset_id = str(uuid.uuid4())

    # Clean up the CDN caching
    cdn_path = f"/assets/{asset_id}/HLS/*"
    cdn_client = boto3.client("cloudfront")
    cdn_client.create_invalidation(
        DistributionId="E1166YMX8A3BF5",
        InvalidationBatch={
            "Paths": {"Quantity": 1, "Items": [cdn_path]},
            "CallerReference": str(time.time()),
        },
    )

    # Use MediaConvert SDK UserMetadata to tag jobs with the assetID
    # Events from MediaConvert will have the assetID in UserMedata
    job_metadata = {"assetID": asset_id}

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

        s3_key_hls = "assets/" + asset_id + "/HLS/" + s3_source_basename
        job_settings["OutputGroups"][0]["OutputGroupSettings"]["HlsGroupSettings"][
            "Destination"
        ] = (destination_s3 + "/" + s3_key_hls)

        # S3KeyWatermark = "assets/" + assetID + "/MP4/" + s3_source_basename
        # jobSettings["OutputGroups"][1]["OutputGroupSettings"]["FileGroupSettings"][
        #     "Destination"
        # ] = (destinationS3 + "/" + S3KeyWatermark)

        s3_key_thumbnails = "assets/" + asset_id + "/Thumbnails/" + s3_source_basename
        job_settings["OutputGroups"][1]["OutputGroupSettings"]["FileGroupSettings"][
            "Destination"
        ] = (destination_s3 + "/" + s3_key_thumbnails)

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
