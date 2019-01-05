import React from 'react';
import SidebarStep from './SidebarStep';

export interface IStep {
  label: string;
  target: string;
}

export interface ISidebarStepsProps {
  steps: IStep[];
  currentSlug?: string;
}

const SidebarSteps: React.FunctionComponent<ISidebarStepsProps> = ({ currentSlug, steps }) => {
  return (
    <div className="bio-page-sidebar-references-group" style={{ marginTop: '1rem' }}>
      {steps.length > 0 && (
        <>
          <p className="menu-label bio-page-sidebar-published">Tutorial Steps</p>
          <ul className="steps has-content-centered is-vertical is-small">
            {steps.map((step, index) => (
              <SidebarStep
                key={step.target}
                label={step.label}
                target={step.target}
                marker={index + 1}
                isActive={step.target === currentSlug}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SidebarSteps;
