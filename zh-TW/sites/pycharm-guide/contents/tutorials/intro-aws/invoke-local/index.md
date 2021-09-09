---
type: TutorialStep
date: 2021-01-29
title: Invoking Functions Locally
technologies:
  - 
    "aws]topics": '['
author: mm
subtitle: Execute Lambda function inside a container through PyCharm Professional.
thumbnail: ../thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/xEnKghx6fuk
---

In this tutorial we are going to run our lambda functions inside a *local* container.

# Docker

![invoke_step_1](./steps/step1.png)

We are going to use Docker. Docker is an open platform for developing, shipping, and running applications. Docker lets you separate your applications from your infrastructure, so you can deliver software quickly. If you are using Windows then you can use something called **Docker Desktop**.

Just follow the official documentation for the installation process, and you will be good to go.


# Configurations

PyCharm Professional is already running. I will click on **Run** then I will go to **Edit Configurations**.

![invoke_step_2](./steps/step2.png)


Now, I need to choose **Event Templates**. I am going to pick a template called **“Hello World”**. This event is going to be passed into our Lambda function.

![invoke_step_3](./steps/step3.png)


After that, I will click on **SAM CLI**, make sure to check **“Build function inside a container”.**

Click on `Apply` and then `OK`.

![invoke_step_4](./steps/step4.png)

Then I will goto run and click on **Run HelloWorld** Function.

![invoke_step_5](./steps/step5.png)

If you are running on Windows, then Docker Desktop will prompt for sharing the file. Kindly accept it.

![invoke_step_6](./steps/step6.png)

As you can see, this is my JSON Response which I received from my lambda function. In the console you will be receiving more information like how much duration it took to execute the function along-with billed duration and max memory used.


This is how we can run and debug our lambda functions locally in our machine.
