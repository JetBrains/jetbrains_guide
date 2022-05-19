---
type: TutorialStep
date: 2021-04-09
title: Setup AWS RDS in PyCharm
technologies: [django,aws]
topics: [python]
author: mm
subtitle: Connect Postgres with our Django Application.
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/r90CNlorK78
---

Hello everyone, welcome to the Django tutorial series. 
In this tutorial step, we are going to connect Django with our 
Postgres RDS instance in PyCharm.


# DataGrip 

DataGrip is a database management environment for developers. 
It is designed to query, create and manage databases. Databases
can work locally, on a server, or in the cloud. DataGrip MySQL, 
PostgreSQL, Microsoft SQL Server, Oracle, and more. If you have
a JDBC driver, add it to DataGrip, connect to your DBMS, and start
working.

All of DataGrip’s features are also available in many other IDEs from JetBrains like IntelliJ IDEA, 
PhpStorm, PyCharm, RubyMine, Rider and GoLand.


I will goto the **database** section. Click on the **plus (+)** button then hover to **Data Source** and **PostgreSQL**.

![datagrip_postgres](steps/step1.png)

If you receive any message like **“Download missing driver files”** then make sure to download it.

![datagrip_postgres_2](steps/step2.png)

I will provide a name in the data source which will 
act as an identifier. Make sure to fill in all the 
necessary information like the host, username, password
and the database name.

![datagrip_postgres_3](steps/step3.png)

After filling in all the necessary information, 
click on **Test Connection**. 

As you can see in the following image, we received a success response: 
the connection has been successfully established.


![datagrip_postgres_4](steps/step4.png)

This is optional, as we are currently connecting to our Postgres RDS instance *directly*
inside an Ubuntu server because we have allowed ec2 security group
to connect with the database. If we want to connect through our
local development machine, then we need to perform SSH tunneling to securely
connect with the database.

![datagrip_postgres_5](steps/step5.png)

After the configuration has been setup, I will click on **Apply** and then **OK**.

As of now, there are no tables. I will connect the PostgreSQL database with our application, then perform migration.

![datagrip_postgres_6](steps/step6.png)

I will remove the **db.sqlite3** file, as we don’t require it now.

![remove_sqlite](steps/step7.png)



Next, I will move to the **settings.py** file where I will change 
the **DATABASES** settings and provide the required information. 

We will be passing our information through environment variables: much 
better than plain text. From a security standpoint, I would recommend to 
use [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) or 
[SSM Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html).


![django_db_settings](steps/step8.png)


I will also pass the **DEBUG** and **SECRET_KEY** information from the 
environment variable. Make sure to set **DEBUG** to **False** when you
are running a Django application in a production server. I have seen many
people make these common mistakes, and they don’t even rotate their
Django secret keys.

![django_db_settings_2](steps/step9.png)


I can even pass **ALLOWED_HOSTS** in the environment variable. It's fine to
use it directly. You can see I am passing an **asterisk(*)** which means
my application can be accessed from anywhere. It’s completely fine during
development but definitely not a good practice when you are running an 
application in a production server. Make sure to provide permitted
domains which can access your backend apps.


Before deploying your application on the production server, make sure you
follow the deployment checklist as provided in the Django documentation.

Reference:
- [Deployment checklist](https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/)
- [Security in Django](https://docs.djangoproject.com/en/3.1/topics/security/)


I have successfully modified the changes in **settings.py** file. I will
replicate the same changes by adding the environment variables in my PyCharm IDE.


![ide_env_variables](steps/step10.png)

Don't forget to install PostgreSQL the database adapter by running the command ```pip install psycopg2```

![db_adapter](steps/step11.png)


Okay, we are now successfully connected with our Postgres database.

![django_connected_to_db](steps/step12.png)


Now, I will copy the environment variables and will paste in 
different places of our IDE.

![ide_env_1](steps/step13.png)

![ide_env_2](steps/step14.png)

![ide_env_3](steps/step15.png)

![ide_env_4](steps/step16.png)
 

We are done with setting up the environment variables. 
Next, I will be migrating the database changes.

I will click on **Tools** and then **Run manage.py Task**

![django_manage_task](steps/step17.png)

I will type **migrate** command and press enter 
and all the new tables will be successfully created
in our database.

![migrate_command](steps/step18.png)

The miigration is successful: let me verify it in our database.

Yes, the tables are successfully getting reflected in our database. 

![db_tables](steps/step19.png)

In the upcoming tutorial step, I will be setting up a new app in our project.