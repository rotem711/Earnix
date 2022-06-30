import React from 'react'
import blockInventory from './inventory'

interface BlockInterface {
  __typename: string
  [key: string]: any
}

const Repeater = ({ blocks }: { blocks: BlockInterface[] }) => (
  <React.Fragment key="blocks">
    {blocks.map((block, index) => {
      const blockItem = Object.values(blockInventory).find(
        (b) => b.typename === block.__typename,
      )
      if (blockItem) {
        return React.createElement(
          blockItem.component,
          // typescript doesnt want the props in the same way I want them to be
          // there is probably a better solution than any tho
          { block, key: `block.${block.__typename}__${index}` } as any,
          null,
        )
      }
      return (
        <div key={`${block.__typename}`}>
          Block
          {block.__typename}
          : not found
        </div>
      )
    })}
  </React.Fragment>
)

export default Repeater
