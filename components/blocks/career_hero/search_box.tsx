import React, { useContext, useRef, useState } from 'react'
import { MeiliSearch, SearchResponse } from 'meilisearch'
import slugify from 'slugify'
import Link from 'next/link'
import { GlobalContext } from 'pages/_app'
import CircularCTA from 'components/generic/icons/circularCTA'
import SearchIcon from 'components/generic/icons/search'
import Cancel from 'components/generic/icons/cancel'
import { Hit } from './career_hero.interface'
import styles from './search_box.module.scss'

const SearchBox = () => {
  const [search, setSearch] = useState([])
  const Globals = useContext(GlobalContext)
  const inputRef = useRef<HTMLInputElement>(null)
  const client = new MeiliSearch({
    host: process.env.NEXT_PUBLIC_MEILI_URL,
    apiKey: process.env.NEXT_PUBLIC_MEILI_CLIENT_KEY,
  })
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (!value) return setSearch([])
    const res: SearchResponse<Hit> = await client.index('jobs').search(value, {
      facets: ['location.name', 'department'],
    })
    return setSearch(res.hits)
  }

  const clear = () => {
    setSearch([])
    inputRef.current.value = ''
  }

  return (
    <div className={styles.root}>
      <input
        className="typo-p text-black"
        onChange={onChange}
        type="text"
        ref={inputRef}
        placeholder="Search"
      />
      <SearchIcon className={styles.searchIcon} />
      <CircularCTA className={styles.searchCTA} />
      <button className={styles.cancel} type="button" onClick={clear}>
        <Cancel />
      </button>
      {!!search.length && (
        <ul className={styles.results}>
          <span className="typo-p-small text-black-50 block mb-24">
            {Globals.translations.POSITIONS}
          </span>
          {search.map((hit: Hit) => (
            <li key={hit.id}>
              <Link
                href={`/career/${hit.id}/${slugify(hit.name, { lower: true })}`}
              >
                <a className="typo-p text-black-100 flex justify-between">
                  <span className="text-ellipsis block">{hit.title}</span>
                  <span className="typo-p-small text-black-50">
                    {hit.location.name}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBox
