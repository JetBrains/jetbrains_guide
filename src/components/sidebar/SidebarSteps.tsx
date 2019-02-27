import React from 'react';
import SidebarStep from './SidebarStep';

export interface IStep {
  label: string;
  slug: string;
}

export interface ISidebarStepsProps {
  steps: IStep[];
  currentSlug?: string;
}

const SidebarSteps: React.FC<ISidebarStepsProps> = ({ currentSlug, steps }) => {
  return (
    <div className="bio-page-sidebar-references-group" style={{ marginTop: '1rem' }}>
      {steps.length > 0 && (
        <>
          <p className="menu-label bio-page-sidebar-published">Tutorial Steps</p>
          <ul className="steps has-content-centered is-vertical is-small">
            {steps.map((step, index) => (
              <SidebarStep key={step.slug} label={step.label} target={step.slug} marker={index + 1} isActive={step.slug === currentSlug} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SidebarSteps;
