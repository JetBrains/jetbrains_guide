# TODO

## Now


## Next

- Use gatsby-config to turn tutorials on/off

- Get icons out of that other website and host locally 

- Rewrite tip subtitles to be 140 char tweet bodies

- Re-do the audio on the first two tips

- Put zoom-and-pan and annotations in other videos

## Before MVP

- Favicon

- Get Google Analytics dropped in

- jetbrains.com/pycharm/guide proxy

## Soon

- Refactor layout components to not repeat so much

- Get rid of "path" in frontmatter and infer from filename

- Clean up all unused bio class names

- Get the Twitter <head> metadata to allow just posting the link 
in Sprout and not have to upload the video meaning Twitter Cards

- Get "news" working

- Some way to do fragments in graphql queries

- Tests

- Pagination

- Tutorials with steps

- Convert navbar et al. to be driven by settings in gatsby-config

## Later

- Scroll the sidebar with the scrolling

- SEO with JSON-LD

- Disqus

- Playlists

- Markdown shortcodes for actions

- Search

- Consider different fonts

## Someday

- Some concept of draft

- Breadcrumbs

- Avoid doing so many graphql queries per page (absence of joins)

- Documents with no topics/technologies in frontmatter

- Corpus with no frontmatter with topic or technology

## Done

- Get Bulma and SASS running

- Setup ts-jest

- Make nav menu with tests

- Footer

- Heading

- Remark plugin that displays the action key binding for the current 
  browser platform

- Categories/tags -> Technologies/topics

- Richer formatting on technologies and topics

- Treat technologies, tags, authors as first-class "types"

- Authors

- Convert tips to "content type"

- Get tips from src/contents -> src/tips

- Removed the `embed:index.tsx`

- Author blurbs on tip tweet listings

- Finish tip layout

- Add to schema:

    - tweet dates/urls
    
    - full movie
    
    - see also

- Display tip poster image in listings

- Show sidebar on tip
   
- Filter in createAuthors, createTopics, etc. e.g. .filter(author=author)

- Hamburger collapse/expand JS

- Put published date in the listings

- Make a square, smaller thumbnail from the poster to use in listings

- Make short video is-three-fifths

- Make the listings 3/4ths

- Get rid of tweet dates

- Rewrite into new repo

    - Remove husky and thus lint-staged
    
    - Remove stylelint
    
    - Remove tests (but not Jest setup)

- Get a “Learn More” button above the fold which scrolls

- Decrease min-height on the heading to get rid of some empty space

- Sidebar panel for tips showing internal links

- The links in "More"

- Homepage: remove a bunch of text, then provide listing of recent 
tips, resource box with embedded video

- Fix all footer links, header links, etc.

- Get the listings to have color for tags, technology

- Better README in repo root

    - Explain milestones, future work

- Allow empty technologies/topics

- Change navbar from dark to black

- Refactor sidebar into subcomponents

- Don't show full movie, see also, learn more, in-depth in body or 
sidebar if null
