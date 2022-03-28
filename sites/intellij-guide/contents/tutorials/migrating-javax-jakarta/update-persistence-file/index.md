---
type: TutorialStep
date: 2022-03-30
title: Updating the persistence file
technologies: []
topics: []
author: hs
subtitle: Fixing the final `javax` references in your files
thumbnail: ./thumbnail.png
---

Now if you do a search across your whole project with **⌘⇧F** (macOS), or **Crl+Shift+F** (Windows/Linux) for *javax* you will see that it still appears in your `persistence.xml` file.

We need to update the `persistence.xml` file and change the namespace from:

```xml
<persistence xmlns="http://xmlns.jcp.org/xml/ns/persistence" 
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence http://xmlns.jcp.org/xml/ns/persistence/persistence_2_2.xsd" version="2.2">
```

To:

```xml
<persistence version="3.0" xmlns="https://jakarta.ee/xml/ns/persistence"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="https://jakarta.ee/xml/ns/persistence https://jakarta.ee/xml/ns/persistence/persistence_3_0.xsd">

```

Now you need to change the property name from `javax`:

```xml
<properties>
<property name="javax.persistence.jdbc.driver" value="com.mysql.cj.jdbc.Driver"/>
<property name="javax.persistence.jdbc.url" value="jdbc:mysql://app-db/myDB"/>
<property name="javax.persistence.jdbc.user" value="root"/>
<property name="javax.persistence.jdbc.password" value="password"/>
<property name="hibernate.hbm2ddl.auto" value="update"/>
</properties>
```

to `jakarta`:

```xml
<properties>
   <property name="jakarta.persistence.jdbc.driver" value="com.mysql.cj.jdbc.Driver"/>
   <property name="jakarta.persistence.jdbc.url" value="jdbc:mysql://app-db/myDB"/>
   <property name="jakarta.persistence.jdbc.user" value="root"/>
   <property name="jakarta.persistence.jdbc.password" value="password"/>
   <property name="hibernate.hbm2ddl.auto" value="update"/>
</properties>
```

Now let's rebuild our application again with **⌘F9** (macOS), or **Ctrl+F9** (Windows/Linux) and then run it with **⌃R** (macOS), **Shift+F10** (Windows/Linux). 

Your application should still be available at [localhost:8080/MyWebApp](localhost:8080/MyWebApp).

Your code should now be the same as the `jakarta` branch in the project. You can verify this by navigating to the *src* directory in IntelliJ IDEA then right-click and select **Git > Compare with Branch...** and select the `jakarta` branch.