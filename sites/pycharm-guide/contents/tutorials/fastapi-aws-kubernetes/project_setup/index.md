---
type: TutorialStep
date: 2022-01-02
title: Project Setup
technologies: [fastapi, kubernetes, aws]
topics: [python]
author: mm
subtitle: Setting up FastAPI project type
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://www.youtube.com/watch?v=_AFwFvGnEpY
---

Hello everyone ! Welcome to PyCharm FastAPI Tutorial Series.

In this tutorial we are going to set up the FastAPI project with PyCharm. We are
going to use the PyCharm Professional EAP **2021.3** which includes FastAPI project type, EAP stands
for **Early Access Program** but very soon it will be part of the stable release.

* **Note**: Just for your information, I am running this entire project in a virtual machine  through VMWare workstation which has Ubuntu 20.04 LTS


# Virtual Environment

Let’s begin. So, before going ahead we have to create a virtual environment, 
if you are interested you can even create a virtual environment from PyCharm itself, but I 
would like to go with the terminal.

```
python3 -m venv FastEnv
```

![step1](./steps/step1.png)


Once environment has been successfully created, we will move ahead with PyCharm.


# JetBrains Toolbox

![jetbrains_toolbox](./images/toolbox.png)

So, for running PyCharm in my system, I normally use 
the [Toolbox](https://www.jetbrains.com/toolbox-app/) offered by Jetbrains.

Definitely a great tool for saving time & effort.


- Updates automatically
- Update the plugins together with IDE
- Roll back and downgrade
- Maintain multiple versions side by side
- Use different products offered by Jetbrains


I am going to use PyCharm 2021.3 EAP, because it contains the FastAPI project type.

![jetbrains_toolbox_2](./images/toolbox-2.png)


# Creating a New Project

I will click on **New Project**.

![step2](./steps/step2.png)

You can observe on the left side the FastAPI. 

![step3](./steps/step3.png)

I am going to change the project location to ecommerce.

![step4](./steps/step4.png)

I am going to click on the previously configured interpreter. It has automatically 
picked up the location, this is because I have used the same environment name for
a different project earlier.

There are many flavours provided by PyCharm for setting up
the interpreter like Docker, remote SSH, WSL etc.

![step5](./steps/step5.png)

Once, the interpreter has been configured, I am going to click on **Create**.

Our project got successfully bootstrapped. PyCharm has generated two files:  ```main.py``` and ```test_main.http```

![step6](./steps/step6.png)


The ```main.py``` contains two apis : ```root``` and ```say_hello``` 

The ```root``` is going to return a json response with a message
hello world and the ```say_hello``` function returns a string 
which accepts a parameter name from the user.

If you have observed then you can see that it took only 8 lines of code to write our first API.

The ```test_main.http``` contains the FastAPI endpoints where you can test your rest apis, 
something similar to [Newman](https://github.com/postmanlabs/newman) CLI. 

![step7](./steps/step7.png)

So, let’s begin by running our application. I will click on **Run** and then **Run ‘ecommerce’**.

![step8](./steps/step8.png)

You can observe the console output, it is running successfully on localhost on port 8000.

![step9](./steps/step9.png)

I will open the browser and check the response.

Yes, it works fine. I got the response Hello World.

![step10](./steps/step10.png)

# FastAPI Docs

FastAPI also generates automatic API docs for us at path **/docs**. It uses
the [OpenAPI](https://www.openapis.org/) standard for defining API. 

It uses two flavours: [Swagger UI](https://swagger.io/tools/swagger-ui/) & 
[ReDoc](https://github.com/Redocly/redoc).

![step11](./steps/step11.png)

Let me test one of our API. I am going to pass the **name** and click on **execute**.


![step12](./steps/step12.png)

And Yes, it works. You can see the response message **“Hello Sample”**

![step13](./steps/step13.png)

You can do a lot of things with docs, if you want to play around then definitely 
check the [official documentation](https://fastapi.tiangolo.com/).


![step14](./steps/step14.png)

I am going to provide a little more meta information to my docs like 
title, description, version etc.

Let me save it and refresh. You can see that title, description and version
has been updated.

![step15](./steps/step15.png)

You can also disable it while your application is running in production, so you don’t want to 
expose docs to the outside world.

![step16](./steps/step16.png)

You can see now it's showing not Found, this is really cool. 

You can change path name in ```docs_url``` to point towards a 
different path name, completely up to you.

![step17](./steps/step17.png)

Let me show you one more interesting thing. I am going to change the name from string to integer. 

![step18](./steps/step18.png)

Now, you can observe in the docs that now it needs integer to be passed instead of string.

![step19](./steps/step19.png)

Even if I pass a string, it’s not going to accept it. You don’t even
need to write a separate validation for it. 

Thanks to [Pydantic](https://pydantic-docs.helpmanual.io/) & 
[type-hints](https://docs.python.org/3/library/typing.html), this makes life easy.

I hope you are going to explore more amazing features provided by FastAPI. 

In the next tutorial we are going to look into integrating FastAPI with 
Postgres along-with outlining our project.



