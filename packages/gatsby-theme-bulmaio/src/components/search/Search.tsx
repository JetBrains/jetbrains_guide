import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { useVisible } from 'react-hooks-visible';
import lunr from 'lunr';
import SearchResult from './SearchResult';

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
  readonly subtitle: string
  readonly slug: string
  readonly excerpt: string
}

const search = (query: string): readonly SearchResult[] => {
  const { index, store } = window.__LUNR__ && window.__LUNR__.en;
  return query ? index.search(query).map(({ ref }) => store[ref]) : [];
};

interface LunrSearchProps {
  readonly limit?: number
}

export const Search: React.FC<LunrSearchProps> = ({ limit }: LunrSearchProps) => {
  const ref = useRef(null);
  const [searchInputRef, searchInputVisible] = useVisible((vi: any) => vi >= 1);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<readonly SearchResult[]>([]);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (searchInputVisible)
      (searchInputRef.current! as any).focus();
  }, [searchInputVisible]);

  return (
    <nav ref={ref}  className={`panel ${isActive ? '' : 'is-shadowless'}`}>
      <div className="panel-block has-text-centered ">
        <p className="control has-icons-left">
          <input ref={searchInputRef} className="input" type="text" placeholder="Search" autoFocus={true}
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
          {results.slice(0, limit).map((result, index) => (
            <Link key={index} to={result.slug} className="panel-block is-active">
              <SearchResult title={result.title} subtitle={result.subtitle} />
            </Link>
          ))}
        </>
      ) : null}
      {isActive ? (
        <div className="panel-block">
          {results.length ? (
            <p>Showing {limit ? `${Math.min(limit, results.length)} of` : null} {results.length}{' '}
              {results.length === 1 ? 'result' : 'results'}.</p>
          ) : (
            <p>No results have been found.</p>
          )}
        </div>
      ) : null}
    </nav>
  );
};
