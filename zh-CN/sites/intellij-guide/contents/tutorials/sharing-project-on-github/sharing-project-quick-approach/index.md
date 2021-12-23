---
type: TutorialStep
date: 2021-10-13
title: 在 GitHub 上分享您的项目 - 一个快速的方法
technologies: [ ]
topics: [ ]
author: hs
subtitle: 如何为您的项目启用版本控制，并一步共享到 GitHub
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/4ukhZvOmAtk?start=10
---

## 创建一个本地仓库并一步共享到 GitHub

让我们看看如何启用我们的项目的版本控制，与 GitHub 进行身份验证，创建我们的第一个提交，并在 GitHub 上一步共享我们的项目。

### 分享项目到 GitHub

您可以使用 IntelliJ IDEA 来创建一个本地的 Git 仓库，然后使用菜单上的 **VCS >  Share Project on GitHub（在 GitHub 上共享项目）**来分享项目到 GitHub 上。

![Share Project on GitHub](share-project-github.png)

这会在 GitHub 对话框上显示项目分享的相关内容。 在这里您可以给您的 GitHub 仓库一个名字（必须在您的仓库里独一无二），选择是否您希望它是私有的，更改 Remote（远程），不过我们建议您不要修改这个选项，并给您的项目一个可选的描述。

### 可选 - 与 GitHub 进行身份验证
如果您还没有通过 GitHub 身份验证，您将看到额外的 _Add Account（添加帐户）_ 链接，该链接具有不同的选项：

![Add GitHub Account](share-add-account.png)

我们将重点介绍本教程中的前两个选项。 首选，如果您选择 **Log in via GitHub（通过 GitHub 登录）**，将在您的默认的浏览器上打开一个窗口，要求您登录您的 GitHub 帐户并通过 IntelliJ IDEA 进行身份验证。

或者您可以选择 **Log in with Token（通过令牌登录）**来打开添加 GitHub 帐户的对话框。 您可以在这里按 **Generate（生成）**，在您的默认的浏览器上打开一个窗口，要求您登录您的 GitHub 帐户，然后您可以生成一个令牌以在 IntelliJ IDEA 中使用。 您可以按照 GitHub 上的说明执行此操作。 当您生成令牌后，您可以将其粘贴回对话框中，以便与 GitHub 进行身份验证。

这两种方法都实现了相关的结果，因为它们都允许 IntelliJ IDEA 与 GitHub 进行身份验证。

提示：如果您有多个 GitHub 帐户，您可以使用 **⌘,**（macOS）或 **Ctrl+Alt+S**（Windows/Linux），在 Settings/Preferences（设置/偏好设置）里，搜索 _GitHub_，[添加您的 GitHub 帐号](https://www.jetbrains.com/help/idea/github.html)。 您可以使用 **+** 来添加多个 GitHub 帐户。

### 在 GitHub 上创建仓库

现在您可以按 **Enter** 或点击 **Share（共享）**，IntelliJ IDEA 将会继续并在您的 GitHub profile 里创建仓库。

### 您的首次提交
IDE 将会询问您想将哪些文件放置在您的首次提交中。 您可以提交所有的文件，但是一般来说您不需要添加 `.gradle` 文件夹（如果您使用 [Gradle wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html)），并且我们不需要添加 build 文件夹，这是 IntelliJ IDEA 放置编辑器的输出（比如说 class 文件）的地方。

![Add Files for Initial Commit](add-files-for-Initial-commit.png)

其他的一些看起来都适合提交，您可以使用默认的提交信息并点击 **Enter（确定）**来提交它

### 分享项目到 GitHub

IntelliJ IDEA 给该项目创建了一个本地的 Git 仓库，然后推送它到您的 GitHub profile 作为您的新的仓库，并附有您刚刚输入的详细信息。

当该过程完成后，IntelliJ IDEA 将会弹出一个提示，您可以点击链接在浏览器里查看你的 GitHub 仓库。

![Shared On GitHub](shared-on-github.png)

我们可以看到仓库、代码、提交信息和 GitHub 中的描述信息。

![](shared-on-github-browser.png)