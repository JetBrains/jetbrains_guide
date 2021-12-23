---
type: TutorialStep
date: 2021-09-20
title: 移动代码的例子
technologies: [ ]
topics: [ ]
author: hs
subtitle: 在一个类上调用重新排列代码并查看结果
thumbnail: ./thumbnail.png
---

## 代码重新排列前后的示例
让我们为这个例子修改代码排列设置。 具体来说，我们希望创建一个新的规则，将 private 方法放置在每个类的底部。

### 修改现有的排列规则
您可以使用 **⌘,**（macOS）或 **Ctrl+Alt+S**（Windows/Linux），然后搜索 _arrangement（排列）_来变更您的排列规则偏好设置。 从过滤列表中选择 **Editor（编辑器）> Code Style（代码样式）> Java**，然后选择 **Arrangement（排列）**标签。

### 排序设置/偏好设置
要修改您的代码排列的设置，使用 **⌘,**（macOS）或 **Ctrl+Shift+S**（Windows/Linux）打开偏好设置/设置对话框。 这个对话框是可以搜索的，所以您可以输入 _arrangement（排列）_。 这可以把对话框过滤到 **Code Style（代码样式）**。 然后您可以选择您正在使用的语言。 在这个教程中，我们将使用 **Java**。 或者您可以导航到 **Editor（编辑器）> Code Stytle（代码样式）> Java**。

排列标签可以分为两个区域：
- [分组规则](#grouping-rules)
- [匹配规则](#matching-rules)

#### 分组规则
IntelliJ IDEA 允许您对这三个代码元素进行分组：

**Getters and Setters（getter 和 setter）** 是相当不言自明的。 当选择此复选框，并调用重排代码时，您的 getter 和 setter 将在您的类中被分组在一起。 这是默认选项。

**Override methods（重写方法）**类似 Getters 和 Setters，因为它将在您的类中将您的重写方法分组在一起。 您还可以使用根据它们在超类或者接口的顺序的选项来排序它们，或者根据它们的名字排序。 在我们的例子里，让我们选择此复选框。

**Dependent methods（依赖方法）** 有下拉框，可以允许您选择广度优先或者深度优先的方式来组合方法。 您可能有此选项的用例，但对于大多数随着时间的推移而演变的 Java 代码库，尝试将_相关_的方法放在一起通常不是您想要做的。 如果您选择使用此选项，则它会优先于匹配规则。 我们建议您使用此选项或匹配规则，而不是两者都使用。 在我们的示例中，我们将使用下一节中定义的匹配规则，因为这是一个更常见的真实场景。

#### 匹配规则
这里您可以定义当您使用重新排列代码时，您希望您的类如何被排序。 您可以选择一行，并根据需要用右上角的箭头向上或向下移动。 您也可以点击每一行右边的铅笔图标来修改规则，选择更精细的粒度。

### 添加新的排列规则
要添加我们的新规则，请滑到规则 22 并按下 **+** 按钮。 这将使新规则在 22 之下。 选择类型：**method（方法）** 和修饰符：**private**。 如果需要的话，您可以给它起个名字，但是类型和修饰符都显示了，所以对这个例子来说可能没有必要。

![New rule for private methods](new_arrangement_rule.png)

现在我们已经修改了我们的[代码排列](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html#arrange_code)，让我们来看看它是什么样子的。 请注意，我们在这里的具体规则把 `private` 方法放在类的底部，这可能是非常有用的。 您可以在规则 23 中看到这一点。

鉴于您无法滚动屏幕截图，以下是顺序的文本形式，这样您就可以查看发生了什么：

|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
 1 | field | public | static | final | 2 | field | protected | static | final | 3| field | package private | static | final| 4| field | private | static | final| 5| field | public | static | | 6| field | protected | static | | 7| field | package private | static | | 8| field | private | static | | 9| initializer block | static | | | 10| field | public | final | | 11| field | protected | final | | 12| field | package private | final | | 13| field | private | final | | 14| field | public | | | 15| field | protected | | | 16| field | package private | | | 17| field | private | | | 18| field | | | | 19| initializer block | | | | 20| constructor | | | | 21| method | static | | | 22| method | | | | 23| method | private | | | 24| enum | | | | 25| interface | | | | 26| class | static | | | 27| class | | | |

下面是我们要重新排列的代码。 正如您所看到的，getter 和 setter 方法不在一起，private 方法在类的中间，重写方法也分散在类中。

```java
public class RearrangeCode {
    private int id;

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "RearrangeCode{" +
               "id=" + id +
               ", firstName='" + firstName + '\'' +
               ", middleName='" + middleName + '\'' +
               ", lastName='" + lastName + '\'' +
               ", phone='" + phone + '\'' +
               ", notes='" + notes + '\'' +
               ", ordersById=" + ordersById +
               '}';
    }

    private String firstName;

    private void privateHelperMethod() {
        // 在这里做点什么
    }

    public void setId(int id) {
        int newID = 1;
        System.out.println(newID);
        this.id = id;
    }

    private String middleName;

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    private String lastName;

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    private String phone;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    private String notes;

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RearrangeCode that = (RearrangeCode) o;
        return id == that.id &&
               Objects.equals(firstName, that.firstName) &&
               Objects.equals(middleName, that.middleName) &&
               Objects.equals(lastName, that.lastName) &&
               Objects.equals(phone, that.phone) &&
               Objects.equals(notes, that.notes) &&
               Objects.equals(ordersById, that.ordersById);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, middleName, lastName, phone, notes, ordersById);
    }

    private Collection<Order> ordersById;

    public Collection<Order> getOrdersById() {
        return ordersById;
    }

    public void setOrdersById(Collection<Order> ordersById) {
        this.ordersById = ordersById;
    }
}

```

让我们使用 **⌘⇧A**（macOS）或 **Ctrl+Shift+A**（Windows/Linux）调用
 **rearrange code（重新排列代码）</a>。 在查找操作对话框中，您可以输入 _Rearrange Code（重新排列代码）_：</p> 

![Rearrange Code](rearrange-code.png)

在**重新排列代码**选项上按 **Enter** 来应用到当前的整个类中。

当您这样做时，代码将被重新排列（见下文）。 以下是更改列表：

- 所有的字段都移到了类的顶部，因为这是我们在分组行 1-8 中指定的。
- getter 和 setter 方法被分组，因为 IntelliJ IDEA 根据分组规则将其分组在一起。
- 重写方法已分组在一起，因为我们在分组规则中指定要把它们放在一起。 重写方法也按照它们在 Object 超类中出现的顺序实现。
- 接下来是剩下的两个 public 方法，它们遵守了我们匹配规则的第 22 行。
- 最后，还有一个 private 方法，它遵守我们匹配规则的第 23 行。



```java
public class RearrangeCode {
    private int id;

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "RearrangeCode{" +
               "id=" + id +
               ", firstName='" + firstName + '\'' +
               ", middleName='" + middleName + '\'' +
               ", lastName='" + lastName + '\'' +
               ", phone='" + phone + '\'' +
               ", notes='" + notes + '\'' +
               ", ordersById=" + ordersById +
               '}';
    }

    private String firstName;

    private void privateHelperMethod() {
        // 在这里做点什么
    }

    public void setId(int id) {
        int newID = 1;
        System.out.println(newID);
        this.id = id;
    }

    private String middleName;

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    private String lastName;

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    private String phone;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    private String notes;

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RearrangeCode that = (RearrangeCode) o;
        return id == that.id &&
               Objects.equals(firstName, that.firstName) &&
               Objects.equals(middleName, that.middleName) &&
               Objects.equals(lastName, that.lastName) &&
               Objects.equals(phone, that.phone) &&
               Objects.equals(notes, that.notes) &&
               Objects.equals(ordersById, that.ordersById);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, middleName, lastName, phone, notes, ordersById);
    }

    private Collection<Order> ordersById;

    public Collection<Order> getOrdersById() {
        return ordersById;
    }

    public void setOrdersById(Collection<Order> ordersById) {
        this.ordersById = ordersById;
    }
}


```



## 重新排列刚刚您已经更改的代码

现在您已经看到了重新排列整个类的一个工作示例，让我们来看看只重新排列您所编辑的代码，而不是整个类的用例。 