---
hasBody: true
date: 2021-09-24
title: 在 VCS 中解决合并冲突
technologies:
  - git
topics:
  - vcs
  - editing
author: vb
subtitle: 在 IntelliJ IDEA 中使用 VCS 选项，在编辑器中直观地解决合并冲突
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/GvAUA-jD9d0
seealso:
  - 
    title: IntelliJ IDEA Help - Resolving Merge Conflicts
    href: https://www.jetbrains.com/help/idea/resolving-conflicts.html
leadin: |
  使用 **⇧⇧**（macOS）或 **Shift+Shift**（Windows/Linux）来打开"随处搜索"对话框。 您现在可以搜索 _Resolve Conflicts_ （解决冲突）来打开 **Conflicts**（冲突） 对话框，帮助您直观地解决两个不同版本代码之间的合并冲突。
  - 您可以使用 **Merge Revisions**（合并修订）对话框中的选项，在接受或忽略代码修改以及解决冲突之前，**您应该仔细审查一下**。 此对话可直观地帮助您审查和解决合并冲突。
  - **注意：只有当您的代码中存在合并冲突时，Search Everywhere（随处搜索）对话框中的 **Resolve Conflicts** （解决冲突）选项才会显示 **Conflicts**（冲突）对话框，否则你将得到一个错误提示。
---

## 使用 Git 工具栏选项解决代码冲突
或者，您可以使用Git菜单中的 ** 解决冲突** 选项打开 **冲突** 对话框。

![使用 Git 工具栏解决代码冲突](git-resolve-conflicts-toolbar.png)

### 冲突对话框
**冲突** 对话框会显示有合并冲突的文件列表。 您可以选择文件并手动合并，或者您可以采用您自己的变更或是别人的（传入）变更。

![冲突对话框显示冲突文件列表](conflicts-dialog.png)

### 使用合并手动解决代码冲突
手动合并更改时，您使用 **合并修订** 对话框，该对话框可以直观地查看不同版本之间的代码更改和冲突。 它有三个视图：

![合并修订对话框](merge-revisions-dialog.png)

#### 左视图
左视图显示您对文件的更改。

#### 结果视图
结果视图是直观显示着做出的任何更改和解决的冲突的位置。 您始终可以引用结果视图来继续进行所需的更改和解决冲突。

#### 右视图
右视图显示着传入的文件更改。

### 解决合并冲突
您应该仔细查看 **_（以蓝色高亮显示着的）_** 更改，并采用所需的其中一个。 如果是冲突 **_（以红色高亮显示）_**，您应该采用想要的改变，而忽略那些不想要的。

#### 采用代码更改
![采用代码更改](accept-change.png)

要采用代码的更改，请单击左视图中的 **>>** 符号或右视图中的 **<<** 符号。 这将在结果视图中应用相应的更改。

#### 忽略代码更改
![忽略代码更改](ignore-change.png)

要忽略代码更改，请单击 **X**。 这意味着从选定的视图（左或右）中忽略更改。 忽略代码更改意味着它们不应用于结果视图。

### 完成合并

![保存更改以完成合并](finish-merging.png)

当您成功解决了所有合并冲突后，IntelliJ IDEA 会提示您 **所有更改已处理**。 当您按下 **应用** ，文件中的冲突就都已解决。