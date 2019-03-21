import React from 'react';
import ResourceCard from '../../components/ResourceCard';

export interface IStepsListingProps {
  steps: any[];
}

const StepsListing: React.FunctionComponent<IStepsListingProps> = ({ steps }) => {
  return (
    steps && (
      <div className="bio-tutorial-steps-listing">
        <h3 className="is-size-3" style={{marginBottom: '1rem'}}>Steps</h3>
        {steps.map(step => {
          return (
            <ResourceCard
              key={step.slug}
              title={step.title}
              subtitle={step.subtitle}
              technologies={step.technologies}
              topics={step.topics}
              slug={step.slug}
              thumbnail={step.thumbnail}
              author={step.author}
              date={step.date}
            />
          );
        })}
      </div>
    )
  );
};

export default StepsListing;
