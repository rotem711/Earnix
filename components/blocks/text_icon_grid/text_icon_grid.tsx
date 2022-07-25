import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
import styles from './text_icon_grid.module.scss'
import TextIconGridInterface from './text_icon_grid.interface'
import LinkIcon from './link_icon/link_icon'

export const typename = 'Set_Replicator_BlockTextIconGrid'

const TextIconGridBlock:FunctionComponent<{ block: TextIconGridInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container grid grid-cols-12`}
  >
    <div className={`${styles.contentWrapper} col-start-1 col-span-12 xxl:col-start-3 xxl:col-span-8`}>
      <div className={`typo-h3 ${styles.headline}`}>
        {block.tig_headline}
      </div>
      <div className={styles.itemsWrapper}>
        {block.tig_items.map(({
          copy, heading, icon, link,
        }) => (
          <div
            key={heading}
            className={styles.tigItem}
          >
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <Image src={icon.permalink} width={icon.width} height={icon.height} />
              </div>
            </div>
            <div className={`${styles.heading} typo-h5`}>
              {heading}
              <Link href={link}>
                <a className={styles.linkAnchorTop}>
                  <LinkIcon />
                </a>
              </Link>
            </div>
            <div className={`typo-p ${styles.copy}`}>
              {parse(copy)}
            </div>
            <Link href={link}>
              <a className={styles.linkAnchorBottom}>
                <LinkIcon />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default TextIconGridBlock
