---
type: TutorialStep
date: 2021-04-09
title: Integrating Sentry Application Monitoring
technologies: [django,aws]
topics: [python]
author: mm
subtitle: Track errors & monitor performance in all major languages & frameworks with Sentry
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/1Sc7T_muccQ
---

Hello everyone, welcome to the Django tutorial series. In this tutorial step, 
we are going to set up Sentry, an application for monitoring and error tracking.

Sentry automates exception handling for every programming language and platform, so you can observe and respond
to any issues up and down the stack: JavaScript, Python, PHP, Ruby, Java, and modern frontend frameworks 
and even the serverless frameworks.




To know more about Sentry please visit the website [sentry.io](https://sentry.io/)

# Project Setup

Make sure to create an account in Sentry, it's pretty straight forward. I already have an account,
so I will proceed with the login.

![sentry_login](./steps/step1.png)

Ok, we have reached the dashboard, I will now click on **Create Project**.

![sentry_dashboard](./steps/step2.png)

I will choose **Django**, as my platform. 

For the default alert settings, I am not going to modify my choice. Leave
it as **“I’ll create my owner alerts later”**. You can come back anytime and modify it.

![sentry_project_creation](./steps/step3.png)


My project name will be **Django**, and it will fall under the team **backend**. You can assign developers
to a particular team, so they can access this project. Everything looks good, I will click on **Create Project**.

![sentry_project_team](./steps/step4.png)

# Integrating Sentry with Django

The project has been successfully created. Next, we need to follow these instructions to configure
Sentry with Django. 
 

![sentry_django_configure](./steps/step5.png)

First, I will be installing the sentry sdk package. 

![sentry_python_sdk](./steps/step6.png)

Next I will copy the configuration into my **settings.py** file.

![sentry_django_settings](./steps/step7.png)

When you deploy your application into production, make sure you pass the **dsn** value 
also known as **Data Source Name(DSN)** through the environment variable.

To set a uniform sample rate for all transactions, set the **traces_sample_rate** option in your SDK
config to a number between 0 and 1. (For example, to send 20% of transactions, 
set traces_sample_rate to 0.2

Sentry also excludes personally identifiable 
information (such as user ids, usernames, cookies, authorization headers, IP addresses) unless
you set **send_default_pii** to True.


Okay, we are all set, let's trigger some exceptions. According to the Sentry documentation, I will 
perform **ZeroDivisionError** in my application.

# Firing our first event

Currently, there are no events. Let’s initiate our first event.

I am going to add a **result** variable in line number 14, which will raise an **ZeroDivisionError** exception.

![sentry_exception](./steps/step8.png)

I will be calling my API and in the result, it will raise an exception, and the event will be passed to sentry.

![sentry_exception_postman](./steps/step9.png)

Let me verify in Sentry whether we have received the new event. 


Yes, the error has logged in Sentry, and the best thing is, it’s displaying the entire traceback 
along-with the filename, and the line number where the exception was caught.

![sentry_event_1](./steps/step10.png)

This is something you definitely need in your production workflow to 
smoothly track your code,  along with performance issues.

![sentry_event_2](./steps/step11.png)

Before moving forward, make sure to revert code which is causing the exception. In the 
upcoming tutorial we will be focusing on unit tests to make sure 
our code works perfectly fine before deployment.

