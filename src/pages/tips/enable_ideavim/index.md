
---
type: 'tip'
date: 2019-03-25
title: 'Enable vim keybindings with IdeaVim plugin'
technologies: []
topics: ['vim']
author: 'imbilltucker'
subtitle: 'Use the same keybindings from vim with a PlugIn'
seealso:
  - title: 'Using Vim Editor Emulation in Pycharm (IdeaVim)'
    href: 'https://www.jetbrains.com/help/pycharm/using-product-as-the-vim-editor.html'
  - title: 'use emacs keybindings'
    href: 'https://plugins.jetbrains.com/plugin/7906-emacs-'
thumbnail: './thumbnail.png'
cardThumbnail: './card.png'

---
Vim keybindings for PyCharm are available, and configurable.  If you are
comfortable navigating with vim, you don't have to be uncomfortable in PyCharm.
The keybindings can even be shared with some keybindings applying to vim, and
some to the native PyCharm keybindings.

A file, .ideavimrc, provides a configuration method just like a .vimrc
configuration file so keybindings can be adjusted and vim leader keys remapped.
(Haven't you wanted to turn that vim error-bell off?)

Just create a .ideavimrc file (TODO: check for differences on windows)
with the following:

```vimscript
set visualbell
set noerrorbells
let mapleader = "\"

```

Append the following to that same file to use the copy-paste
functionality without having to worry about which clipboard you are
accessing:

```vimscript
map <leader>a :action $SelectAll<CR> map <leader>c
:action $Copy<CR> map <leader>v :action $Paste<CR> map <leader>x
:action $Cut<CR>

```

To see a index of supported commands in the IdeaVim Plug-in, click [here](https://github.com/JetBrains/ideavim/blob/master/src/com/maddyhome/idea/vim/package-info.java)

