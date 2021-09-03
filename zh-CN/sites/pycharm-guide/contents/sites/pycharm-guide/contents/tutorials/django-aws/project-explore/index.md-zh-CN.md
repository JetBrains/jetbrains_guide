---
type: TutorialStep
date: 2021-04-09
title: Exploring Project Structure & Creating Django App
technologies:
  - django
  - aws
topics:
  - python
author: mm
subtitle: Create a new app, define models, and explore the project's structure.
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/OIOJk_KZe8g
---

Hello everyone, welcome to the Django tutorial series. In this tutorial step, we are going to create a new app called **organization** and explore the project structure.

# Project Directory

Let me first explain about the project files, which consist of:

![project_dir](steps/step1.png)

The outer **SampleDemo/** root directory is a container for your project.

**manage.py**: A command-line utility that lets you interact with this Django project in various ways. You can read all the details about manage.py in django-admin and manage.py.

The inner **SampleDemo/** directory is the actual Python package for your project. Its name is the Python package name you’ll need to use to import anything inside it (e.g. SampleDemo.urls).

**SampleDemo/__init__.py**: An empty file that tells Python that this directory should be considered a Python package. If you’re a Python beginner, read more about packages in the official Python docs.

**SampleDemo/settings.py**: Settings/configuration for this Django project.

**SampleDemo/urls.py**: The URL declarations for this Django project; a “table of contents” of your Django-powered site. You can read more about URLs in URL dispatcher.

**SampleDemo/asgi.py**: An entry-point for ASGI-compatible web servers to serve your project.

**SampleDemo/wsgi.py**: An entry-point for WSGI-compatible web servers to serve your project.


Let’s begin by creating our first app. I will click on **Tools** and then **Run manage.py Task**.

![project_manage_task](steps/step2.png)

I will type **startapp** followed by app name.

![start_app](steps/step3.png)

You can see that there is a new directory called **organization** which is appearing in the project.

We need to register this module in the **INSTALLED_APPS** which you will find in the **settings.py** file. Django uses installed apps to look for models, management commands, tests, and other utilities.

![organization_installed_apps](steps/step4.png)

Let me explain first about the app structure.

![app_structure](steps/step5.png)

The **migrations** folder is where Django stores migrations, or changes to your database.

**____init____.py** tells python that your organization app is a package.

**admin.py** is where you register your app’s models with the Django admin application.

**apps.py** is a configuration file common to all Django apps.

**models.py** is the module containing the models for your app basically ORM modelling.

**tests.py** contains test procedures which run when testing your app.

**views.py** is the module containing the views for your app or where we write our business logic.


I hope you got a basic understanding about the project and the app layout. If not, I would recommend reading the official Django [documentation](https://docs.djangoproject.com/en/3.2/) where you will have tons of resources with examples.


Let’s begin by creating our new models. I will open **models.py** where I will be defining my new models.

![organization_models_1](steps/step6.png)

As you can see, I have created a **TimestampModel** which is a common requirement in all the models to have created and updated fields. This is an [abstract model](https://docs.djangoproject.com/en/3.1/topics/db/models/#abstract-base-classes). Abstract models are base classes in which you define fields which you want to include in all child models. Django doesn't create any database tables for abstract models.


Now, I am going to create our **Organization** model which will inherit the timestamp model. I will define basic fields along with their types like CharField, TextField etc.

![organization_models_2](steps/step7.png)

**[class Meta](https://docs.djangoproject.com/en/3.1/topics/db/models/#meta-options)** : This is just a class container with some options (metadata) attached to the model. It defines such things as available permissions, associated database table name, whether the model is abstract or not, singular and plural versions of the name, etc.

We have defined **ordering** in the class Meta, basically calling objects **order_by** id descending.

The **____str____** method in Python represents the class objects as a string.

Next, I will create a new model called **BoardMember** which keeps a list of users who are part of the organization like director, shareholder etc.

![organization_models_3](steps/step8.png)

Observe at line number **28** and **29**, the model has foreign key relationships with the user and organization model. If you have knowledge about database systems then you must have heard about foreign keys. A [foreign key](https://en.wikipedia.org/wiki/Foreign_key) is a key used to link two tables together.

Observe at line **30** in **models.py** file where we are importing our tuple **BOARD_MEMBERS** from **constants.py** file.

![model_constants](steps/step9.png)



We are done with the models, let's generate the migration file. I will follow the same process as before.

I will click on Tools and then **Run manage.py Task** and then I will type **makemigrations** and press enter. This is going to create the migrations file under the **organization/migrations** folder.

You will see a new file has been generated under the name **0001_initial.py**.

![organization_migration](steps/step10.png)

Whenever you run the **makemigrations** command, Django is going to look in all your apps which are there: models that have been added, modified or deleted. Based on the changes, it will create a migration file under the **migrations** directory. After that, I am going to type a **migrate** command to reflect these changes into our database tables.


Yes, the migration has been successfully applied, the new tables will be reflected in our database.

![organization_db_tables](steps/step11.png)


We have completed implementing our models. In the upcoming tutorial step, I will be writing REST APIs which store, retrieve & delete information from our models.






