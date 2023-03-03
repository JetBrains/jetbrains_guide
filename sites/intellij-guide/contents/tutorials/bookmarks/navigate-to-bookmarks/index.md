---
type: TutorialStep
date: 2023-02-06
title: Navigate to bookmarks
technologies: []
topics: [tricks]
author: md
subtitle: How to navigate to created bookmarks
thumbnail: ./thumbnail.png

---

There are several options to navigate to the bookmarks we have created.

To see all **line** bookmarks that we have in the code, we can open the **Bookmarks** popup by pressing **⌘ F3** (on macOS) or **Shift+F11** (on Windows/Linux) or go to **Edit | Bookmarks | Show Line Bookmarks**. 

![Show Line Bookmarks shortcut](show-line-bookmarks-shortcut.png)

![Show Line Bookmarks menu](show-line-bookmarks-menu.png)

Notice that this list does not contain any project items like files or classes that we have bookmarked. We can select the bookmark we want to navigate to, either with up and down arrows and pressing **Return** (on macOS) or **Enter** (on Windows/Linux), or by double-clicking it with our mouse. For mnemonic bookmarks, we can select the corresponding digit or letter.

![Bookmark popup](bookmark-popup.png)

To jump straight to a mnemonic bookmark, hold **^** (on macOS) or **Control** (on Windows/Linux) and press the mnemonic digit or letter on the keyboard. This doesn't work with anonymous bookmarks, but we can assign a mnemonic to an existing anonymous bookmark, either using the shortcut, or by clicking the bookmark in the gutter and selecting **Assign Mnemonic**. This works in the **Bookmarks** popup too!

![Go to Bookmark](go-to-bookmark.png)

![Assign Mnemonic](assign-mnemonic.png)

To see all our bookmarks, we can open the **Bookmarks** tool window by pressing **⌘ 2** (on macOS) or **Alt+2** (on Windows/Linux), or by selecting **View | Tool Windows | Bookmarks** from the main menu. 

![Open Bookmark Tool Window shortcut](open-bookmarks-tool-window-shortcut.png)

![Open Bookmark Tool Window menu](open-bookmarks-tool-window-menu.png)

IntelliJ IDEA adds your bookmarks to the predefined list in the Bookmarks tool window that is created automatically and has the same name as the project. In this example, multiple bookmarks in the same file are grouped together. We can also turn that off in the **Options** menu, by deselecting **Group Line Bookmarks by File**. As we can see, there are several other options as well. We won't dive into all of them, but be aware there are some options you can configure to your liking.

![Bookmark Tool Window options](options.png)

Another option we do want to show you here is that you can create more lists. We can add a new list using the shortcut (**⌘ N** on macOS or **Alt+Insert** on Windows/Linux) or by clicking the **Create Bookmark List** button. We can add a name for the new list. 

![Create Bookmark List](create-bookmark-list.png)

If there are multiple lists, and we create a new bookmark, we can select which list to add it to in the **Add Bookmark** popup. We can also select the list to use as the default by checking the option **Use as default list**.

![Select Bookmark List](select-bookmark-list.png)

In the Bookmarks tool window, we can move bookmarks to another list by dragging them to the other list. And we can sort bookmarks by selecting a bookmark and using Move down (**⌥ ⌘ ↓** on macOS, or **Control+Alt+↓** on Windows/Linux) or Move up (**⌥ ⌘ ↑** on macOS, or **Control+Alt+↑** on Windows/Linux).

![Move down](move-down.png)

**Fun fact:** The Bookmarks tool window also shows all breakpoints that are automatically added to the dedicated list once you place them in your code.

![Breakpoints](breakpoints.png)

Finally, we can also bookmark editor tabs. Click the **...** to the right of the tabs and select **Bookmark Open Tabs**. We can enter a name for this list in the **Create Bookmark List** popup.

![Bookmark Open Tabs](bookmark-open-tabs.png)

![Create Bookmark List popup](create-bookmark-list-popup.png)