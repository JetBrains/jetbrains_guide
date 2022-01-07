---
type: TutorialStep
date: 2022-01-02
title: Celery & Redis
technologies: [fastapi, kubernetes, aws]
topics: [python]
author: mm
subtitle: Configuring Celery & Redis with FastAPI
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://www.youtube.com/watch?v=RWxnQW1bU3E
---

Hello everyone ! Welcome to PyCharm FastAPI Tutorial Series. 

As you know in our previous video we completed the feature of placing the new order. But we
wanted to make sure that once the order has been placed then we need to send an email saying
that your order has been successfully placed, that’s what we are going to cover in today’s tutorial.

# AWS SES


Before moving ahead, I expect from the audience that they have experience working with AWS. 

We will be using [Amazon SES](https://aws.amazon.com/ses/) also known as **Simple Email Service** along-with
[Celery](https://docs.celeryproject.org/en/stable/) for task-processing and
[Redis](https://docs.celeryproject.org/en/stable/) as in-memory datastore.

You can even use FastAPI [Background Tasks](https://fastapi.tiangolo.com/tutorial/background-tasks/), but
if you are performing some heavy computation then it's  better to go for Celery.

For sending email, the background tasks are good enough, but we intended to use Celery.

Coming back to AWS, for our testing purpose we need to verify an email and after that only we will be able to send it.

Only verified email addresses can be sent under **From** & **To**.


When you apply for a production use case, you don’t need to focus on verifying email addresses. But 
Amazon has stringent controls of sending emails, like handling bounces and complaints and not spamming users. Amazon
has a good reputation with the ISPs, if you don’t follow that carefully then you might end up
losing reputation and indeed your service might get stopped.

![step1](./steps/step1.png)
Image Credits : Amazon Web Services (AWS)

Follow the below link for more information : 
- [https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-concepts-process.html](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-concepts-process.html)
- [https://docs.aws.amazon.com/ses/latest/DeveloperGuide/success-metrics.html](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/success-metrics.html)


![step2](./steps/step2.png)


Coming back, I will be using a temporary email for verification where I will be 
sending emails for testing, even you can use your personal email accounts.

I will go to this website **[getnada](https://getnada.com/)** or you can 
also check **[mailinator](https://www.mailinator.com/)**. They provide temporary email service.

I will provide random email address like **fastapi@boximail.com**.

Let me try to verify this. 

![step3](./steps/step3.png)

![step4](./steps/step4.png)

Sometimes the verification links appear immediately, but it also gets 
delayed sometimes. As this is a temporary email you might face issues in receiving.

![step5](./steps/step5.png)

As you can see that we have received an email from AWS, let me verify it quickly.

Okay our email has been successfully verified. We can go ahead and send emails to this address.

![step6](./steps/step6.png)


# Installing Redis

Let’s come back to our terminal where I am going to install **Redis**.

![step7](./steps/step7.png)

Let me check it’s working fine by running the **[PING](https://redis.io/commands/PING)** command.

![step8](./steps/step8.png)

I got the reply, nice. 


# Installing Celery

Next, I need to install celery.

```
pip install Celery==5.1.2
```

![step9](./steps/step9.png)


I will go to **main.py** where I will initialize Celery. I need to update the broker to point towards the redis instance.

Backend will be where all the celery results will be stored.

![step10](./steps/step10.png)

I will update the environment variables for redis in config.

![step11](./steps/step11.png)


Make sure to install the python redis package.

![step12](./steps/step12.png)

Under ```celery.conf.imports``` we need to add our task file 

The task file will import a shared task from celery which is going to process the ```send_email``` function.

**main.py**

```python
celery.conf.imports = [
    'ecommerce.orders.tasks',
]
```

![step13](./steps/step13.png)


![step14](./steps/step14.png)

I will be writing the implementation in a while, but let’s first start the celery worker.

I will open the terminal and type: 

```
celery -A main.celery worker -l info ---pool=prefork
```

- **-A** stands for application
- **-l** stands for loglevel
- **--pool** is basically the execution pool, it supports different pools like prefork,solo,eventlet and gevent.

The prefork pool implementation is based on Python’s multiprocessing. It allows your Celery 
worker to side-step Python’s [Global Interpreter Lock](https://docs.python.org/3/glossary.html#term-global-interpreter-lock) and fully leverage multiple processors.

![step15](./steps/step15.png)

You can observe that Celery has now been listening to our registered tasks ```send_email```.

I need to complete the implementation for order notification.

**tasks.py**

```python
from celery import shared_task
from . import mail


@shared_task
def send_email(email):
    return mail.order_notification(email)
```

**mail.py**

You can observe the code that contains a short snippet of html code which is going to show the message of order 
placed successfully.

We have also defined the sender email, the one which we verified earlier along-with aws region and subject name.

Make sure you update that when you are working on it.

```python
import re

import boto3
from botocore.exceptions import ClientError


def clean_html(raw_html):
    cleaner = re.compile('<.*?>')
    clean_text = re.sub(cleaner, '', raw_html)
    return clean_text


# Replace sender@example.com with your "From" address.
# This address must be verified with Amazon SES.
SENDER = "FastAPI <changethisemailaddress@gmail.com>"

# If necessary, replace us-west-2 with the AWS Region you're using for Amazon SES.
AWS_REGION = "ap-south-1"

# The subject line for the email.
SUBJECT = "New Order Placed"

# The email body for recipients with non-HTML email clients.


# The HTML body of the email.
BODY_HTML = """<html>
<head></head>
<body>
  <h1>Order Successfully Placed !</h1>
  <p>Hi, Your new order has been successfully placed. You will receive more information shortly.</p>
</body>
</html>
            """

BODY_TEXT = clean_html(BODY_HTML)

# The character encoding for the email.
CHARSET = "UTF-8"

# Create a new SES resource and specify a region.
client = boto3.client('ses', region_name=AWS_REGION)


def order_notification(recipient):
    # Try to send the email.
    try:
        # Provide the contents of the email.
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    recipient,
                ],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': CHARSET,
                        'Data': BODY_HTML,
                    },
                    'Text': {
                        'Charset': CHARSET,
                        'Data': BODY_TEXT,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': SUBJECT,
                },
            },
            Source=SENDER,
            # If you are not using a configuration set, comment or delete the
            # following line
            # ConfigurationSetName=CONFIGURATION_SET,
        )
    # Display an error if something goes wrong.
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        print("Email sent! Message ID:"),
        print(response['MessageId'])
```

The structure of sending email has been taken from the boto3 official documentation.

References:
- [https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-using-sdk-python.html](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-using-sdk-python.html)
- [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/ses-template.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/ses-template.html)



Make sure to install [boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html) library which is basically the Python SDK for AWS.

![step16](./steps/step16.png)

```
pip install boto3==1.18.26
```

# AWS CLI

Before moving ahead, make sure you have [AWS CLI](https://aws.amazon.com/cli/) installed in your machine.


![step17](./steps/step17.png)


![step18](./steps/step18.png)


![step19](./steps/step19.png)

The installation process is documented in the below link.
- [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)


Once the installation is complete, we need to set up the SMTP Credentials which is required for sending emails.


I will update the **Access Key ID** and **Secret Access Key** in the [IAM](https://aws.amazon.com/iam/) console.

![step20](./steps/step20.png)

![step21](./steps/step21.png)


Let me now try to do a dry run by sending an email and check whether I am receiving it or not.

I will open up the python console and import the mail function.

I will try to send to the same verified email address.

![step22](./steps/step22.png)

Looks like something is wrong with the access. Let me try to investigate.

![step23](./steps/step23.png)

I will provide full access for sending emails, but I don’t **recommend** that. It’s not a good practice, 
this is a tutorial we can ignore this case, but make sure when you are working on a live production use case, you 
should have stringent controls over your access.

![step24](./steps/step24.png)


I will revoke this access key and create a new one. I hope you are already aware of how to do this, in case not then watch the
video it will be helpful for you to navigate.

* The access keys shown in the image will be different for yours. Don't copy the access keys which is 
being shown in the image, because later we will delete these keys, and it stays invalid.


![step25](./steps/step25.png)


Let me re-test once more.

![step26](./steps/step26.png)


Yes, the email has been sent successfully, and we have successfully received the email as well.


![step27](./steps/step27.png)

I will restart celery to pick up the new changes.

Now, I will try to place an order from swagger UI and expect that once the order has been placed, we will receive an email.

Again I am going to purchase an IPhone 13 whose product id is 1.

I need to do some code modification in my order function.

I need to replace this line with our task.

![step28](./steps/step28.png)


```python
from . import tasks

tasks.send_email.delay('fastapi@boximail.com')
```

Delay is a shortcut to send a task message to the background.

Now, I will come back and try to execute the order.

![step29](./steps/step29.png)

As you can see the celery has picked up the task, and we got the response as **“Email Sent”** with the message ID.


![step30](./steps/step30.png)

![step31](./steps/step31.png)

We have also received the new mail.

![step32](./steps/step32.png)

So, I hope you got a basic understanding of how things are working behind the scenes. 

If you are more interested, please check the Celery [documentation](https://docs.celeryproject.org/en/stable/).

You must now be able to clearly visualize the entire flow of adding products and
then pushing to cart and finally placing order and getting the order confirmation over the mail.

I will see you in the next tutorial, where we will be focusing on Authentication & JWT.

















