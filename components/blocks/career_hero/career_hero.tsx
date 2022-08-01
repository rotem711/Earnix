import React, { FunctionComponent, useContext } from 'react'
import cn from 'classnames'
import { GlobalContext } from 'pages/_app'
import styles from './career_hero.module.scss'
import CareerHeroInterface from './career_hero.interface'
import SearchBox from './search_box'

export const typename = 'Set_Replicator_BlockCareerHero'

const CareerHeroBlock: FunctionComponent<{
  block: CareerHeroInterface
}> = ({ block }) => {
  const Globals = useContext(GlobalContext)
  const jobData = block.ssr[0]
  const headlineClasses = cn(
    'col-span-8',
    styles.headline,
    'isCentered md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 xxl:col-start-4 xxl:col-span-6',
  )

  const copyClasses = cn(
    'col-span-8',
    'isCentered lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 xxl:col-start-4 xxl:col-span-6',
    styles.copy__background,
  )
  return (
    <div
      className={`${styles.root} ${styles.largeVersion} relative`}
    >
      <div className={`${styles.orangeGradient}`} />
      <div className={`${styles.blueGradient}`} />
      <div
        className={`${styles.contentWrapper} container default-grid content-center`}
      >
        {block.ch_headline && (
          <div className={`${headlineClasses}`}>
            <h1>{block.ch_headline.split('\n').map((i) => <span key={i}>{i}</span>)}</h1>
          </div>
        )}
        {block.ch_teaser_copy && (
          <div className={`${copyClasses} ${styles.copyBackground}`}>
            <p className="mb-16">{block.ch_teaser_copy}</p>
            <p className="typo-h3 text-white mb-16">
              {Globals.translations.JOBS_HEADLINE.replace('$x', jobData.totalCount.toString()).replace('$y', jobData.locationCount.toString())}
            </p>
            <SearchBox />
          </div>
        )}
      </div>
    </div>
  )
}

export default CareerHeroBlock
