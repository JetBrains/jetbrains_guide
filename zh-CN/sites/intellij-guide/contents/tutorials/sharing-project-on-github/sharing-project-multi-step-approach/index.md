---
type: TutorialStep
date: 2021-10-13
title: 在 GitHub 上共享您的项目 - 多步骤方法
technologies: [ ]
topics: [ ]
author: hs
subtitle: 如何在将项目共享到 GitHub 之前先为您的项目启用版本控制
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/4ukhZvOmAtk?start=850
---

## 先创建一个本地仓库再将其共享到 GitHub

我们看的第一个方法假设您想在一个步骤中完成所有的事情。 然而有时您想要在 GitHub 公开之前，先为您的项目创建一个本地的 Git 仓库。

让我们假设您有一个比 Hello World 还复杂的项目，您仍在编写代码的过程中。 您现在还不想发布您的项目到 GitHub 上，但是您想先为它开启源代码控制，因为您希望在本地进行一些小的提交并演化您的代码。

### 创建一个本地的仓库

您可以看看能不能使用 **⌘9**（macOS）或 **Alt+9**（Windows/Linux）来查看您的 Git 工具窗口来检查您的项目是不是在使用版本控制。 如果您看不到 Git 工具窗口，那么您的项目还不是 Git 项目。

要使用 Git 作为一个 IntelliJ IDEA 项目的版本控制，请使用 **VCS > Enable Version Control Integration（启用版本控制集成）**，从下拉菜单中选择 Git。

![Enable Version Control Integration](enable-version-control-integration.png)

IntelliJ IDEA 现在将在项目的根目录，创建一个 Git 仓库。 我们现在还可以使用 **⌘9**（macOS）或 **Alt+9**（Windows/Linux）访问 Git 工具窗口。

如果您打开它，您可以点击[控制台选项卡](https://www.jetbrains.com/help/idea/version-control-tool-window-console-tab.html)来查看已经运行的 Git 命令及其结果，或者您可以切换到可视化的[日志选项卡](https://www.jetbrains.com/help/idea/log-tab.html)。 现在您也可以从项目窗口 **⌘1**（macOS），**Alt+1**（Windows/Linux）看到您的项目里，有一个 `. git` 文件夹。或者您可以使用 **⌥F12**（macOS）或**Alt+F12**（Windows/Linux）来使用 IntelliJ IDEA 的终端来列出项目的文件。

现在您已经开启了 Git，但是您还没有添加任何的东西到源代码控制中。 我们可以看到我们的文件显示为红色，这意味着就 Git 而言，这些是还未加入到 Git 中的新文件，因此它们不在版本控制中。 让我们选择哪些文件我们希望它在版本控制中，然后进行我们的第一个提交。

### 在本地进行您的第一次提交

您可以使用 **⌘K**（macOS）**Ctrl+K**（Windows/Linux）打开提交窗口。 该教程使用[提交工具窗口](https://www.jetbrains.com/help/idea/commit-and-push-changes.html#commit-tool-window)，这是在 IntelliJ IDEA 2020.1 加的。 如果您还在使用旧的提交对话框，您可以在您的的偏好设置/设置 **⌘,**（macOS）或 **Ctrl+Alt+S**（Windows/Linux）切换到提交工具窗口，然后搜索 _Use non-modal commit interface（使用非模式提交界面）_。

如果您在提交窗口打开未进行版本管理的文件列表，您可以看到您的项目里的所有的文件都列了出来，因为它们都还没有被加入到 Git。 您可能不想把所有东西都添加到 Git 上。 有一些目录和文件，比如说构建的输出文件，我们不需要放置在源代码控制之下。 在单个目录下看到所有的文件可能不是很有用，因此我们可以选择对文件进行分组，比如说文件夹或者模块。

![Export By Directory](export-by-directory.png)

在这个例子里，有两个目录我们不想添加到 Git 里，因为它们是构建目录。 我们想要添加 gradle wrapper 文件夹、源代码和在我的项目根目录下的文件。 如果我们打开 `.idea` 文件夹，我们可以看到所有的 IntelliJ IDEA 配置文件。 每个团队对将哪些设置（如果有的话）保存到源代码控制都有自己的想法。 IntelliJ IDEA 会自动添加一个 [.gitignore 文件](https://git-scm.com/docs/gitignore)到该目录，将默认的文件夹和文件排除在源代码控制中。 如果有一些特定的 IDE 设置我们不想包含的话，我们可以添加其他的文件到该 `.gitignore` 文件。 不过您可以将所有的其他的配置文件添加到 Git。

![Add Versioned Files](add-versioned-files.png)

为这个提交添加一个描述，来描述这些修改做了哪些功能。 当您提交它时，您会看到一个通知，告知提交成功。 当您使用 **⌘9**（macOS）或 **Alt+9**（Windows/Linux）返回到 Git 窗口，Log（日志）选项卡会向我们显示该提交。 您可以看到在该提交里修改的文件和提交的信息。 您可以再一次按 **⌘9**（macOS）或 **Alt+9**（Windows/Linux）来隐藏 Git 窗口。

### 在 GitHub 上创建仓库

到目前为止您已经提交了所有的修改到您的本地 Git 仓库。 如果您使用 **⌘9**（macOS）或 **Alt+9**（Windows/Linux）再一次打开日志选项卡，您可以看到该项目只有一个本地分支，这意味着所有的代码和提交纪录只保留在本地电脑。 一旦您完成了您的项目设置，并已经准备好分享它和它的纪录公开到 GitHub，使用 **Git > GitHub > Share Project on GitHub（在 GitHub 上共享项目）**。

您可以使用 IntelliJ IDEA 来创建一个本地的 Git 仓库，然后使用菜单上的 **VCS >  Share Project on GitHub（在 GitHub 上共享项目）**来分享项目到 GitHub 上。

![Share Project on GitHub](share-project-on-github-alternative.png)

这会在 GitHub 对话框上显示项目分享的相关内容。 这里您可以给您的 GitHub 仓库一个名字，选择是否您希望它是私有的，修改 Remote（远程），不过我们不推荐您修改它，然后给您的项目一个描述。 项目名称必须在 GitHub 仓库中是唯一的，并遵循 GitHub 的准则。

### 可能需要的步骤 - 使用 GitHub 进行身份验证

如果您还没通过 GitHub 身份验证，您将看到额外的 _Add Account（添加帐户）_ 链接，该链接具有不同的选项：

![Share Add Account dialog](share-add-account.png)

我们将重点介绍本教程中的前两个选项。 首选，如果您选择 **Log in via GitHub（通过 GitHub 登录）**，将在您的默认的浏览器上打开一个窗口，要求您登录您的 GitHub 帐户并通过 IntelliJ IDEA 进行身份验证。

或者您可以选择 **Log in with Token（通过令牌登录）**来打开添加 GitHub 帐户的对话框。 您可以在这里按 **Generate（生成）**，在您的默认的浏览器上打开一个窗口，要求您登录您的 GitHub 帐户，然后您可以生成一个令牌以在 IntelliJ IDEA 中使用。 您可以按照 GitHub 上的说明执行此操作。 当您生成令牌后，您可以将其粘贴回对话框中，以便与 GitHub 进行身份验证。

这两种方法都实现了相关的结果，因为它们都允许 IntelliJ IDEA 与 GitHub 进行身份验证。

当您按 **Enter** 或点击 **Share（共享）**，IntelliJ IDEA 将会在 GitHub 的帐号下创建一个新的仓库，然后推送此代码到该仓库。 当这完成时，会显示气球通知，因此我们可以点击链接，然后在浏览器里查看 GitHub 上的新仓库。 我们可以看到项目上的代码，并且我们在本地做的三个提交现在也可以在 GitHub 上看到。

### 分享项目到 GitHub

如果您回到 IntelliJ IDEA，您可以看到 Git 日志已经更新以显示远程源，这也显示在该提交上。 当您展开远程分支，您可以在远程源下看到 master 分支。 这表明一切都已成功推送到 GitHub 上，而且 IntelliJ IDEA 也从 GitHub 远程获得了所有最新的信息。

![Git Log Window](git-log-window.png)

我们建议不要等太久才把项目推送到 GitHub，因为把项目放在 GitHub 这样的远程服务器上意味着代码被安全地备份到了另一个地方。