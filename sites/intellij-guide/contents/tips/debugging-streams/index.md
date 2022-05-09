---
hasBody: true
date: 2022-04-30
title: Debugging Streams
technologies: [java]
topics: [debugging]
author: hs
subtitle: Visualize the flow of data through a stream
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/rVFqXZNoq-s
seealso:
  - title: (video) Pro Tip Debugging Java Streams
    href: https://www.youtube.com/watch?v=BeJu9bMPLGU
  - title: (documentation) Analyze Stream Operations in IntelliJ IDEA
    href: https://www.jetbrains.com/help/idea/analyze-java-stream-operations.html
leadin: |

   Debugging stream operations is easier if you can visualize the flow of data through your stream and see how each method manipulates it. First you need to set a breakpoint by placing your caret on line 23 and using **⌘F8** (macOS), or **Ctrl+F8** on Windows and Linux. You can also do this by clicking in the gutter area next to line 23.
   
   Run your application with the debugger **⌃D** (macOS), or **Shift+F9** on Windows and Linux. Again, you can click the run icon over in the gutter on the left on line 21 if you prefer. 
    
---

On the right-hand side of the debug window, click the button called Trace Current Stream Chain. This tells IntelliJ IDEA to evaluate our stream, and this is how you get your visual representative. The default view is the Split Mode which allows you to tab through each method in the operation and see how the data is manipulated. For example, when we run the `distinct` method, we can see where we started on the left and over on the right with all our duplicates removed after the method has been run. In to the `sorted` method - now our values have been sorted in ascending order. You can also click the Flat Mode button which presents all the data on one screen, so you can see the whole stream operation in one place from start to finish, and you can map your data as it progresses through each operation in the stream.  