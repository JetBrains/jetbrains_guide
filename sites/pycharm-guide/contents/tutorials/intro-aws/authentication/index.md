---
type: TutorialStep
date: 2020-11-06
title: Securing APIs with JSON Web Tokens (JWT)
technologies: [AWS Toolkit]
topics: [aws]
author: mm
subtitle: Adding Custom Authorizers in Lambda functions
thumbnail: ../thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/Q6uZ2HHIYQM
---

For this tutorial we are going to protect our APIs from unauthorized access by 
creating Lambda Authorizer, formerly known as CustomAuthorizer. 
It is an API Gateway feature that uses a Lambda function to control access
to your API.


Interested to know more about custom authorizers, please visit [Configure a Lambda authorizer using the API Gateway console
](https://docs.aws.amazon.com/apigateway/latest/developerguide/configure-api-gateway-lambda-authorization-with-console.html). 

# Custom Authorizers

Okay, let me first remove the <strong>Authorizers</strong> which I have declared 
in the <strong>template.yaml</strong> file. By the way, if you have observed from
the beginning, we are using Authorizer as <strong>None</strong>, but we did not set up
the Default Authorizer. If you try to deploy the functions it’s not going to work,
and it would lead to an error because you haven’t set up the <strong>Authorizer</strong>. So, let’s begin.

![auth_step_1](./steps/step1.png)

Let me start by creating an <strong>authorizer</strong> package under <strong>user</strong>. I 
will follow the usual process like creating <strong>app.py</strong> file

![auth_step_2](./steps/step2.png)

I will be using an existing blueprint for the <strong>Authorization</strong> process.
It’s already available in <strong>AWS Lambda</strong> under the <strong>Blueprints</strong>. I
am going to copy this logic into my <strong>app.py</strong>

![auth_step_3](./steps/step3.png)

Below, I am providing the final snippet of custom authorizer blueprint. 

The source code is available on Github at [https://github.com/mukulmantosh/ServerlessDemo](https://github.com/mukulmantosh/ServerlessDemo)

`embed:tutorials/intro-aws/authentication/auth.py`

If you have observed the logic carefully, you will notice that I have slightly refactored the code according to my requirements.







