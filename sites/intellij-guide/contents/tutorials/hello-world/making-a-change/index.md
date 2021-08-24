---
type: TutorialStep
date: 2021-24-09
title: Make a Change 
technologies: []
topics: []
author: hs
subtitle: Making a change to our file to check it's working as we expect
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=747
---

## Making a Change to the Java file

6

How do we know this is running the jar file and not simply the class file.

If we look in the run window, we can see intelligent idea is using the minus jar argument to run the jar file. It also shows the full path to a hello world dot jar file. Whereas before it showed the fully qualified class name, including the package. Finally, just to prove that it works the way we wanted, let's make a change to the Java file and see if we get the new message printed out.

If we press control twice, this brings up the run, anything box, which is yet another way to run one of our configurations. If we start typing, hello, we can see both our hello world Java application and the hello world jar configuration. Let's run the jar configuration. It's printed out our new message and is doing it from the updated jar file.