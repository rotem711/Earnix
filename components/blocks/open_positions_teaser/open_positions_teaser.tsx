import React, { FunctionComponent, useContext } from 'react'
import Link from 'next/link'
import { GlobalContext } from 'pages/_app'
import styles from './open_positions_teaser.module.scss'
import OpenPositionsTeaserInterface from './open_positions_teaser.interface'

export const typename = 'Set_Replicator_BlockOpenPositionsTeaser'

const OpenPositionsTeaserBlock: FunctionComponent<{
  block: OpenPositionsTeaserInterface
}> = ({ block }) => {
  const Globals = useContext(GlobalContext)
  const jobs = block.ssr[0].hits
  return (
    <div className={`${styles.root} container default-grid mb-44 lg:mb-80`}>
      <div className="xl:col-span-10 xl:col-start-2 col-span-12">
        <h2 className="w-full text-center mb-32 lg:mb-40">{block.opt_headline}</h2>
        <ul>
          {jobs.map((job) => (
            <li className={styles.listitem} key={job.id}>
              <Link href={job.uri}>
                <a>
                  <div className={styles.titlerow}>
                    <p className="typo-h4">{job.title}</p>
                    <p className="typo-p">{job.location.name}</p>
                  </div>
                  <div className={styles.linkrow}>
                    <p className="typo-p-bold">{job.department}</p>
                    <span className="typo-p-bold text-orange-100">{Globals.translations.FIND_OUT_MORE}</span>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OpenPositionsTeaserBlock
