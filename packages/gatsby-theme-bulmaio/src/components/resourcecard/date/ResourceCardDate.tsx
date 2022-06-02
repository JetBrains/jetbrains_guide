import * as React from 'react';

export interface ResourceCardDateProps {
  date?: string;
}

export const ResourceCardDate: React.FC<ResourceCardDateProps> = ({ date }) => (
  <div className="level-right is-size-7 has-text-grey">
    <span
      data-testid={`rcd-date`}
      className="level-item bio-common-card-published"
    >
      {date}
    </span>
  </div>
);
