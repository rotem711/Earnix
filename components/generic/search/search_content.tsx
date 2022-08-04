import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { MeiliSearch, SearchResponse } from 'meilisearch'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { GlobalContext } from 'pages/_app'
import SearchIcon from 'components/generic/icons/search'
import styles from './search_content.module.scss'

const SearchContent = () => {
  const [search, setSearch] = useState([])
  const [searchValue, setsearchValue] = useState('')
  const Globals = useContext(GlobalContext)
  const inputRef = useRef<HTMLInputElement>(null)
  const client = new MeiliSearch({
    host: process.env.NEXT_PUBLIC_MEILI_URL,
    apiKey: process.env.NEXT_PUBLIC_MEILI_CLIENT_KEY,
  })
  const router = useRouter()

  interface Hit {
    id: string
    title: string
    url: string
    blurb: string
    collection: string
  }

  const searchFunc = async (value) => {
    setsearchValue(value)
    if (!value) return setSearch([])
    const res: SearchResponse<Hit> = await client.index('pages').search(value)
    return setSearch(res.hits)
  }

  useEffect(() => {
    const { q } = router.query
    console.log(q)
    if (q) searchFunc(q)
  }, [router.query])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    searchFunc(value)
  }

  return (
    <div className={`${styles.root} default-grid container`}>
      <div className="col-span-full xxl:col-span-8 xxl:col-start-3">
        <div className={`${styles.inputWrapper}`}>
          <input
            className="typo-p text-black"
            onChange={onChange}
            type="text"
            ref={inputRef}
            value={searchValue}
            placeholder="Search"
          />
          <SearchIcon />
        </div>
        <h1>
          {Globals.translations.FOUNDRESULTS.replace(
            '%COUNT%',
            search.length.toString(),
          )}
        </h1>
        <h3>
          {Globals.translations.SEARCHTERM.replace('%TERM%', searchValue)}
        </h3>
        {!!search.length && (
          <ul className={styles.results}>
            {search.map((hit: Hit) => (
              <li key={hit.id}>
                <h3 className="typo-h3">{hit.title}</h3>
                {hit.blurb && <p className="typo-p">{hit.blurb}</p>}
                <Link href={hit.url}>
                  <a
                    href={hit.url}
                    className="typo-p-bold"
                  >
                    {Globals.translations.READMORE}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SearchContent
