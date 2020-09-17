---
type: TutorialStep
date: 20202-09-10
title: PDF and Other Non-HTML Generation
technologies: []
topics: []
author: pwe
subtitle: TODO
thumbnail: ../python-logo.png
---


- Generate PDF using [rinohtype](https://github.com/brechtm/rinohtype)
    - pip install rinohtype
    - sphinx-build -b rinoh . _build/rinoh
- Show [page listing other kinds of builders](https://www.sphinx-doc.org/en/3.x/usage/builders/index.html)
- Discuss making your own builder
    - https://www.sphinx-doc.org/en/3.x/extdev/builderapi.html#sphinx.builders.Builder
