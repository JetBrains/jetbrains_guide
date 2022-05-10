---
type: TutorialStep
date: 2022-04-27
title: Client-side templating with Mustache and HTMX
technologies: [.net, asp.net]
products: [rider,resharper]
topics: [data,web,editing,inspections]
author: khalidabuhakmeh
subtitle: Generate HTML on the client, based on JSON
thumbnail: ./thumbnail.png
longVideo:
    poster: ./poster.png
    url: https://youtu.be/wo1IMqsN6kU
---

HTMX recognizes that some development teams have likely invested substantially in building JSON over HTTP APIs, whether it's REST or GraphQL. Rather than rebuilding a backend that serves HTML exclusively, developers might find themselves in a situation where they need to call multiple backends providing different functionality. Therefore, when working with JSON on the client, we first need to choose a templating language.

HTMX has extension support for the following client-side templating languages: [Mustache](https://github.com/janl/mustache.js/), [Nunjucks](https://mozilla.github.io/nunjucks/), and [Handlebars](https://handlebarsjs.com/). In the example in this section, we'll be using Mustache. To enable HTMX and client-side templating, we need to include the following JavaScript assets on the page.

```html
<script src="~/js/extra/client-side-templates.js"></script>
<script src="~/js/extra/mustache.js"></script>
```

We then need to define our HTML element with three essential parts:

1. A call to `hx-ext`, which opts our HTML element into utilizing a known HTMX extension.
1. We set the attribute of `mustache-template` to our template identifier on our HTMX-powered element.
1. We create a `template` element with a Mustache template within the bounds of our HTML tag.

```html
<div hx-ext="client-side-templates" class="card m-5 p-5 ms-0 text-center">
    <div id="target">
        <h2>Change Me!</h2>
    </div>

    <!-- add htmx attributes to button -->
    <!-- will get this page -->
    <button class="btn btn-primary btn-lg px-4"
            hx-get
            hx-page="13_ClientsideTemplates"
            hx-page-handler="JSON"
            mustache-template="foo"
            hx-target="#target">
        Click Me
    </button>

    <template id="foo">
        <p class="fs-1"> The Id is #{{id}} with the author, {{author}}, writing "{{title}}".</p>
    </template>
</div>
```

When we trigger the button, the HTMX extension will process the response from our request as JSON through the Mustache templating engine. You'll notice that this extension enhances the HTMX experience without disrupting other familiar functionality. Furthermore, the extension allows us to opt-in to utilizing JSON APIs while also using a purpose-built backend for HTML snippets. As a result, we can continue to invest in the technologies we're invested in while also enhancing the user experiences we hope to deliver. It's a win/win for everyone!

In the following video, we'll explore the dark arts of "Out-of-band Swaps",  learn why it's forbidden knowledge in the next section.
