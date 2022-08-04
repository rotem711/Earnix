import React, { FunctionComponent, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { GlobalContext } from 'pages/_app'
import SearchIconOrange from 'components/generic/icons/search_orange'
import styles from './hero_with_animated_lines.module.scss'
import HeroWithAnimatedLinesInterface from './hero_with_animated_lines.interface'

export const typename = 'Set_Replicator_BlockHeroWithAnimatedLines'

const HeroWithAnimatedLinesBlock: FunctionComponent<{
  block: HeroWithAnimatedLinesInterface
  showSearch: boolean
}> = ({ block, showSearch = false }) => {
  const [searchValue, SetSearchValue] = useState('')
  const router = useRouter()
  const Globals = useContext(GlobalContext)

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/search?q=${searchValue}`)
  }

  return (
    <div className={`${styles.root}`}>
      <div className="container default-grid">
        <div className={`${styles.contentWrapper} col-start-1 col-span-12`}>
          <div className={`${styles.headline} typo-h2`}>
            {block.hwal_headline}
          </div>
          <div className={`${styles.copy} typo-p`}>{block.hwal_copy}</div>
          {showSearch && (
            <form onSubmit={handleSearch} className={`${styles.searchBox}`}>
              <div className="typo-p">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => {
                    SetSearchValue(e.target.value)
                  }}
                  placeholder={Globals.translations.SEARCHPLACEHOLDER}
                />
                <button type="button" onClick={handleSearch}>
                  <SearchIconOrange />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroWithAnimatedLinesBlock
