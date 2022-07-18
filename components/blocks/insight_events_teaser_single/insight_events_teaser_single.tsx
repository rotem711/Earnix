import React, { FunctionComponent, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GlobalContext } from 'pages/_app'

import styles from './insight_events_teaser_single.module.scss'
import InsightEventsTeaserSingleInterface from './insight_events_teaser_single.interface'

export const typename = 'Set_Replicator_BlockInsightEventsTeaserSingle'

const InsightEventsTeaserSingleBlock: FunctionComponent<{
  block: InsightEventsTeaserSingleInterface
}> = ({ block }) => {
  const Globals = useContext(GlobalContext)

  const insightTypeText = {
    blog: Globals.translations.LATESTNEWS,
    event: Globals.translations.LATESTEVENT,
    insight: Globals.translations.LATESTINSIGHT,
  }

  return (
    <div className={`${styles.root} container grid grid-cols-6 gap-x-15`}>
      <h3 className="col-span-6">{block.iets_headline}</h3>
      <div className={`${styles.card} col-span-6 xxl:col-span-4 xxl:col-start-2 grid grid-cols-2 gap-x-15`}>
        <div className={`${styles.content} col-span-2 md:col-span-1`}>
          <span className="typo-tag">
            {insightTypeText[block.iets_entry.collection.handle]}
          </span>
          <h2>{block.iets_entry.title}</h2>
          <p className="blurb">{block.iets_entry.blurb}</p>
          <Link href={block.iets_entry.uri}>
            <a href={block.iets_entry.uri} className="typo-p-bold">
              {Globals.translations.READMORETEASERSINGLE}
            </a>
          </Link>
        </div>
        <div className={`${styles.image} col-span-2 md:col-span-1`}>
          <Image
            width={block.iets_entry.cover_image.width}
            height={block.iets_entry.cover_image.height}
            src={block.iets_entry.cover_image.permalink}
            alt={block.iets_entry.cover_image.alt}
            blurDataURL={block.iets_entry.cover_image.placeholder}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </div>
      <div className={`${styles.cta} col-span-6`}>
        <Link href={block.iets_cta_url}>
          <a href={block.iets_cta_url} className="typo-h5">
            {block.iets_cta_title}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default InsightEventsTeaserSingleBlock
