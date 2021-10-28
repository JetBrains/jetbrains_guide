# JetBrains Guide

The JetBrains Guide is a collection of resources for learning JetBrains IDEs. 
Similar to an "Awesome PyCharm" but richer in content and formatting. The 
Guide is intended as an open source project.

## Technology

* Content is created as Markdown files.
* It's rendered to a semi-static site using Gatsby.
* All is available as open source.

## Installation and Running the Guide

There are two types of installation, and they depend on what you want to achieve.

* Do you want to **write content for the Guide**? Use the **Docker-based approach**.
* Do you want to **work on Guide infrastructure**? Use the **local approach**.

Most probably, you want to use the **Docker-based approach**.

### Docker-based approach - For content creators

Want to create content? Awesome! We like content. Here's what you need to get started:

* Clone this repository
* Open it with any JetBrains IDE (we tested with [WebStorm](https://www.jetbrains.com/webstorm/))
* Make sure Docker is running, and [Docker support is enabled in the IDE](https://www.jetbrains.com/help/webstorm/docker.html#enable_docker)
* Run any of the `Docker - *` run configurations to launch a specific Guide (top toolbar, see [web help for more info](https://www.jetbrains.com/help/webstorm/running-applications.html))
* Wait until the container is running and the console shows a URL (similar to `http://localhost:8000/`)
* Connect the browser to `http://localhost:8000/`
* Start authoring, and see reloads in the browser (after ~6 seconds)

This will build and run a Docker container for the Guide you want to work with,
and mount the `contents` folder of that Guide as a volume inside the container.

For humans: if you launch `Docker - IntelliJ Guide`, you can work on any content in the
`sites/intellij/guide/contents` directory of this repository.

### Local approach - For Gatsby connoisseurs, and content enthusiasts that don't like containers

To set up a local development copy of this project, you will need:

* NodeJS 14.*
* Yarn

When those are in place, you will have to:

* Clone this repository and `cd` to the directory
* Run `yarn` to install dependencies
* Run `yarn run pc:develop` (where `pc` is the Guide you want to run, e.g. `dotnet`, `intellij`, and others)
* Connect the browser to `http://localhost:8000/`
* Start authoring, and see reloads in the browser

If you want to try building a new Docker image for content creators,
open a terminal in the root of this repository and run:

```
docker build . -f Dockerfile-ContentCreators -t registry.jetbrains.team/p/evan/guide-containers/guide-content-creators:latest
```

Once finished, you can run the Docker frun configurations to test out things.

## Authoring

Let's talk authoring, which is where the value of the Guide gets created.

### Working on Tips

* Go to `src/{guide}/contents/tips`
* Make a new directory with an `index.md` in it
* Make a `card.png` screenshot (400x200-ish) to be used in Twitter cards
* Make a `thumbnail.png` screenshot (square, preferably small)

The frontmatter lets you point to different filenames for images. In the
frontmatter, put your author "label" as `author` (more on that in a second.)
Put zero or more labels for `technology` and `topic`. (It's ok to leave those
empty.)

For `subtitle`, keep it Twitter-ish in length. The `leadin` is a Markdown
field which appears beside the short movie, as kind of a teaser.

You can also optionally do a sequence of `seealso` title/href pairs.

On the topic of `shortMovie` and `longMovie`. The `shortMovie` is intended
for Twitter. It's the equivalent of and animated gif. Short, zoomed-in so
it could sort-of be read on a phone.

At the time of this writing it is required, but that might change.

The `longMovie` is completely optional. It is intended to be big, narrated,
and tell the story of the body text.

What goes in the body text? A deeper-dive on the tip: the problem it is
solving, why you should give a crap, its variations, etc.

> **Tip:- R** Install the [PNG Optimizer plugin](https://plugins.jetbrains.com/plugin/7942-png-optimizer) to make sure your PNG images are optimized in terms of file size.
> This speeds up (re)build time, and saves precious bandwidth.
> The plugin hooks into the commit tool window, and automatically runs optimization (when enabled).

### Authors

Each Guide resource needs an author, so create a directory in `src/{guide}/contents/authors`
and put an `index.md` in there.

For the directory name...don't use your personal name. We don't want
personally-identifying information in log files, URLs in analytics, etc.
As a convention, use your initials.

Put a square-aspect-ratio headshot in the directory to, then point to it
from the frontmatter. Don't worry about size...Gatsby creates multiple
responsively-sized images automatically.

The frontmatter for author includes something called `label`. This is a
shortname for the author, sort of the category name. Anything that uses
this author will use the label, *not* the filename. It's the key used
for the reference. This applies to other category types as well: topic,
technology.

### Technology

This is a category type used for "software packages that people care about
and search for." `django` is a good example, `debugging` is a bad one.

Each technology has a directory, and a Markdown file. Have a look at the existing
ones to get an idea about how they are created.

## Topic

Same as technology, but these are words use as jargon for the IDE. Somewhat
like features and systems in our product. If you land on a tip about VCS, you
might want to see lots more about VCS.

## Playlist

Sometimes you want to group a subset of resources -- usually tips -- into
an ordered sequence. You want the collection to have a URL, some
explanation, and be tweeted and discoverable on its own.

Think "42 Tips and Tricks".

That's where a playlist comes in. It is a resource -- it has a thumbnail,
a writeup, topics/technologies, authors, etc. -- that is a collection of
other resources.

That's where the tricky bit comes in. You don't want a tip to appear to be
"in" a playlist. Otherwise, Google would think there were three different
URLs for a playlist. As you navigate a playlist, you want to stay in
the context of a playlist.

To solve this, we keep a query string URL parameter as you navigate the
items in the playlist, to let the system know which playlist this should
render in. (This info is assembled client-side, as this is an SSG.) That
same client-side logic determines previous/next and ToC information.

If you land on a tip without a query string, we do the following:

* See if the tip is in *any* playlists, and if so, use the first playlist
* If not, show the playlist as if standalone

## Tutorials

A tutorial is a deep-dive on a topic. Multi-step with code, explanation,
screenshots, and possibly videos on each step.

*Note: if you are doing a tutorial that has code snippets in JSX or TSX,
you can't put it in the tutorial step folder. Gatsby will think that's a
page in the site.*

## Re-building and Deploying

To make a production build, run one of the build scripts, such as `yarn run pc:build`. 
This generates output in `public/pycharm/guide` (which is actually a symlink to the shared, cross-site, parent directory).

Thus, make sure to do a symlink from, for example, `sites/pycharm-guide/public` to `sites/pycharm/guide`

The content is proxied at, for example, `https://www.jetbrains.com/pycharm/guide/`.

## Troubleshooting Gatsby

When things go wrong with Gatsby, there are some things to try...

### Docker-based approach

Using the Docker approach? Whatever you do, re-run the build configuration and re-create the Docker container.
This will solve most, if not all, Gatsby cache issues.

### Local approach

Running locally? You will need some background knowledge...

When you run `yarn run pc:develop` and edit, Gatsby does an incremental rebuild 
and reloads your browser. It's all very fast and very productive.

Except when it isn't. Due to a bug in how things are marked as outdated, 
you will sometimes find either an error in a GraphQL query, or something 
doesn't change on the screen. This is usually caused by the Gatsby cache in 
the `.cache` directory, either when authoring *or* when making a production 
build.

To address this:

* Shut down the process you are using to run Gatsby (`yarn run ...`)
* Run `yarn run pc:clean` (where `pc` is the Guide you want to clean)
* Re-start your Guide (`yarn run ...`)

## License

The content of this repository are under two licenses. The software is covered by 
the Apache 2 license and the content is covered by the Creative Common license. 
See the [LICENSE.txt](LICENSE.txt) file for the detail.

When non-JetBrains contributor join, they needed to acknowledge consent by 
adding a comment on [the ticket](https://github.com/JetBrains/jetbrains_guide/issues/206) in the repository. 
