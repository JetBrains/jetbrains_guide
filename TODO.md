# TODO

## Now

## Next

- Author pages should show tips and tutorials (but not tutorial steps)

- Less pixelated favicon (per Roman)

  - <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">

  - <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

## Soon

- Fix responsive issues on Tips reported by Dmitry 

- Pagination

- Drafts (at the moment we aren't linking to anything from the unused 
  topics, so lowering priority)

- Markdown shortcodes for actions

- The pytest logo isn't square on the technology page

- Put credits to open source packages a la Made With

- Search

- Track clicks on buttons such as Full Video

## Later

- Do canonical URLs in <meta> if there are multiple paths to same 
resource

- Get "news" working

- Switch "On This Page" to use GraphQL table of contents

- Convert navbar et al. to be driven by settings in gatsby-config

- Handle YAML in frontmatter better e.g. use plugin

- Scroll the sidebar with the scrolling

- SEO with JSON-LD

- Disqus or some other commenting system

- Consider different fonts

## Someday

- Try to speed up image generation to improve build times

- Allow tutorials with .tsx etc. instead of the parallel structure of `content`

- Some concept of draft

- Breadcrumbs

- Avoid doing so many graphql queries per page (absence of joins)

- Documents with no topics/technologies in frontmatter

****

- Corpus with no frontmatter with topic or technology

- Clean up all unused bio class names

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

- Refactor all queries and components to use "mapping" via the 
sourceNodes event

- Favicon

- jetbrains.com/pycharm/guide proxy

- Wire up Google Tag Manager plugin

- Get icons out of that other website and host locally 

- Get rid of "path" in frontmatter and infer from filename

- Rewrite tip subtitles to be 140 char tweet bodies

- Remove Ansible

- Re-do the audio on the first two tips

- Move "See Also" to below the listings

- Get home page thumbnails to be responsive

- Tips/Topics/Technologies/Authors to be in a container at smaller screens

- Tutorials

    - Tutorials
    
        - Screenshot

    - Tutorial
   
        - Get steps listing in Tutorial
        
        - Ensure sidebar listing has active etc.
    
    - Tutorial Steps
    
        - Top listing: up, prev, next

        - Bottom navigation for previous/next    

        - Sidebar listing with current etc.

        - Video player
        
- Technologies: Website URL in schema and page

- Get the fontawesome icon displayed when looking at at a single topic

- Add a temporary "Series" capability to tips

- Refactor layout components to not repeat so much

- "Full Video" button by "Learn More" in tips  

- Land the Twitter Card

- Change the author filename from `pauleveritt` to `pwe`

- Get rid of the `excerpt`, `id` and other unused fields in 
  GraphQL queries
  
- "Series" navigation in tutorials

- Playlists

    - Listed in menu
    
    - Pick first playlist if nothing in query string
    
    - Sidebar showing other playlists this item appears in
    
    - Make a real listing in Playlist.tsx
    
    - List the playlists in Playlists.tsx
    
    - Add into menu
    
    - Remove "series" from code/data

- Get single implementation covering TutorialStep-in-Tutorial and 
  Tip-In-Playlist for TopNav, BottomNav, and SidebarPanel
