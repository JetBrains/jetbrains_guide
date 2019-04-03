import * as React from 'react';
import BaseLayout from '../layouts/BaseLayout';

const AboutPage: React.FunctionComponent = () => (
  <BaseLayout title="About the Guide">
    <div className="container content" style={{ marginTop: '2rem' }}>
      <div className="columns is-mobile">
        <div className="column is-three-quarters-desktop">
          <h1>Welcome to the PyCharm Guide</h1>
          <p>
            The PyCharm Guide collects lots of PyCharm resources -- blog posts, videos, tip tweets, articles, and more -- from inside and
            outside of JetBrains, into a convenient, interlinked, attractive site. All done as a
            community-oriented open source project.
          </p>


          <h2>Why The Guide?</h2>
          <p>Lots of resources, why another?</p>
          <ul>
            <li>Rich, valuable content showcasing how our IDE gets you into the “flow"</li>
            <li>Organization and linking which helps you find one thing then browse to related things</li>
            <li>Open content you can engage on GitHub</li>
            <li>
              Content the way people want it: tell me the “why”, working code, lots of hyperlinks, editorial process, consistent, visual,
              different flavors of videos (snippet, full with audio)
            </li>
          </ul>
          <h2>Where Does It Live?</h2>
          <p>The content and software for the Guide is in a <a href="https://github.com/JetBrains/pycharm_guide">GitHub repository</a> in
            the <a href="https://github.com/JetBrains">JetBrains organization</a>,
            under the Apache 2.0 license. The site software
            (Gatsby), Markdown pages, images, example code, etc. are in there.</p>
          <p>The site itself is deployed to a Firebase Hosting site (for now) and
            proxied into <a href="https://www.jetbrains.com/pycharm/guide/">https://www.jetbrains.com/pycharm/guide/</a>.</p>
          <h2>How Can I Contribute?</h2>
          <p>We'd love contributors. You can do something as small as tweet us about your
            ideas, or go a little further and file a ticket.</p>
          <p>But we'd really like authors. Got some little tip that you'd really like
            to share with others? File a ticket and we can do it for you (and give you
            attribution.) Or follow the instructions in the <a href="https://github.com/JetBrains/pycharm_guide/blob/master/README.md">README</a> to
            submit a PR with some material.</p>

        </div>
      </div>
    </div>
  </BaseLayout>
);

export default AboutPage;
