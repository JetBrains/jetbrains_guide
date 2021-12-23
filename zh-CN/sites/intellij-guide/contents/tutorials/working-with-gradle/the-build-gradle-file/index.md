---
type: TutorialStep
date: 2021-05-14
title: build.gradle 文件
technologies:
  - gradle
topics: [ ]
author: tg
subtitle: 了解如何更轻松地在 IntelliJ IDEA 里使用 Gradle 配置文件。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=281
---

让我们来看看 IntelliJ IDEA 为我们生成的 build.gradle 文件。

```groovy
plugins {
    id 'java'
}

group 'org.example'
version '1.0-SNAPSHOT'

repositories {
    mavenCentral()
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.7.0'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:1.7.0'
}

test {
    useJUnitPlatform()
}
```

在插件部分，我们有 [`java`](https://docs.gradle.org/current/userguide/java_plugin.html) 插件。 这下面的元数据是我们保留为默认值的组和版本信息。 我们使用 Maven Central 作为默认依赖项的库。

IntelliJ IDEA 为我们默认设置了一些我们可能需要的项目的依赖项。 我们有 [JUnit 5](https://junit.org/junit5/docs/current/user-guide/) 设置为测试依赖项，在录制时是 5.7 版本。 我们还有 [junit-jupiter-engine](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-engine)，因为我们需要它来运行我们编写的 JUnit 5 测试。

请注意，IntelliJ IDEA 使用更新的 [依赖项的设置名称](https://docs.gradle.org/current/userguide/declaring_dependencies.html)，例如` testImplementation ` 取代了` testCompile `。 还有使用紧凑形式的依赖项声明，冒号分隔的组名、工件名称和版本号。

为了让 Gradle 运行 JUnit 5 测试， `build.gradle` 文件的测试部分需要 `useJUnitPlatform`，所以 IntelliJ IDEA 也为我们生成了这个测试。

现在我们知道了应该为 Gradle 项目声明依赖项的位置，让我们看一下如何添加或更新依赖项。