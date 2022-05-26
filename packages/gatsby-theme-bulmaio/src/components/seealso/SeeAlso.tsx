import * as React from 'react';
import { SeeAlsoProps } from './models';

export const SeeAlso: React.FC<SeeAlsoProps> = ({ items }) => {
  if (items.length) {
    return (
      <div>
        <header className="is-size-3 is-bold">See Also</header>
        <div className="content">
          <ul>
            {items.map(see => (
              <li key={see.href}>
                <a href={see.href}>{see.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return null;
};
