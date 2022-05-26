import * as React from 'react';
import SidebarStep from './SidebarStep';

export interface Step {
  label: string;
  href: string;
}

export interface SidebarStepsProps {
  steps: Step[];
  currentSlug?: string;
}

const SidebarSteps: React.FC<SidebarStepsProps> = ({ currentSlug, steps }) => {
  return (
    <div
      className="bio-page-sidebar-references-group"
      style={{ marginTop: '1rem' }}
    >
      {steps.length > 0 && (
        <>
          <p className="menu-label bio-page-sidebar-published">
            Tutorial Steps
          </p>
          <ul className="steps has-content-centered is-vertical is-small">
            {steps.map((step, index) => (
              <SidebarStep
                key={step.href}
                label={step.label}
                target={step.href}
                marker={index + 1}
                isActive={step.href === currentSlug}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SidebarSteps;
