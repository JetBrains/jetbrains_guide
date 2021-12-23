---
type: TutorialStep
date: 2021-06-02
title: 调用自定义查询
technologies: [ ]
topics: [ ]
author: da
subtitle: 查询数据库里姓氏带有空格的员工。
thumbnail: ./thumbnail.png
---

假设我们要查询所有姓氏里带有空格的员工。

**练习**：花几分钟写代码，找到并输出所有姓氏里带有空格的员工。

完成了? 如下所示：
```java
@Bean
public CommandLineRunner run(EmployeeRepository repository) {
    return (args) -> {
        System.out.println(repository.findEmployeesByLastNameContaining(" "));
    };
}
```

## 最终结果
如果您插入教程中提及的相同数据，则 `Dalia` 员工会被输出： ![应用程序运行成功](./ApplicationRunSuccess2.png)