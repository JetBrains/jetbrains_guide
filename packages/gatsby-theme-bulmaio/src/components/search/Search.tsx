import React, { useState } from 'react'
import { Link } from 'gatsby'
import lunr from 'lunr'

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
    const { index, store } = window.__LUNR__ && window.__LUNR__.en
    return query ? index.search(query).map(({ ref }) => store[ref]) : []
}

interface LunrSearchProps {
    readonly limit?: number
}

export const Search = ({ limit }: LunrSearchProps) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<readonly SearchResult[]>([])
    const [isActive, setActive] = useState(false)

    return (
        <div /*css={styles.wrapper}*/>
            <label>
                <span /*css={styles.hidden}*/>Search</span>
                <input
                    type="search"
                    /*css={styles.input}*/
                    value={query}
                    onChange={(event) => {
                        setQuery(event.target.value)
                        setResults(search(event.target.value))
                        setActive(true)
                    }}
                />
            </label>
            {isActive ? (
                <ul /*css={styles.list}*/>
                    {results.slice(0, limit).map((result, index) => (
                        <li key={index} /*css={styles.item}*/>
                            <Link /*css={styles.link}*/ to={result.slug}>
                                {result.title} p: {result.slug}
                            </Link>
                        </li>
                    ))}
                    <li /*css={styles.footer}*/>
                        Showing {limit ? `${Math.min(limit, results.length)} of` : null} {results.length}{' '}
                        {results.length === 1 ? 'result' : 'results'}.
                    </li>
                </ul>
            ) : null}
        </div>
    )
}
