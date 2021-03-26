# JetBrains Guide

The JetBrains Guide is a collection of resources for learning JetBrains IDEs. 
Similar to an "Awesome PyCharm" but richer in content and formatting. The 
Guide is intended as an open source project.

# Technology

- Content as markdown files in a repository

- Rendered to a semi-static site using Gatsby

- Available as open source

# Installation

*Note: As of April 2020, you need NodeJS 12. Later versions (14, etc.) won't work.*

To setup a local development copy of this project, follow the steps below.

If you prefer Docker, then see the Docker section below.

- Clone this repo and cd to the directory
- `yarn`
- `yarn run pc:develop` (or `yarn run go:develop`)
- Start authoring
- Connect to `http://localhost:8000/`

## Using Docker

This project supports Docker containers as well. To use it, perform the following steps:

- Clone this repository
- Open it with any JetBrains IDE
- Use the `GoLand Guide` or `PyCharm Guide` run configurations

This will create a Docker container for either `goland-guide` or `pycharm-guide`, and mount the project as a volume inside the container.

All the dependencies will be created on your machine but `Gatsby` itself and all other nodejs related tools will be in the container.

**NOTE:** Currently there a bug prevents correctly sharing the volume configuration via the Run Configurations, see [IDEA-222853](https://youtrack.jetbrains.com/issue/IDEA-222853).
To overcome this, you'll need to change the configuration to point the project directory on your computer.

# Re-building and Deploying

To make a production build, run one of the build scripts, such as `yarn run pc:build`. 
This generates output in `public/pycharm/guide` (which is actually a symlink to the shared, cross-site, parent directory.)

Thus, make sure to do a symlink from, for example, `sites/pycharm-guide/public` to `sites/pycharm/guide`

# Gatsby Cache Misfires

When you run `yarn run pc:develop` and edit, Gatsby does an incremental rebuild 
and reloads your browser. It's all very fast and very productive.

Except when it isn't. Due to a bug in how the mark things as outdated, 
you will frequently find either an error in a GraphQL query or something 
doesn't change on the screen. It means we can't trust the Gatsby cache in 
the `.cache` directory, either when authoring *or* when making a production 
build.

To address this:

- Shut down the run process for `yarn run pc:develop`

- Run `yarn run pc:clean`

- Re-start `yarn run pc:develop`

- If doing a production build, re-do `yarn run pc:build`

This is a drag, because full builds are slow.

# Authoring

With that in place, let's talk authoring.

## Tips

- Go to `src/pages/tips`

- Make a new directory with an `index.md` in it

- Make a `card.png` screenshot (400x200-ish) to be used in Twitter cards

- Make a `thumbnail.png` screenshot (square, preferably small)

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

## Author

Each Guide resource needs an author, so create a directory in `src/authors` 
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

## Technology

This is a category type used for "software packages that people care about 
and search for." `django` is a good example, `debugging` is a bad one.

Each technology has a Markdown file -- it's a resource with a page -- and 
a logo. At the moment everything is flat the `technologies` directory but 
really, each category should be a subdirectory.

There are several sites with free vector logos for popular projects and 
products.

You don't *have* to create a technology page for a tip. Having a category 
with only a couple of things in it is an anti-pattern and disservice to the 
readers.

## Topic

Same as technology but these are words use as jargon for the IDE. Somewhat 
like features and systems in our product. If I land on a tip about VCS, I 
might want to see lots more about VCS. (That, in fact, was an original 
motivator for the Guide.)

## Playlist

Sometimes you want to group a subset of resources -- usually tips -- into 
an ordered sequence. You want the collection to have a URL, some 
explanation, and be tweeted and discoverable on its own.

Think "42 Tips and Tricks".

That's where a playlist comes in. It is a resource -- it has a thumbnail, 
a writeup, topics/technologies, authors, etc. -- that is a collection of 
other resources.

That's where the tricky bit comes in. You don't want a tip to appear to be 
"in" a playlist. Otherwise Google would think there were three different 
URLs for a playlist. But as you navigate a playlist, you want to stay in 
the context of a playlist.

To solve this we keep a query string URL parameter as you navigate the 
items in the playlist, to let the system know which playlist this should 
render in. (This info is assembled client-side, as this is an SSG.) That 
same client-side logic determines previous/next and ToC information.

If you land on a tip without a query string, we do the following:

- See if the tip is in *any* playlists, and if so, use the first playlist

- If not, show the playlist as if standalone

## Tutorials

A tutorial is a deep-dive on a topic. Multi-step with code, explanation, 
screenshots, and possibly videos on each step.

*Note: if you are doing a tutorial that has code snippets in JSX or TSX, 
you can't put it in the tutorial step folder. Gatsby will think that's a 
page in the site.*

# Development

- In the IDE, mark these directories as excluded: `.cache`, `.firebase`, `public`

- The fastest way to run things: open the top-level `package.json` and click the green play button beside the script you are interested in

- I also pin some of those run tabs, to switch between them quickly
