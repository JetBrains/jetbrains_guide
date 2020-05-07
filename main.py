import os
from datetime import datetime, timedelta
from getpass import getpass

import yaml
from dotenv import load_dotenv
from pick import pick
from twitter_ads.client import Client
from twitter_ads.creative import ScheduledTweet
from twitter_ads.enum import MEDIA_CATEGORY
from twitter_ads.http import Request
from twitter_ads.restapi import UserIdLookup


load_dotenv()

# Initialize Twitter client
# access_token, access_token_secret, consumer_key, consumer_secret, account_id = getpass("Credentials? ").split(',')
access_token, access_token_secret, consumer_key, consumer_secret = os.getenv("CREDENTIALS").split(';')
client = Client(consumer_key, consumer_secret, access_token, access_token_secret)
account = client.accounts(os.getenv("AD_ACCOUNT_ID"))
user_id = UserIdLookup.load(account, screen_name=os.getenv("ACCOUNT")).id

print(user_id)
exit(0)


# create the Scheduled Tweet
scheduled_tweet = ScheduledTweet(account)
scheduled_tweet.text = 'test'
scheduled_tweet.as_user_id = user_id
scheduled_tweet.scheduled_at = datetime.utcnow() + timedelta(days=2)
scheduled_tweet.save()


# LOAD TWEET DATA


# Load tips directory
load_dotenv()
project = os.getenv("PROJECT")
tips_directory = os.path.join(os.getcwd(), 'sites', f'{project}-guide', 'contents', 'tips/')
# print(tips_directory)

# Pick tip to schedule
tips = list(filter(lambda d: os.path.isdir(os.path.join(tips_directory, d)), os.listdir(tips_directory)))
tip_name, tip_index = pick(tips, 'Pick a tip to schedule as tweet:')
directory = os.path.join(tips_directory, tip_name)
# print(tip_name)

# Parse YAML
yaml_file = os.path.join(directory, 'index.md')
yaml = list(yaml.full_load_all(open(yaml_file, 'r')))[0]
description = '\n'.join(map(lambda s: s.strip(), yaml['leadin'].split('<!-- more -->')[0].split('\n')))
print(description)

# Load image
image_file = os.path.join(directory, yaml['animatedGif']['file'])
image = open(image_file, 'rb').read()
# print(image)

# Construct Url
url = 'https://www.jetbrains.com/dotnet/guide/tips/' + tip_name
print(url)





# SCHEDULE TWEET

# https://github.com/twitterdev/twitter-python-ads-sdk/tree/master/examples


# upload an image to POST media/upload
# https://developer.twitter.com/en/docs/ads/creatives/guides/media-library
#resource = '/1.1/media/upload.json'
#params = {
#    'additional_owners': '756201191646691328',
#    'media_category': MEDIA_CATEGORY.TWEET_GIF
#}
#domain = 'https://upload.twitter.com'
#files = {'media': (None, image)}
#response = Request(client, 'post', resource, files=files, domain=domain, params=params).perform()

# extract the media_key value from the response
#media_key = response.body['media_key']
