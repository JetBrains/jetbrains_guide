import React, { useState } from 'react';
import { Link } from 'gatsby';
import lunr from 'lunr';

declare global {
  interface Window {
    __LUNR__: {
      readonly [language: string]: {
        readonly index: lunr.Index
        readonly store: {
          readonly [key: string]: any
        }
      }
    }
  }
}

interface SearchResult extends lunr.Index.Result {
  readonly title: string
  readonly slug: string
}

const search = (query: string): readonly SearchResult[] => {
  const { index, store } = window.__LUNR__ && window.__LUNR__.en;
  return query ? index.search(query).map(({ ref }) => store[ref]) : [];
};

interface LunrSearchProps {
  readonly limit?: number
}

export const Search = ({ limit }: LunrSearchProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<readonly SearchResult[]>([]);
  const [isActive, setActive] = useState(false);

  return (
    <div /*css={styles.wrapper}*/>
      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="columns">
          <div className="column is-6 is-offset-2 has-text-centered">
            <nav className="panel">
              <div className="panel-block">
                <p className="control has-icons-left">
                  <input className="input" type="text" placeholder="Search"
                         value={query}
                         onChange={(event) => {
                           setQuery(event.target.value);
                           setResults(search(`${event.target.value}`));
                           setActive(event.target.value.length > 0);
                         }}
                  />
                  <span className="icon is-left">
                    <i className="fas fa-search" aria-hidden="true" />
                  </span>
                </p>
              </div>
              {isActive ? (
                <>
                  <p>Showing {limit ? `${Math.min(limit, results.length)} of` : null} {results.length}{' '}
                    {results.length === 1 ? 'result' : 'results'}.</p>
                  {results.slice(0, limit).map((result, index) => (
                    <Link key={index} to={result.slug} className="panel-block is-active">
                      {result.title}
                    </Link>
                  ))}
                </>
              ) : null}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
