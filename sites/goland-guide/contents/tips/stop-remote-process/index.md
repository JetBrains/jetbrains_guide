---
date: 2020-12-03
title: 'Stop a Remote process after debugging it'
technologies: [go]
topics: [debugging]
author: dlsniper
subtitle: 'Clean-up processes after interacting with them in remote debugging scenarios'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./thumbnail.png
  url: https://www.youtube.com/watch?v=RoLYWoDJDIU&list=PLQ176FUIyIUZrbrlz4AY1V8VzBJKZyVlW&index=147
leadin: |
    **How to use:**

    Create a new _Go Remote_ run configuration type via _Run | Edit Configurations... | + Go Remote_. In the run configuration settings, in the _On disconnect_ section, choose either _Stop remote Delve process_, _Leave it running_, or _Ask_ to determine how the configuration behaves when you stop the debugger.

    <span class="tag is-rounded">New in 2020.3</span>
---
