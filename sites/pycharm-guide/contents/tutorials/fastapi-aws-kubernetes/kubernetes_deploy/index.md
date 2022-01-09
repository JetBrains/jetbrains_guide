---
type: TutorialStep
date: 2022-01-02
title: Kubernetes Deployment
technologies: [fastapi, kubernetes, aws]
topics: [python]
author: mm
subtitle: Writing K8s manifests & deploying in minikube
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://www.youtube.com/watch?v=WC4e3Yq8k8A
---

Hello everyone ! Welcome to PyCharm FastAPI Tutorial Series. 

In this tutorial we will be focusing on deploying our application in [Kubernetes](https://kubernetes.io/). It is an open-source container-orchestration 
system for automating computer application deployment, scaling, and management. It was originally designed by [Google](https://about.google/) and is now
maintained by the [Cloud Native Computing Foundation](https://www.cncf.io/).


So, let’s get started.


# Minikube

For our tutorial, we will be using minikube.


[minikube](https://minikube.sigs.k8s.io/docs/) is a tool that lets you run Kubernetes locally. Minikube runs a 
single-node Kubernetes cluster on your personal computer (including Windows, macOS and Linux PCs) so that you can
try out Kubernetes, or for daily development work.

Let me tell you one thing, there are multiple ways to install Kubernetes and tons of tutorials available on the Internet. 
You can check them out if you don’t want to go forward with minikube.

Also, I will be talking at a high level. We won’t be getting a deeper dive into Docker or Kubernetes, as you know 
these are subjects of their own, and I expect from the audience that they have experience working with these technologies.

If not I will share some links in my reference video where you can learn those topics separately.


# Installing Dependencies

Let’s begin by updating the system dependencies.

```bash
sudo apt-get update -y
sudo apt-get upgrade -y
```

![step1](./steps/step1.png)

![step2](./steps/step2.png)

After updating, I will install minikube dependencies.

```bash
sudo apt-get install -y curl wget apt-transport-https
```

![step3](./steps/step3.png)

Now, I will download the minikube binary.

```bash
sudo wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
```

![step4](./steps/step4.png)

I will copy the **minikube-linux-amd64** to **/usr/local/bin/minikube** and make it executable.

```bash
sudo cp minikube-linux-amd64 /usr/local/bin/minikube
sudo chmod +x /usr/local/bin/minikube
```

![step5](./steps/step5.png)

I will type the minikube version, just to verify.

Looks Good, minikube is successfully installed.

![step6](./steps/step6.png)

Next, I will install the **[kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)** which is the Kubernetes command-line tool,
which allows you to run commands against Kubernetes clusters.

For your reference, you can follow this link : [https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

### Install kubectl binary with curl on Linux

```bash
sudo curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo chmod +x kubectl
sudo mv kubectl /usr/local/bin
```

Once it has been downloaded, I will make it executable and move it to **/usr/local/bin** path.

![step7](./steps/step7.png)

We are done. Let’s start the minikube, but before starting I will create a folder in my home directory which will be 
required for mounting, for storing postgres database files.

![step8](./steps/step8.png)

### Installing Docker

I won’t show the installation step of Docker because there are tons of tutorials on that. But I will 
share a good tutorial which I found in the DigitalOcean community, you can check that out.

- [https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)

Once docker is installed, we will move ahead and start the minikube.

At the time of this recording we are using Kubernetes **1.22** version.

### Starting Minikube

To start the minikube server run the below command :

```bash
minikube start --mount-string "$HOME/postgres-data:/data" --driver=docker --install-addons=true --kubernetes-version=stable
```

![step9](./steps/step9.png)


The installation will take some time.

Once minikube has been started successfully, to verify I will run the below command :

```bash
kubectl get nodes
```

![step10](./steps/step10.png)

You can see that our single node is running perfectly fine.

Now, it's time to come back to PyCharm and write our Dockerfile.


# Dockerfile

According to docker documentation, A Dockerfile is a text document that contains all the 
commands a user could call on the command line to assemble an image. 

- [Dockerfile best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)


We are using Python 3.8 slim image. The slim image is a paired down version of the full image. This image generally only installs the minimal packages needed to run your particular tool. 

![step11](./steps/step11.png)

There is an interesting article in [Medium](https://medium.com/) talking about different docker images, do check that out.

- [Alpine, Slim, Stretch, Buster, Jessie, Bullseye — What are the Differences in Docker Images?](https://medium.com/swlh/alpine-slim-stretch-buster-jessie-bullseye-bookworm-what-are-the-differences-in-docker-62171ed4531d)


**Dockerfile**

```dockerfile
# pull official base image
FROM python:3.8.11-slim-buster

# create directory for the app user
RUN mkdir -p /home/app

# create the app user
RUN addgroup --system app && adduser --system --group app   #  going to create a group and a user.


# Next, we will move forward and create our app directory where we will copy our code.
ENV HOME=/home/app
ENV APP_HOME=/home/app/code
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV ENVIRONMENT prod


# Following up, we will install system and python dependencies.
RUN apt-get update \
  && apt-get -y install netcat gcc libpq-dev \
  && apt-get clean

# install python dependencies
RUN pip install --upgrade pip
RUN pip install -U setuptools
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# After that I will copy the entire code, change ownership and finally run the gunicorn process at port 5000.
# add app
COPY . .

# chown all the files to the app user
RUN chown -R app:app $APP_HOME

# change to the app user
USER app

# run gunicorn
CMD gunicorn --bind 0.0.0.0:5000 main:app -k uvicorn.workers.UvicornWorker
```

## Plugins

There are some cool plugins available for Docker & Kubernetes in PyCharm which I forgot to mention. Let me quickly install them.

![step12](./steps/step12.png)

Docker plugin is already installed, let me check for Kubernetes.

![step13](./steps/step13.png)

We will use the Kubernetes plugin later, and I will show you how cool it is to manage pods through PyCharm.

Before that, let's build our docker image.

I will run the below command : 

```bash
docker build -t mukulmantosh/ecommerce-fastapi:1.0  .
```

The build process is complete.

![step14](./steps/step14.png)

Next, we need to host this docker image, so we will deploy this image in DockerHub. [DockerHub](https://hub.docker.com/) is basically a
docker registry where you can store and share your docker images, the same way you store code in GitHub repositories. 


As you can see I have already created the docker repository, currently it is private but later, I will make it public.

As you can see I already have an image with a tag as latest.


![step15](./steps/step15.png)


Before pushing the image to DockerHub, I will create a **.dockerignore** file which is similar to **.gitignore**. 

![step16](./steps/step16.png)


I will add some files and directories which won’t be part of the docker image.

I will rebuild the image and provide the tag as shown in the DockerHub. As we have already **latest** tag, we will create a tag with version **1.0**

Now, we are going to push the image to DockerHub, before that we need to authenticate our credentials.

I will type the below command and pass the credentials (username & password) :

```bash
docker login
```

![step17](./steps/step17.png)

For pushing the docker image, I will type the below command : 

```bash
docker push mukulmantosh/ecommerce- fastapi:1.0
``` 

![step18](./steps/step18.png)


I will change the visibility of the repository to public because it's required when we need this image to be used with Kubernetes.


![step19](./steps/step19.png)

If you have a use case when working with Kubernetes, you need to use images from a private registry, 
then definitely check out the documentation provided by Kubernetes.

- [Pull an Image from a Private Registry](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)

They have clearly explained in the documentation.

We are done with the Dockerfile and the image got built successfully, and we hosted the image in DockerHub.

Now, it’s time to play with Kubernetes.


# K8s Manifests

I am going to create a directory in root and name it **k8s**. As you know k8s is a short form of Kubernetes. 

K8s is just an abbreviation of Kubernetes (**"K" followed by 8 letters "ubernete" followed by "s"**).

![step20](./steps/step20.png)

Under K8s directory, I will create multiple directories.

## Namespace

First I will create a **namespace**. In Kubernetes, namespaces provide a mechanism for isolating groups of resources
within a single cluster. Names of resources need to be unique within a namespace, but not across namespaces.


![step21](./steps/step21.png)

If you have observed one thing, all these files end with **.yaml** extension. The Kubernetes resources are created 
in a declarative way, thus making use of YAML files. 

Resources such as **pods**, **services**, and **deployments** are created by using the YAML files.

You can create resources with imperative commands, but it is suggested that declarative ways are much more flexible.

Coming back, I will set the namespace to **fastapi-project**.

So, all the pods, deployments, secrets will fall under this namespace.


**k8s/namespace/ns.yml**

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: fastapi-project
  labels:
    name: fastapi-project
```

After namespace, I will create a directory and name it code in which we will be writing deployment, services and secret.

Don’t worry, at the end of this tutorial I will explain the flow using a diagram.

![step22](./steps/step22.png)

## Deployment

Let’s move first with the deployment. A **deployment** is an object in Kubernetes that lets you manage
a set of identical pods. Without a deployment, you’d need to create, update, and delete a bunch of pods manually.


With a deployment, you declare a single object in a YAML file. This object is responsible for creating the pods,
making sure they stay up to date, and ensuring there are enough of them running.

You can also easily autoscale your applications using a Kubernetes deployment.

As you can see we will be running 8 replica pods of our application and Kubernetes will take care 
of that by checking the desired state. Kubernetes has a self-healing mechanism, It restarts containers
that fail, replaces containers, kills containers that don't respond to your user-defined health check, 
and doesn't advertise them to clients until they are ready to serve.

**k8s/code/deployment.yml**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecommerce-deployment
  namespace: fastapi-project
  labels:
    app: ecommerce
spec:
  replicas: 8
  selector:
    matchLabels:
      app: ecommerce-app
  template:
    metadata:
      labels:
        app: ecommerce-app
    spec:
      initContainers:
        - name: init-postgres-service
          image: postgres:10.17
          command: ['sh', '-c',
          'until pg_isready -h postgres-service.$(cat /var/run/secrets/kubernetes.io/serviceaccount/namespace).svc.cluster.local -p 5432;
          do echo waiting for database; sleep 2; done;']

      containers:
        - image: mukulmantosh/ecommerce-fastapi:latest
          imagePullPolicy: Always
          name: sample-container
          envFrom:
          - secretRef:
              name: ecommerce-secret
          ports:
            - containerPort: 5000
              name: fastapi
          readinessProbe:
            httpGet:
              port: 5000
              path: /docs
            initialDelaySeconds: 15
          livenessProbe:
            httpGet:
              port: 5000
              path: /docs
            initialDelaySeconds: 15
            periodSeconds: 15
          resources:
            requests:
              memory: "512Mi"
              cpu: "0.5"
            limits:
              memory: "1Gi"
              cpu: "1"
```

When working with Kubernetes, you are going to hear this word many times and that is **Pod**.

A pod is the smallest execution unit in Kubernetes. Pods are ephemeral by nature; if a pod (or the node it executes on) fails, 
Kubernetes can automatically create a new replica of that pod to continue operations. Pods include one or more 
containers (such as Docker containers).

You can see we have defined **InitContainers**. In Kubernetes, an init container is the one that 
starts and executes before other containers in the same Pod. It's meant to perform initialization
logic for the main application hosted on the Pod. For example, create the necessary user accounts, 
perform database migrations, create database schemas and so on.

But over here we are just checking whether our database server is up and running using the **[pg_ready](https://www.postgresql.org/docs/9.3/app-pg-isready.html)** command.


Now, under the **containers** section, we will define the docker image which we have already pushed to DockerHub.

**imagePullPolicy** has been set to **Always**. Every time the kubelet launches a container, it's going to pull the 
image from the container registry.

After that we are going to define a **secret**. We will implement this in a while. 

The container port is going to 5000.

Then we are going to do health checks using the **readiness probe** and **liveness probe**.

Readiness probes are designed to let Kubernetes know when your app is ready to serve traffic. Kubernetes makes sure the readiness probe passes before allowing a service to send traffic to the pod.

The kubelet uses liveness probes to know when to restart a container. For example, liveness probes could catch a deadlock, where an application is running, but unable to make progress.

As you can observe we are using the **httpGet** request to check for path **/docs** to return 200 response at a period of 15 seconds.


For your reference, read this documentation:
- [Configure Liveness, Readiness and Startup Probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)


Next, we are going to define the **memory limit** to 512MB and cpu and expect it won’t cross above that in case there is a memory leak.


A Container that requests 0.5 CPU is guaranteed half as much CPU as a Container that requests 1 CPU. You can use the suffix m to mean milli.

CPU is always requested as an absolute quantity, never as a relative quantity; 0.1 is the same amount of CPU on a single-core, dual-core, or 48-core machine.


## Secret

Next, we are going to create a secret. A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key. 
Secrets are similar to **[ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/)** but are specifically intended to hold confidential data.

Kubernetes accepts secrets as base64 encoded values, encoding and encryption both are different. If you are interested in encryption, then check out [bitnami sealed secrets](https://github.com/bitnami-labs/sealed-secrets).

We have provided the base64 values, decrypted values you can see in the comments what we are exactly passing.

**k8s/code/secret.yml**

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: ecommerce-secret
  namespace: fastapi-project
  labels:
    app: ecommerce
data:
  DATABASE_USERNAME: bXVrdWxtYW50b3No       # mukulmantosh
  DATABASE_PASSWORD: bXVrdWwxMjM=           # mukul123
  DATABASE_HOST: cG9zdGdyZXMtc2VydmljZQ==   # postgres-service
  DATABASE_NAME: c2FtcGxlZGI=               # sampledb 
```

## Service

Next, we are going to work on **[Service](https://kubernetes.io/docs/concepts/services-networking/service/)**.

We could use a deployment without a service to keep a set of identical pods running in the Kubernetes cluster. The deployment could be scaled up and down and pods could be replicated. Each pod could be accessed individually via direct network requests (rather than abstracting them behind a service), but keeping track of this for a lot of pods is difficult and this is where we introduce service.

A service is responsible for enabling network access to a set of pods. It does not matter how many pods come and go, the service is going to maintain a single IP address.


![step23](./steps/step23.png)

Image Credit : [Kubernetes : Using a Service to Expose Your App](https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/)

As you can see we have created a clusterIP service, internally we can talk with this service at port 5000. You can specify the type as ClusterIP otherwise it will be considered as a ClusterIP only if you don’t mention any type. 

**k8s/code/service.yml**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: ecommerce-service
  namespace: fastapi-project
  labels:
    app: ecommerce
spec:
  selector:
    app: ecommerce-app
  ports:
    - port: 5000
      targetPort: 5000
```

There are many service type like :

- **ClusterIP** : Exposes a service which is only accessible from within the cluster.
- **NodePort** : Exposes a service via a static port on each node’s IP.
- **LoadBalancer** : Exposes the service via the cloud provider’s load balancer.
- **ExternalName** : Maps a service to a predefined externalName field by returning a value for the CNAME record.

References:
- [https://kubernetes.io/docs/concepts/services-networking/service/](https://kubernetes.io/docs/concepts/services-networking/service/)
- [https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/)


We are done with the code part. Let’s move forward with the web server configuration that is [NGINX](https://www.nginx.com/).

## NGINX


I am going to speed up the process. I expect you to check my source code, as I have already provided all the YAML files.








