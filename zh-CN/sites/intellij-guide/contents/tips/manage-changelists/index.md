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

按下  **⌘0**（macOS），或**Alt+0**（Windows/Linux）显示** 提交 **工具窗口。

**提交窗口** 中的** Changes **是默认的活动变更列表。 活动的变更列表会以高亮的方式突出显示。

![默认活动的变更列表](default-active-changelist.png)

### 设置活动的变更列表
如果要将变更提交到 VCS，则可以将变更列表设置为活动。 选择变更列表，然后按 **^ 空格**（macOS），或 **Ctrl + 空格**（Windows/Linux）将其设置为活动的变更列表。

![设置活动的变更列表](set-active-changelist-ctrl-space.png)

## 创建变更列表

### 使用“随处搜索”
使用  **⇧⇧** （macOS）或 **Shift+Shift**（Windows/Linux）来打开“随处搜索”对话框。 现在，您可以搜索 _变更列表_，然后选择** 新建变更列表 ** 来打开 **新建** 对话框。

![New Changelist using Search Everywhere](create-change-list-using-search-everywhere.png)

### 使用提交窗口
还可以右键单击提交窗口，然后选择** 新建变更列表...** 来打开 **新建** 对话框。

![New Changelist using Commit Window](new-changelist-using-commit-window.png)

### 新建变更列表对话框

[新建变更列表对话框相关](https://www.jetbrains.com/help/idea/2021.2/new-changelist-dialog.html)

![New Changelist dialog](new-changelist.png)

## 删除变更列表

可以使用提交窗口来 **删除变更列表**

![Delete Changelist using Commit Window](delete-changelist-using-commit-window.png)

或者，您也可以使用 **⌘⇧A**（macOS），或 **Ctrl+Shift+A** 来打开"查找操作"对话框，"随处搜索"会过滤成只有操作。

# 使用不同变更列表的场景
  - 假设您正在处理代码，该代码只需要在 VCS 中提交选定的更改，并且您希望继续开发您的代码。 在这种情况下，您可以将变更移动到其他列表并分组在一起。
  - 如果要在不影响现有代码的情况下使用独立的配置运行应用程序，则可以在不同的变更列表中维护已更改的文件。