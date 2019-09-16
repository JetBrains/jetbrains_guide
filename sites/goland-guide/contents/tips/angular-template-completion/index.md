---
type: tip
date: 2018-11-04
title: 'Better Autocomplete Results in Angular Templates'
technologies: [angular]
topics: [editing]
author: pwe
subtitle: 'Narrow the universe of Angular template completions to those that matter.'
seealso:
  - title: 'PyCharm Help for Angular'
    href: 'https://www.jetbrains.com/help/pycharm/angular.html'
  - title: 'WebStorm Blog Post Announcing Improvements'
    href: 'https://blog.jetbrains.com/webstorm/2018/09/webstorm-2018-3-eap-3/'
thumbnail: ./thumbnail.png
cardThumbnail: './card.png'
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=YhCMWZfQP-w
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=JUmIiZpazic
leadin: |
  *Angular template autocomplete gives tons of choices. Which one is best?*

  There's a difference between mediocre autocomplete and "you read my mind." 
  PyCharm Professional's inclusion of WebStorm inherits its ongoing efforts 
  to provide helpful autocompletion.
---

When you're writing Angular applications and working in templates, you're
usually in the flow...juggling several concepts and cranking through lots
of small components. It's what Angular, with its TypeScript roots, was
made for.

Autocomplete is wonderful, except when it gives tons of choices. You have
to stop, sort through a long list, and find the right context for a variable
name. But it shouldn't have to be a speedbump...there is a logical path back
to the loop variable, then the array being looped through, back to the
component connected to the template, and finally the interface supporting
the shape of that data type.

WebStorm, and thus PyCharm Professional, can follow that path and offer
autocomplete suggestions with the best choices for that context listed first.
