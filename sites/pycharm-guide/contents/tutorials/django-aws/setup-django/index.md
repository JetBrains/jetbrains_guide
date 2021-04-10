---
type: TutorialStep
date: 2021-04-09
title: Creating a new Django Project in PyCharm
technologies: [django,aws]
topics: [python]
author: mm
subtitle: Installing virtual environment and python dependencies
thumbnail: ../thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/2w3OHXLWfL4
---

Hello everyone, welcome to the Django tutorial series. 
In this tutorial, we are going to set up Django and run
our first PyCharm Project.


# Installing Dependencies

As you can see the below image, we will be installing python dependencies 
which is required for our django project.

![python_dependencies](./steps/step1.png)


We will move forward installing the virtual environment after the system 
dependencies have been successfully installed. 

![python_dependencies_2](./steps/step2.png)

I am going to name the virtual environment as **DjangoEnv** and  **-p** flag
stands for path to the python interpreter, as for now I will be using the
default python interpreter, so I will mention it as **python3**. Ubuntu 20.04 LTS
comes pre-installed with python 3.8


I will open PyCharm and create my new project, I am going to name it **SampleDemo**.

![python_dependencies_3](./steps/step3.png)

Since I have already configured the environment, I will click on the
**previously configured interpreter** where I will be providing the path to
the virtual environment which I created earlier. PyCharm provides multiple 
ways to set up the python interpreter.

Everything looks good, I will click on **Create**.


After the project has been successfully initialized, then I will move forward
and change the appearance of the IDE.

![pycharm_django_project_1](./steps/step4.png)


I will click on **File** --> **Settings**. Under Appearance & Behavior I will
change the theme from **Darcula** to **IntelliJ Light**.

![pycharm_django_project_2](./steps/step5.png)

We are now ready to start our development server. I will click on **Run** 
and then **Run ‘SampleDemo’**

![pycharm_django_project_3](./steps/step6.png)

As you can see the application is running on **127.0.0.1** on port **8000**.

![pycharm_django_project_4](./steps/step7.png)


As you can see the below image, the django landing page has appeared, that means
our installation process is successful.

![pycharm_django_project_5](./steps/step8.png)


In the upcoming tutorial, I will show to connect Django 
with our Postgres RDS instance.

