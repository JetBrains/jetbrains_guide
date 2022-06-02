import * as React from 'react';
import { Link } from 'gatsby';

export interface SidebarReferencesGroupProps {
  reftype: string;
  accent: string;
  references: string[];
}

const SidebarReferencesGroup: React.FC<SidebarReferencesGroupProps> = ({
  reftype,
  accent,
  references,
}) => {
  return (
    <div className="bio-page-sidebar-references-group">
      {references.length > 0 && (
        <>
          <p className="menu-label" style={{ marginTop: '1rem' }}>
            <span
              style={{ textTransform: 'uppercase' }}
              className="bio-page-sidebar-references-reftype"
            >
              {reftype}
            </span>
          </p>
          <div>
            {references.map(reference => (
              <Link
                data-testid={`srg-link`}
                to={`/${reftype}/${reference}/`}
                key={reference}
                style={{ display: 'inline-block', margin: '0 0.2rem' }}
                className="bio-page-sidebar-references-href"
              >
                <span
                  className={`tag bio-page-sidebar-references-label has-text-${accent}`}
                >
                  {reference}
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarReferencesGroup;
