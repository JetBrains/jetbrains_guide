---
type: tip
date: 2018-12-04
title: 'Install and import'
technologies: []
topics: [python]
author: pwe
subtitle: 'While typing a symbol, let PyCharm install it and generate the import.'
seealso:
  - title: 'Creating and Optimizing Imports'
    href: 'https://www.jetbrains.com/help/pycharm/creating-and-optimizing-imports.html'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=rMUIDc3sSpw
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=Vq7IBjmqanI
leadin: |
  *Type the symbol, let your IDE install the package and write the import.*

  IDEs are great at janitorial work. PyCharm can generate your import for you, even 
  when you haven't installed the  package.
---

You're writing code and want to import a package, and want PyCharm to generate the
import. But you haven't installed it yet. PyCharm can do both.

Type the name of the package and hit `Alt-Enter`, then choose `Install and Import package`. PyCharm will do both: you'll see a notification during the installation,
then the import will be generated in the right way, according to your project styles.

Extra credit: if PyCharm sees that this new package isn't recorded in your package's
`requirements.txt` or `Pipfile`, it will generate a warning which you can correct
with -- again -- `Alt-Enter`.
