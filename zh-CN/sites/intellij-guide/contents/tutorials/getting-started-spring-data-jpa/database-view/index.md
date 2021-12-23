---
type: TutorialStep
date: 2021-06-02
title: 创建数据源
technologies: [ ]
topics: [ ]
author: da
subtitle: 在数据库视图中，为我们的数据库创建数据源。
thumbnail: ./thumbnail.png
---

每当您在项目中使用数据库时，在 IntelliJ IDEA 中创建与数据库的数据源连接是非常有用的。 它允许您轻松地在 IDE 内与数据库进行交互。 让我们开始为 [H2](https://www.h2database.com/html/main.html) 数据库做到这一点。 如果您使用不同的数据库，您可以使用类似的步骤，或者您可以参考 IntelliJ IDEA 中的[ 数据库连接帮助文档 ](https://www.jetbrains.com/help/idea/connecting-to-a-database.html)。 请注意，此功能仅在 [IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/features/editions_comparison_matrix.html) 中提供。

要创建我们的 H2 数据源，打开数据库工具窗口（**视图** -> **工具窗口** -> **数据库资源管理器**），然后单击 **+** 按钮。 有多种方法来创建我们的数据库连接。 我们使用 **来自 URL 的数据源** 选项。

![新建数据库](./NewDatabase.png)

输入我们的数据库 URL：`jdbc:h2:file:./data/myDB` 并单击 **确定**。

接下来，我们将完成数据库的配置。 对于 *用户* 和 *密码* 字段，我们将输入在 `application.properties` 文件里定义的用户和密码（`sa`, `password`）。 如果有未配置 H2 驱动程序的警告，请单击 `下载缺少的驱动程序文件`。

![myDB 的数据源配置](./IJConfigMyDB.png)

**可选步骤**：在“选项”里面，设置 *此时间后自动断开* 为 3 秒。 此设置将断开 IntelliJ IDEA 中的数据库，并释放所有锁，使我们的应用程序能够保持连接并写入数据库。 这将防止您的应用程序出现 `数据库可能已经在使用中` 的错误。 这样设置后，您可能需要单击数据库资源管理器上的"刷新"按钮来更新数据源。

然后，我们将单击 **测试连接** 以确保我们的配置有效。

![数据源配置选项](./IJConfigOptions.png)

点击 **确认**，我们就能看到 H2 数据库的数据源了。

## 最终结果
在数据库资源管理器中，我们现在可以通过双击表来导航到我们的员工表并查看所有的员工数据。

![数据库资源管理器](./DatabaseView.png)
