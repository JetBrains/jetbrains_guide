---
type: TutorialStep
date: 2021-01-29
title: Setting Up a Database in MongoDB Atlas
technologies:
  - 
    "aws]topics": '['
author: mm
subtitle: Connect MongoDB smoothly by connecting through Pycharm Professional to explore the database GUI.
thumbnail: ../thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/TfwDOKRiYQ4
---

In this tutorial we are going create a MongoDB Cluster and connect through PyCharm Professional.

# MongoDB Atlas

MongoDB is open-source cross-platform document-oriented database. As you know MongoDB provides a managed database as a service which is also known as **MongoDB Atlas**. They offer free storage upto 512MB which is good enough for development but not suitable for production workloads.

![atlas_step_1](./steps/step1.png)

This is the landing page which provides a list of information related to your databases.


Now I am going to click on **Build a Cluster**. I will choose Shared Cluster which is **FREE** of cost.


![atlas_step_2](./steps/step2.png)

I will choose **AWS** as my cloud provider and pick **Mumbai (ap-south-1)** region to reduce latency.

I will set cluster name as **myDB**, after that I will click on **Create Cluster**. It will take a few minutes to provision the new cluster.

# Database Access

![atlas_step_3](./steps/step3.png)

Once the database has been successfully created, we need to create a **Database User** which will be authorized to connect to the database.


Click on **Database Access**. Provide a username and click on, **Autogenerate Secure Password**.

In **Database User Privileges** make sure you have access to **Read and write to any database**.

Also, make sure to enable permission to access the cluster, and finally click on **Add User**. It will take some time to reflect those changes.

Now, click on **Network Access**.

![atlas_step_4](./steps/step4.png)

Make sure to whitelist your IP Address. As you can see, for this tutorial, I have provided **0.0.0.0** which means I can connect to the database from any IP Address. This is definitely not good when it comes to security. Please follow the **Defense in Depth** approach and try to restrict IP addresses. Exposing everything to the outer world makes it more vulnerable to data breaches and hacking.

After setting up the Network Access, it will take some time for changes to take effect.


![atlas_step_5](./steps/step5.png)

Once the changes have been successfully updated, I will be following the instructions for connecting to the MongoDB Database.

I am going to click on **Connect** and then will click on **Connect using MongoDB Compass**, and finally I will copy the **connection string**.


# Connecting through PyCharm Professional


![atlas_step_6](./steps/step6.png)

I will click on the **Database** section. I will click on the + (plus) button,  hover to **Data Source** and then click on **MongoDB**.

![atlas_step_7](./steps/step7.png)

Now, paste the **connection string** in the **Host** Section. We will be updating all the information like user, database name, password and the URL.

![atlas_step_8](./steps/step8.png)


After that I am going to click on **Test Connection** to check whether I am able to establish connection to the DB or not, as you can see the connection was successful. I will click on Apply and then OK.

We have successfully connected with the MongoDB Database through PyCharm Professional. 












