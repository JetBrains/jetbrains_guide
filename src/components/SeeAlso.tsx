import * as React from 'react';

interface ISeeAlso {
  title: string;
  href: string;
}

interface ISeeAlsoProps {
  items: ISeeAlso[];
}

const SeeAlso: React.FunctionComponent<ISeeAlsoProps> = ({ items }) => {
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

export default SeeAlso;
