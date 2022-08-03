import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './link_box_grid.module.scss'
import LinkBoxGridInterface from './link_box_grid.interface'

export const typename = 'Set_Replicator_BlockLinkBoxGrid'

const LinkBoxGridBlock: FunctionComponent<{ block: LinkBoxGridInterface }> = ({
  block,
}) => {
  const {
    lbg_headline, lbg_links, lbg_cta_title, lbg_cta_url,
  } = block
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.block_wrapper} container`}>
        <p className={`${styles.block_title}`}>{lbg_headline}</p>
        <div className="default-grid">
          <div className="xxl:col-span-8 xxl:col-start-3 xl:col-span-12 lg:col-span-12 md:col-span-8 col-span-4">
            <div className={`${styles.event_card_wrapper}`}>
              {lbg_links.map((event) => (
                <Link href={event.item_link || ''}>
                  <div
                    className={`${styles.event_card}`}
                    key={event.main_label}
                  >
                    <p className={`${styles.main_label}`}>{event.main_label}</p>
                    <p className={`${styles.description}`}>
                      {event.description}
                    </p>
                    <div className={`${styles.event_card_bg}`}>
                      <Image
                        src="/images/event_card_bg.svg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {lbg_cta_url && (
              <div className="w-full flex lg:mt-40 md:mt-32 mt-24">
                <Link href={lbg_cta_url}>
                  <a href={lbg_cta_url} className={`${styles.cta}`}>
                    {lbg_cta_title}
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkBoxGridBlock
