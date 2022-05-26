import { Link } from 'gatsby';
import * as React from 'react';

export interface SidebarStepProps {
  label: string;
  target: string;
  marker: number;
  isActive: boolean;
}

const SidebarStep: React.FC<SidebarStepProps> = ({
  label,
  target,
  marker,
  isActive,
}) => {
  const markerClass = isActive ? 'is-info' : 'is-primary';
  return (
    <li className={`steps-segment is-active`}>
      <Link
        data-testid={`ss-link`}
        to={target}
        style={{ width: 'auto' }}
        className="has-text-dark"
      >
        <span className={`steps-marker ${markerClass}`}>{marker}</span>
        <div className="steps-content">
          <p>{label}</p>
        </div>
      </Link>
    </li>
  );
};

export default SidebarStep;
