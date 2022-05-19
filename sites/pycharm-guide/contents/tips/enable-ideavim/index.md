---
hasBody: true
date: 2019-03-25
title: Enable vim keybindings with IdeaVim plugin
technologies: []
topics: [editing]
author: wht
subtitle: Use the same keybindings from vim with a PlugIn
seealso:
  - title: Using Vim Editor Emulation in Pycharm (IdeaVim)
    href: https://www.jetbrains.com/help/pycharm/using-product-as-the-vim-editor.html
  - title: Use emacs keybindings
    href: https://plugins.jetbrains.com/plugin/7906-emacs-
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
leadin: |
  *Want to use your muscle memory from Vim?  You can!*

    All the keybindings you remember from vim, plus it's configurable to use
    PyCharm specific functionality.   You can pick and choose which
    keybindings you prefer.

---
Vim keybindings for PyCharm are available, and configurable.  If you are
comfortable navigating with vim, you don't have to be uncomfortable in
PyCharm.  The keybindings can even be shared with some keybindings applying
to vim, and some to the native PyCharm keybindings.

A file, `.ideavimrc`, provides a configuration method just like a .vimrc
configuration file so keybindings can be adjusted and vim leader keys
remapped.  (Haven't you wanted to turn that vim error-bell off?)

Just create a .ideavimrc file (even in windows!) with the following:

```vimscript
set visualbell
set noerrorbells
let mapleader = "\"

```

Append the following to that same file to use the copy-paste
functionality without having to worry about which clipboard you are
accessing:

```vimscript
map <leader>a :action $SelectAll<CR>
map <leader>c :action $Copy<CR>
map <leader>v :action $Paste<CR>
map <leader>x :action $Cut<CR>

```

To see an index of supported commands in the IdeaVim Plug-in, click [here](https://github.com/JetBrains/ideavim/blob/master/src/com/maddyhome/idea/vim/package-info.java)

