---
hasBody: true
date: 2021-12-03
title: 在 IntelliJ IDEA 中管理 VCS 变更列表
technologies:
  - git
topics:
  - vcs
  - 重构
  - 接口
author: vb
subtitle: 对某些任务相关的更改进行分组和提交
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/gg3yi-yc2ys
seealso:
  - 
    title: IntelliJ IDEA Help - Manage Changelists
    href: https://www.jetbrains.com/help/idea/managing-changelists.html
leadin: |
  选择要为某些任务分组在一起的或已做过更改的文件，然后使用 **⌘⇧M**（macOS）或者 **Alt+Shift+M**（Windows/Linux）显示**移动文件到另一个变更列表**对话框。

  您可以命名新的变更列表或从现有变更列表中进行选择。 IntelliJ IDEA 将在相应的变更列表中显示所选的更改。
---

## 默认活动的变更列表

Use **⌘0** (macOS) or **Alt+0** (Windows/Linux), to show the **Commit** tool window.

**Changes** in the **Commit Tool Window** are in the default active changelist. The active changelist is highlighted in bold.

![默认活动的变更列表](default-active-changelist.png)

### Set Active Changelist
You can set a changelist to Active if you want to commit your changes to VCS. Select the changelist and use **^Space** (macOS) or **Ctrl + Space** (Windows/Linux) to set it to the active changelist.

![Set Active Changelist](set-active-changelist-ctrl-space.png)

## Creating Changelist

### 使用“随处搜索”
使用  **⇧⇧** （macOS）或 **Shift+Shift**（Windows/Linux）来打开“随处搜索”对话框。 You can now search for _Changelist_ and select **New changelist...** to bring up **New changelist** dialog.

![New Changelist using Search Everywhere](create-change-list-using-search-everywhere.png)

### Using Commit Window
You can also right-click or secondary click on the Commit Window to show the options and click **New changelist...** to bring up the **New changelist** dialog.

![New Changelist using Commit Window](new-changelist-using-commit-window.png)

### New changelist dialog

[New Changelist dialog Reference](https://www.jetbrains.com/help/idea/2021.2/new-changelist-dialog.html)

![New Changelist dialog](new-changelist.png)

## Deleting Changelist

You can use the Commit Window to **Delete Changelist**

![Delete Changelist using Commit Window](delete-changelist-using-commit-window.png)

或者，您也可以使用 **⌘⇧A**（macOS），或 **Ctrl+Shift+A** 来打开"查找操作"对话框，"随处搜索"会过滤成只有操作。

# Scenarios to use different changelists
  - Suppose you are working on your code which requires only selected changes to be committed in VCS and you want to continue developing your code. In that case, you can move your changes to a different changelist and group together.
  - If you want to run your application with a unique configuration without impacting your existing code, you can maintain the changed files in different changelists.