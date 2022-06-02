import * as React from 'react';

export interface SearchResultProps {
  title: string;
  subtitle?: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ title, subtitle }) => (
  <div className="has-text-left">
    <b>{title}</b>
    <br />
    <small className="is-small">{subtitle}</small>
  </div>
);

export default SearchResult;
