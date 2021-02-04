---
type: TutorialStep
date: 2021-01-29
title: Writing REST APIs 
technologies: [AWS Toolkit]
topics: [aws]
author: mm
subtitle: Beginning CRUD (Create, Read, Update, Delete) Operations
thumbnail: ../thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/3imrJukMeMQ
---

Hello everyone, today I will be working on APIs basically focusing in CRUD operations.

Source code is available on [Github](https://github.com/mukulmantosh/ServerlessDemo).

# Create (C)

We are going to create an <strong>Organization</strong> directory and as we know, 
every organization has users or employees. Thus, we are going to perform four different operations
like <strong>Create</strong>, <strong>Read</strong>, <strong>Update</strong>, <strong>Delete</strong>.


Let me start creating the <strong>organizations</strong> directory. But before that let me delete the <strong>hello world</strong>.

![crud_step_1](./steps/step1.png)

I am going to place <strong>requirements.txt</strong> under organizations. 
Basically it needs to be placed under the <strong>users</strong> directory. I just forgot to do that,
but I have rectified in my upcoming video. Don’t worry, you can find the entire 
tutorial source code in [Github](https://github.com/mukulmantosh/ServerlessDemo).

![crud_step_2](./steps/step2.png)

Let me give you brief idea about the packages which I am using in this project. 

`requests` package allows you to send HTTP requests using Python.

`ujson` is also known as ultra json and written purely in C. It is very fast compared to the standard json module.

`pymongo` & `dnspython` both are required dependencies for connecting to a MongoDB Database.

`marshmallow`  module helps convert complex data types, such as objects, to and from native Python data types. This module is normally used with Flask but if you are coming from Django Rest Framework background you can compare it with serializers.

`pyjwt` is a Python library which allows you to encode and decode JSON Web Tokens (JWT).  We will be using the JWT module in the Login & Refresh Token APIs.

`argon2` is a cryptographic hashing algorithm, most recommended for password hashing. It is also the winner of the 2015 Password Hashing Competition, a community-organized open competition to select a next generation hashing algorithm. 
It’s designed not to be easier to compute on custom hardware than it is to compute on an ordinary CPU.


* Make sure to run `pip install -r requirements.txt`


I will be creating different packages like (<strong>create</strong>,<strong>read</strong>, <strong>update</strong>, <strong>delete</strong>) under users.


Under the <strong>create</strong> directory, I will create an <strong>app.py</strong> file and utils package 
where I will be storing basic utilities like db connection and validator.

Now, I am going to write the code for connecting to MongoDB, but before that let me open MongoDB Atlas and copy the connection string for Python driver.

![crud_step_3](./steps/step3.png)

I will be creating a <strong>MongoDBConnection</strong> Class. This class is actually a <strong>context manager</strong>, 
as you may know Context managers allow you to allocate and release resources precisely when you want to. 
The primary motivation behind context managers is resource management.

As you can see in the below cod, we have used special methods `__enter__` and `__exit__`. 
The enter method will help to establish connection with the database, and the exit method will take care to close the connection.


`embed:tutorials/intro-aws/crud/db.py`


Now I will open the <strong>validator.py</strong> file and start creating a schema using the <strong>marshmallow</strong> module.

We won’t be storing plain-text passwords in the database. 
You can see that we are using the <strong>encrypt</strong> function which returns the hashed value.

`embed:tutorials/intro-aws/crud/create_validator.py`


You can see how the schema looks similar to [<strong>DRF Serializers.</strong>](https://www.django-rest-framework.org/api-guide/serializers/) For post-processing 
you can see we are using <strong>post_load</strong> decorator for encrypting our passwords as well validating email
for their existence in the db.


Now, I am going to open <strong>app.py</strong> where the main business logic resides.

Let me first import the necessary modules. Next, I will define the <strong>lambda handler</strong>.

![crud_step_4](./steps/step4.png)


All the information will be coming under the <strong>event body</strong>. I need to parse the information using the <strong>json</strong> module.

The <strong>UserRegistrationSchema</strong> will be validating and processing whether all the inputs provided are correct or not.
If the validation fails, or there is a generic key error, then it will raise a bad request, 
otherwise I will store the record in the registrations collection and return 201 HTTP response.

Below code is the final snippet how the <strong>app.py</strong> is going to look like.

`embed:tutorials/intro-aws/crud/create_app.py`

Now, I am going to open the <strong>template.yaml</strong> file.

I have a global timeout of 30 seconds, and set the memory size to 2GB, it's completely based on your preference.

![crud_step_5](./steps/step5.png)


After setting the memory limit, I am going to register the API.

![crud_step_6](./steps/step6.png)

<strong>Codeuri</strong> points to the directory where my code resides and <strong>Handler</strong> is combination of <strong>folder_name.file_name.function_name</strong>

![crud_step_7](./steps/step7.png)

Please make sure <strong>requirements.txt</strong> is placed under the <strong>user</strong> directory, otherwise the build will fail.

We are now ready to test our application.  Let me copy a sample snippet from `event.json`. 
I will be passing dummy information in the body to check whether my function is able to create a new user.

![crud_step_8](./steps/step8.png)

Okay, as you can see in the console, the user has been registered successfully. 

![crud_step_9](./steps/step9.png)


Let me verify the data is also present in MongoDB. 

Yes, the record has been successfully inserted in our database and even the password is
stored in encrypted format.


![crud_step_10](./steps/step10.png)


Finally, we can store the user information in our database. Let’s move and create an API
which retrieves user’s lists from the database.


# Read (R)

I am going to create a <strong>read</strong> package under the user. 
I will follow a similar kind of implementation as I did for the create operation.

I am going to copy the <strong>db.py</strong> file from utils and place it under the <strong>read/utils</strong>.

![crud_step_11](./steps/step11.png)


Same as previous, I will create <strong>app.py</strong> where I will be defining my business logic.

You can see on line <strong>7</strong> that I am trying to retrieve the id from path parameters. 
The ID is referring to the primary key of a specific user.

![crud_step_12](./steps/step12.png)


The <strong>retrieve_info</strong> function will take <strong>object_id</strong> as an input. <strong>Object_id</strong>
is referring to the ID which we receive from <strong>PathParameters</strong>, if object_id is present in the db we return information
related to that specific user else we return all users list.

This is how the final code going to look like.

`embed:tutorials/intro-aws/crud/read_app.py`


The implementation is done. Let’s move to <strong>template.yaml</strong> file and register our API.

We will register two APIs. One is <strong>OrganizationUserRead</strong> and <strong>OrganizationUserReadById</strong>.

![crud_step_13](./steps/step13.png)

![crud_step_14](./steps/step14.png)

You can see both the APIs are pointing to the same business logic. 
In <strong>ReadById</strong>  we are passing <strong>Id</strong> as a 
parameter for getting information for a particular user.

Let’s test out the functionality. 
I will click on <strong>Run</strong> and then <strong>Edit Configurations</strong>. 
This is a GET API we don’t need to pass anything in the body. 

![crud_step_15](./steps/step15.png)

In Windows machine you will get a Docker prompt for file sharing, kindly accept it.

As you can below in the console, we are receiving all users list.

![crud_step_16](./steps/step16.png)


Now, I will try to retrieve information for a specific user. Let me first go to 
the <strong>registrations</strong> collection. 

I will copy the <strong>_id</strong> for the user <strong>Mike Jones</strong>.

![crud_step_17](./steps/step17.png)

I will then paste the <strong>_id</strong> it in the <strong>pathParameters</strong>. I will click on Apply and then OK.

![crud_step_18](./steps/step18.png)

Before running tha app, I have found an issue which needs to be fixed otherwise our code is not going work.

Open <strong>app.py</strong> goto line number <strong>45</strong> it should be <strong>“Id”</strong>, I should be uppercase.

![crud_step_19](./steps/step19.png)


Save it and let me try to run again.

![crud_step_20](./steps/step20.png)


It's working fine. We are getting information for user <strong>Mike Jones</strong>. 


Finally, our API is able to retrieve information from the database. Let’s move and create an API which will be used to update records in our database.


# Update (U)

I am going to create an <strong>update</strong> package under the user. I will follow the same approach that I did before for create & read operations.


As you can see over here at line <strong>10</strong> that we are again capturing <strong>Id</strong>. If the Id is
present in the database we will move forward and update all the required fields else it will raise an error.

![crud_step_21](./steps/step21.png)


I will call the <strong>update_one</strong> operation, observe line number <strong>25</strong> which will search whether
the ObjectId exists in the database if yes then it will set the new values. If the update is successful
then it will return 200 HTTP Response.

![crud_step_22](./steps/step22.png)


This is how the final code for the update operation is going to look like.

`embed:tutorials/intro-aws/crud/update_app.py`

Let’s register the API in the <strong>template.yaml</strong> file. As this API is being used to update our records, 
so the method is going to be <strong>PUT</strong>.

![crud_step_23](./steps/step23.png)

 
Now, let’s test the functionality. I will click on <strong>Run</strong> and then <strong>Edit Configurations</strong>.


I will pass necessary information like <strong>id</strong> in path parameters and in the body I will send the 
values for firstname, lastname and email which needs to be updated.

![crud_step_24](./steps/step24.png)

Apply the changes and try to run again.

Finally, our data has been successfully updated. 

![crud_step_25](./steps/step25.png)

Let me refresh the <strong>registrations</strong> collection and verify whether data has been updated or not. 

![crud_step_26](./steps/step26.png)

Great ! The data has been updated.


# Delete (D)

Let’s now move to the final part where we are going to remove records from the database by creating a DeleteAPI.

I am going to perform the same kind of operations that I did previously for other operations.


You can see over here at line <strong>9</strong> that we are again capturing <strong>Id</strong>. 
I will call the <strong>delete_one</strong> operation which will remove the object from the database.

![crud_step_27](./steps/step27.png)

We are performing a similar kind of operation what we did for the update.

Okay, our implementation is done. This is how the final code is going to look like.

`embed:tutorials/intro-aws/crud/delete_app.py`

Let’s now register our API in <strong>template.yaml</strong> file and test out the functionality.

I am going to remove the last row <strong>David Jones</strong> from the <strong>registrations</strong> collection.

Click on <strong>Run</strong> and then <strong>Edit Configurations</strong>. 
I will pass the <strong>id</strong> of David Jones in <strong>pathParameters</strong>.

![crud_step_28](./steps/step28.png)

I will apply the changes and try to run again.

The data has been successfully deleted from the db. Let me refresh the collection and verify it.

![crud_step_29](./steps/step29.png)

Great ! the record has been removed.

![crud_step_30](./steps/step30.png)

We have successfully completed the entire CRUD (Create, Read, Update & Delete) APIs. In the upcoming tutorial
we will be working on the Custom Authorizers to protect our APIs.
