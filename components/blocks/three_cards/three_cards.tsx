import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import AnimatedLines from 'components/generic/atoms/AnimatedLines/AnimatedLines'
import useIsMobile from 'utils/hooks'

import styles from './three_cards.module.scss'
import ThreeCardsInterface from './three_cards.interface'

export const typename = 'Set_Replicator_BlockThreeCards'

const ThreeCardsBlock: FunctionComponent<{ block: ThreeCardsInterface }> = ({
  block,
}) => {
  const isMobileMd = useIsMobile()
  const isMobileLg = useIsMobile('lg')

  const imageWrapper = (card) => (
    <div
      className={`${styles.imageWrapper} col-span-full md:col-span-3 lg:col-span-4 xl:col-span-3 xxl:col-span-2`}
    >
      <div>
        <Image
          layout="responsive"
          objectFit="contain"
          width={card.icon.width}
          height={card.icon.height}
          src={card.icon.permalink}
          alt={card.icon.alt}
        />
      </div>
    </div>
  )

  return (
    <div className={`${styles.root} container default-grid`}>
      <AnimatedLines
        variant="top"
        xInitialPosition={50}
        yInitialPosition={-50}
        width={1438}
        height={623}
        imageUrl="/images/topDownLinesCtaBlog.svg"
      />
      <div className="col-span-full lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 xxl:col-span-6 xxl:col-start-4">
        {block.tc_cards.map((card, index) => (
          <div
            key={card.headline}
            className={`${styles.card} grid grid-cols-8 lg:grid-cols-10 xl:grid-cols-8 xxl:grid-cols-6 gap-x-24`}
          >
            {(isMobileMd || index % 2 === 0) && imageWrapper(card)}
            <div
              className={`${styles.textWrapper} col-span-full md:col-span-5 lg:col-span-6 xl:col-span-5 xxl:col-span-4`}
            >
              {card.headline && (
                <div>
                  {isMobileLg ? (
                    <h5>{card.headline}</h5>
                  ) : (
                    <h3>{card.headline}</h3>
                  )}
                </div>
              )}
              {card.copy && (
                <p className={`${isMobileMd ? 'typo-p-small' : 'typo-p'}`}>
                  {card.headline}
                </p>
              )}
            </div>
            {!isMobileMd && index % 2 > 0 && imageWrapper(card)}
          </div>
        ))}
        <div className={`${styles.buttonWrapper}`}>
          <Button href={block.tc_cta_url} title={block.tc_cta_title} />
        </div>
      </div>
      <AnimatedLines
        variant="bottom"
        xInitialPosition={-100}
        yInitialPosition={-300}
        width={945}
        height={278}
        imageUrl="/images/bottomUpLines.svg"
      />
    </div>
  )
}

export default ThreeCardsBlock
