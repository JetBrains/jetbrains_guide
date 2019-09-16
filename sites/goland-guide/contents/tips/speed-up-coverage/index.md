---
type: tip
date: 2019-04-18
title: Speed Up Coverage with Configuration File
technologies: []
topics: [testing]
author: pwe
subtitle: Speed up your "visual coverage" with a config file and correct working directory.
seealso:
  - title: Coverage configuration files
    href: 'https://coverage.readthedocs.io/en/coverage-4.2/config.html'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=PaQ5xTGFE1k
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=8OOHj6W_kM0
leadin: |
    *Coverage is good, fast coverage is better.*    

    Python's `coverage` tool will by default measure in lots of places.
    Like your dependencies and tests. Speed up coverage reporting 
    by restricting where `coverage` will look.

---

Coverage is a boon: it lets you know how much of your code has tests and 
better, which lines in which files don't.

That comes at a price: instrumentation takes a while. You can speed 
up `coverage` by telling it to not look in places you don't care about: 
your virtual environment's dependencies, your project's `tests` directory 
itself, `.tox` directories, etc. You'll also get more accurate percentages.

This is done with a 
[`.coveragerc` configuration file](https://coverage.readthedocs.io/en/coverage-4.2/config.html), 
which has lots of options.

PyCharm though is finicky about this, hence this tip:

- Put your `.coveragerc` file in your project root

- Make a run configuration to run your tests, and...

- ...edit that run configuration's working directory to start at the root

