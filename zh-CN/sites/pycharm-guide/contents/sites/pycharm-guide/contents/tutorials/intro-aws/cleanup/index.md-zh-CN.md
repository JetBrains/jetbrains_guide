---
type: TutorialStep
date: 2021-01-29
title: Cleanup
technologies:
  - 
    "aws]topics": '['
author: mm
subtitle: Removing Resources from AWS Console
thumbnail: ../thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/IKRmrQ47ATg
---

In this tutorial step, we will be removing all the services used during the tutorial.

* *If you are already aware how to remove resources from AWS then you can skip it.* (Optional)

# Cleanup

We will navigate to **CloudFormation** dashboard from AWS Management Console.

Next, we will delete **ServerlessDemoStack** which indeed going to remove ( Lambda functions, API Gateway, Authorizers) etc.

But it's not going to remove the S3 Bucket. So, we have to remove it manually. I will be navigating to Amazon S3 and open the bucket **serverless-pycharm-demo**. First, I need to remove the existing objects otherwise it won’t allow me to delete the bucket.


Once the objects have been deleted successfully then we can proceed forward to delete the bucket.




