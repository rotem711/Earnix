import React, { FunctionComponent } from 'react'
import styles from './product_teaser.module.scss'
import ProductTeaserInterface from './product_teaser.interface'

export const typename = 'Set_Replicator_BlockProductTeaser'

const ProductTeaserBlock:FunctionComponent<{ block: ProductTeaserInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Productteaser Block:
    {block.type}
  </div>
)

export default ProductTeaserBlock
