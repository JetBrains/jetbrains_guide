import React from 'react';
import ResourceCard from '../../components/ResourceCard';
import { ITutorial } from './models';

export interface IStepsListingProps {
  steps: ITutorial[];
}

const StepsListing: React.FunctionComponent<IStepsListingProps> = ({ steps }) => {
  return (
    steps && (
      <div className="bio-tutorial-steps-listing">
        {steps.map(step => {
          const fm = step.frontmatter;
          const fields = step.fields;
          const href = fields.slug;
          const thisAuthor = fields.author;
          const author = thisAuthor
            ? {
                title: thisAuthor.frontmatter.title,
                headshot: thisAuthor.frontmatter.headshot,
                href: thisAuthor.fields.slug
              }
            : undefined;
          const thumbnail = fm.thumbnail;
          return (
            <ResourceCard
              key={href}
              title={fm.title}
              subtitle={fm.subtitle}
              technologies={fields.technologies}
              topics={fields.topics}
              href={href}
              thumbnail={thumbnail}
              author={author}
              date={fm.date}
            />
          );
        })}
      </div>
    )
  );
};

export default StepsListing;
