---
type: TutorialStep
date: 2021-01-29
title: Background on Serverless
technologies: [AWS Toolkit]
topics: [aws]
author: mm
subtitle: Introduce Microservices, AWS SAM (Serverless Application Model)
thumbnail: ../thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/caW7eLThBwQ
---

Hello everyone, Welcome to the part one of the AWS PyCharm tutorial Series. 
Today I will be explaining in brief about micro-services architectures and different serverless frameworks.


# Background

Before taking a deep dive into microservices, let's understand first 
what is a monolithic architecture. In a traditional monolithic architecture,
all processes are tightly coupled and run in a single service. 
This means that if one process of the application experiences a spike in demand,
then the entire architecture must be scaled. If any single service is not 
functioning properly, then it's going to affect all the services.

![microservices](./microservices.png)
Image Source : Amazon Web Services (AWS)

The scenario is completely different when it comes to microservices. 
In a microservice architecture, the services are: loosely coupled, managed by
a small team, easily scalable, and the most important part if one the services
goes down, then it won't affect the other services. If one of your services
is built using Java then your other services can also be developed, 
but using python, .net or ruby. Microservices Architectures don't follow a one
size fits all approach and provide flexibility to the developers, 
as there is no technology constrained.

There are lots of benefits when it comes to microservices.

To know more about microservices I would recommend you to follow the link [aws.amazon.com/microservices](https://aws.amazon.com/microservices/)

# AWS Lambda

![aws_lambda](./aws_lambda.png)

So in this course we will be focusing on one of the products that AWS offers
for creating serverless applications that is AWS Lambda, run code 
without thinking about servers. Yes that is true. As a customer you don't need
to manage any servers because those servers are being managed by AWS.
AWS Lambda automatically scales your application by running code in 
response to each trigger. You are not running your app for 24x7 anymore,
and you'll be charged against the time that your functions were running.


# AWS SAM (Serverless Application Model)

![aws_sam](./aws_sam.png)

For this tutorial we will be also using the AWS serverless application model.
AWS (SAM) is an open source framework that you can use to build serverless
applications on AWS. AWS SAM is based on AWS cloudformation which defines
serverless applications with templates. Essentially a cloudformation template
is now the same thing as an AWS SAM Template. AWS SAM shows developers what 
objects they can use in a template to model a serverless application.

For reference, you can visit [aws.amazon.com/serverless/sam](https://aws.amazon.com/serverless/sam/)

# Serverless Frameworks

There are many ways to create serverless applications and one of them is
the serverless framework. It is an open source serverless framework which
enables developers to deploy cloud applications on any faas (Function As A Service) provider.
While the framework is open source, they also provide enterprise support.

For reference, you can visit [serverless.com](https://www.serverless.com/)

![serverless](./serverless.png)

There is one more serverless framework called Chalice which is being offered by AWS.
Chalice is a framework for writing serverless apps in python.
It lets you quickly create and deploy applications that use AWS lambda. 
It is highly inspired by flask. It uses a decorator based syntax used in
frameworks such as Flask, Bottle and fastAPI. It has lots of features 
and seamlessly integrates with AWS services.

For reference, you can visit [aws.github.io/chalice/index](https://aws.github.io/chalice/index)


![aws_chalice](./aws_chalice.png)








