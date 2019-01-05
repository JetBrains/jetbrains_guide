import { Link } from 'gatsby';
import React from 'react';

export interface ISidebarStepProps {
  label: string;
  target: string;
  marker: number;
  isActive: boolean;
}

const SidebarStep: React.FunctionComponent<ISidebarStepProps> = ({ label, target, marker, isActive }) => {
  const markerClass = isActive ? 'is-info' : 'is-primary';
  return (
    <li className={`steps-segment is-active`}>
      <Link to={target} style={{ width: 'auto' }} className="has-text-dark">
        <span className={`steps-marker ${markerClass}`}>{marker}</span>
        <div className="steps-content">
          <p>{label}</p>
        </div>
      </Link>
    </li>
  );
};

export default SidebarStep;
