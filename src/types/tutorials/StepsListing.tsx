import React from 'react';

interface IStepsListingProps {
  steps: any[];
}

const StepsListing: React.SFC<IStepsListingProps> = ({ steps }) => {
  return (
    <ul>
      {steps.map(step => (
        <li key={step.fields.slug}>{step.frontmatter.title}</li>
      ))}
    </ul>
  );
};

export default StepsListing;
