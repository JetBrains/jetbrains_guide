---
type: TutorialStep
date: 2022-01-02
title: Helm Charts
technologies: [fastapi, kubernetes, aws]
topics: [python]
author: mm
subtitle: Combine your K8s manifests into a single package using Helm Charts
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://www.youtube.com/watch?v=wQJ6NBpHY0s
---

Hello everyone ! Welcome to PyCharm FastAPI Tutorial Series.


# Helm
In this tutorial we will be working with Helm. In simple terms, [Helm](https://helm.sh/) is a package manager for Kubernetes. It is a tool
that streamlines installing and managing Kubernetes applications. Think of it like ```Apt/Yum/Homebrew``` for K8s.

* Note : I will be showing a high-level use case of Helm. We won’t be getting deeper dive into Helm


# Installation

So, let’s begin by installing Helm.


I will go to the official website of Helm that is [helm.sh](https://helm.sh/).

![step1](./steps/step1.png)

I will click on **Get Started**.

I will click on **Installing Helm** under **Introduction**.

![step2](./steps/step2.png)

![step3](./steps/step3.png)

As you can see there are multiple flavours of installing Helm. Either you can install directly from the 
binary, scripts, apt, or homebrew etc.

![step4](./steps/step4.png)

I am using **Ubuntu**, So I will follow the apt installation commands.

![step5](./steps/step5.png)

```bash
curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -
sudo apt-get install apt-transport-https --yes
echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```

Reference : [https://helm.sh/docs/intro/install/](https://helm.sh/docs/intro/install/)

Okay, we have successfully installed Helm.

![step6](./steps/step6.png)

# Repository

We are going to work with Helm Charts. Helm Charts are simply Kubernetes YAML manifests 
combined into a single package that can be advertised to your Kubernetes clusters.

Obviously, we need to store these charts and that is where we look for a Helm repository. At a high level, 
a chart repository is a location where packaged charts can be stored and shared. The official chart repository is 
maintained by the Helm Charts.

### Private Repositories

You can store charts in private repositories like in **Amazon S3** or **GithubPages**.


You will find all the helm charts in [Artifact Hub](https://artifacthub.io/).

![step7](./steps/step7.png)

Let me try to check for the **NGINX** package.


![step8](./steps/step8.png)

As you can see there are multiple charts for NGINX, some have been uploaded by organizations and 
some by users, you can filter them out based on **verified publishers** or **official providers**.

# Installing NGINX Chart

This is how we are going to follow the installation steps.

![step9](./steps/step9.png)

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-release bitnami/nginx
```

First, we are going to add the bitnami repository, and then we will install the helm chart and name it as **first-release**.

Let’s move to PyCharm, I will show a quick walk through how it works.

We have added the repository successfully. 

![step10](./steps/step10.png)

For getting a list of repositories, I am going to type: 

```bash
helm repo list
```

![step11](./steps/step11.png)

This is going to return the list of repositories present in our system.


Once you have added a repository we can search for various software packages provided by **[Bitnami](https://bitnami.com/)**.

We are going to search for [Drupal](https://www.drupal.org/) which is also packaged by Bitnami. Drupal is 
an “out of the box” web content management tool as well as a customizable platform. It is an Open Source CMS.

I will type: 

```bash
helm search repo drupal
```

![step12](./steps/step12.png)

You can observe we got the latest version of Drupal 9.2.7

**Chart Version** and **App Version** are completely different. App version is pointing to the stable version of drupal.

I will try to search again but this time I will append **“--versions”** and it’s going to return a list of all drupal versions.

```bash
helm search repo drupal --versions
```

![step13](./steps/step13.png)

You can install multiple versions of drupal simultaneously, and this is how Helm makes life easy for you.

Now, I will try to search for the NGINX package. As of this recording 1.21.3 is the current stable release for nginx.

![step14](./steps/step14.png)

I will move forward and install a nginx chart.

I will type the command : 

```bash
helm install my-release bitnami/nginx
```

![step15](./steps/step15.png)

![step16](./steps/step16.png)

Once  a chart has been installed, you can check them by typing the command : 

```bash
helm list
```

![step17](./steps/step17.png)

Here the release name is **my-release**. When you use a chart reference with a repo prefix **(bitnami/nginx)**, Helm will
look in the local configuration for a chart repository named **'bitnami'**, and will then look for a chart in that 
repository whose name is **‘nginx'**.

As you can see the installation is complete and these are the few notes provided on how to check the application.


![step18](./steps/step18.png)

The app has been deployed in the default namespace, and it’s running on local port 80 and this is how you can get the service ip and service port.

I will type: 

```bash 
minikube service list
```

which is going to provide me with the list of services running.

![step19](./steps/step19.png)

As you can see the **my-release-nginx** is running on port 30214. I am going to quickly check in the browser.

![step20](./steps/step20.png)

I will try to search for a different version of NGINX and try to install that.

We have the installed the latest stable release, I will go for an older release.

I will type the command : 

```bash
helm install my-release-2 bitnami/nginx --version 6.0.0
```

Version 6 is the chart version which indeed going to install the NGINX **1.19**.

As you can see there are two versions of NGINX running parallely, one is 1.21.3 and the second is 1.19.0

![step21](./steps/step21.png)

If I now type: **minikube service list** I will get two different ports.

Even though we got 443, we are only concerned about port 80.

![step22](./steps/step22.png)

The latest release is running on port 30214 and the older release which is my-release-2-nginx is running on 30499.

So, this is the simplest use case of Helm. You can observe the benefits of using Helm Charts,  
also you can roll back or upgrade helm charts.

When you type : helm list it will provide a list of releases in the default namespace. You can 
also pass **all-namespaces** to get all releases present across namespaces.

![step23](./steps/step23.png)

You can also update the repository by typing :

```bash
helm repo update
```
Update gets the latest information about charts from the respective chart repositories. 


If you want to delete or remove the resources then you can type :

```bash
helm uninstall release
```
 
I am going to uninstall release 2 as well.

![step24](./steps/step24.png)

If I now type : **helm list** it will return empty. In the background Kubernetes will be clearing up the resources.

![step25](./steps/step25.png)


