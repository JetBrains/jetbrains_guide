---
type: TutorialStep
date: 2021-09-20
title: Example of Moving Code Around
technologies: [ ]
topics: [ ]
author: hs
subtitle: Invoking Rearrange Code on a Class and Viewing the results
thumbnail: ./thumbnail.png
---

## A Before and After Example of Code Rearrangement
Let's modify the code arrangement settings for this example. Specifically we want to create a new rule that puts private methods at the bottom of each class.

### Modifying the Existing Rule Arrangement
You can change your rule arrangement preferences with **⌘,** (macOS), **Ctrl+Alt+S** (Windows/Linux) and then searching for _arrangement_. Select **Editor > Code Style > Java** from the filtered list and then the **Arrangement** tab.

### Arrangement Settings/Preferences
To change your code arrangement settings, use **⌘,** (macOS), **Ctrl+Shift+S** (Windows/Linux), to bring up the Preferences/Settings dialog. This dialog is searchable, so you can type in _arrangement_. This filters the dialog to **Code Style**. You can then select the language you're working with. In this tutorial we will use **Java**. Alternatively, you can navigate to **Editor > Code Style > Java**.

The Arrangement tab is grouped into two areas:
- [Grouping Rules](#grouping-rules)
- [Matching Rules](#matching-rules)

#### Grouping Rules
IntelliJ IDEA allows you to group these three code elements:

**Getters and Setters** is fairly self-explanatory. When this checkbox is selected, and you invoke rearrange code, your getters and setters will be grouped together in your class. This is enabled by default.

**Override methods** is similar to Getters and Setters in that it will group your Override methods together in your class. You also have the option to order them by the order they are defined in the super class or interface, or to order them by name. For our example let's select this checkbox.

**Dependent methods** has a drop-down that allows you to select breadth-first or depth-first for method coupling. You may have a use-case for this option, but for most Java code bases that have evolved over time, trying to keep _related_ methods together is not usually what you want to do. If you do choose to use this option then it will take priority over Matching Rules. We suggest you use this option or Matching Rules, not both. In our example we're going to use Matching Rules defined in the next section as this is a more common real-world scenario.

#### Matching Rules
This is where you can define how you'd like your classes to be ordered when you invoke rearrange code. You can select any line and move it up or down as required with the arrows in the top-right. You can also click the pencil icon to the right of each row to alter the rule and select a finer level of granularity.

### Adding a New Arrangement Rule
To add our new rule, go down to rule 22 and press the **+** button. This will place the new rule below 22. Select Type: **method** and Modifier: **private**. You can give it a name if required but both the type and modifier are displayed so that may not be necessary for this example.

![New rule for private methods](new_arrangement_rule.png)

Now we've modified our [code arrangement](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html#arrange_code) let's take a look at what it looks like. Note our specific rule here that puts `private` methods at the bottom of the class which can be very useful. You can see this in rule 23.

Given you can't scroll a screenshot, here is the order in text form, so you can see what's happening:

|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
 1 | field | public | static | final | 2 | field | protected | static | final | 3| field | package private | static | final| 4| field | private | static | final| 5| field | public | static | | 6| field | protected | static | | 7| field | package private | static | | 8| field | private | static | | 9| initializer block | static | | | 10| field | public | final | | 11| field | protected | final | | 12| field | package private | final | | 13| field | private | final | | 14| field | public | | | 15| field | protected | | | 16| field | package private | | | 17| field | private | | | 18| field | | | | 19| initializer block | | | | 20| constructor | | | | 21| method | static | | | 22| method | | | | 23| method | private | | | 24| enum | | | | 25| interface | | | | 26| class | static | | | 27| class | | | |

Here's the code that we're going to rearrange. As you can see, the getter and setter methods are not together, private methods are in the middle of the class and override methods are also scattered throughout the class.

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
        // does something in here
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

Let's invoke [rearrange code](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html#arrange_code) with **⌘⇧A** (macOS), or **Ctrl+Shift+A** (Windows/Linux). In the Find Actions dialog you can type in _Rearrange Code_:

![Rearrange Code](rearrange-code.png)

Press **Enter** on **Rearrange Code** option to apply the settings to the whole class.

When you do this, the code will be rearranged (see below). Here is a list of changes:
- All the fields have moved to the top of the class because that's what we specified in our grouping rows 1-8.
- The getter and setter methods are grouped because IntelliJ IDEA has grouped them together from the grouping rules.
- The Override methods have been grouped together because we specified we wanted to keep them together in the grouping rules). The Override methods are also implemented in the order they appear in the Object super class.
- Next are the remaining two public methods, which are obeying line 22 of our matching rules.
- Finally, there's the private method which is obeying line 23 of our matching rules.

```java
public class RearrangeCode {
    private int id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String phone;
    private String notes;
    private Collection<Order> ordersById;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        int newID = 1;
        System.out.println(newID);
        this.id = id;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, middleName, lastName, phone, notes, ordersById);
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

    public Collection<Order> getOrdersById() {
        return ordersById;
    }

    public void setOrdersById(Collection<Order> ordersById) {
        this.ordersById = ordersById;
    }

    private void privateHelperMethod() {
        // does something in here
    }
}


```
## Rearranging Just Code You've Changed
Now you've seen a worked example of rearranging a whole class, let's take a look at the use-case for only rearranging code that you've edited rather than the whole class. 