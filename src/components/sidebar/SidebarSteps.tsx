import React from 'react';
import { Link } from 'gatsby';

export interface IStep {
  label: string;
  target: string;
  marker?: number;
}

export interface ISidebarStepsProps {
  steps: IStep[];
}

const Step: React.FunctionComponent<IStep> = ({ label, target, marker }) => (
  <li className={`steps-segment is-active`}>
    <Link to={target} style={{ width: 'auto' }} className="has-text-dark">
      <span className="steps-marker is-primary">{marker}</span>
      <div className="steps-content">
        <p>{label}</p>
      </div>
    </Link>
  </li>
);

const SidebarSteps: React.FunctionComponent<ISidebarStepsProps> = ({ steps }) => {
  return (
    <div className="bio-page-sidebar-references-group" style={{ marginTop: '1rem' }}>
      {steps.length > 0 && (
        <>
          <p className="menu-label bio-page-sidebar-published">Tutorial Steps</p>
          <ul className="steps has-content-centered is-vertical is-small">
            {steps.map((step, index) => (
              <Step key={step.target} {...step} marker={index + 1} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SidebarSteps;
