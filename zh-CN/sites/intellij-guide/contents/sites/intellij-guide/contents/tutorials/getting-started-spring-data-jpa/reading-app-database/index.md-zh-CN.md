---
type: TutorialStep
date: 2021-06-02
title: Calling a Custom Query
technologies: [ ]
topics: [ ]
author: da
subtitle: Query the database for employees with spaces in their last name.
thumbnail: ./thumbnail.png
---

Let's say we want to query the database for all employees that have a space in their last name.

**Exercise**: Take a few minutes to write the code to find and print all employees with space in their last name.

Done? Here is what that would look like:
```java
@Bean
public CommandLineRunner run(EmployeeRepository repository) {
    return (args) -> {
        System.out.println(repository.findEmployeesByLastNameContaining(" "));
    };
}
```

## End Result
If you inserted the same data mentioned in the tutorial, you should the `Dalia` employee in the console output: ![Application Run Successfully](./ApplicationRunSuccess2.png)