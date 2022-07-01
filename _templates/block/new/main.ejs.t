---
to: components/blocks/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.tsx
---
import React, { FunctionComponent } from 'react'
import styles from './<%= h.inflection.underscore(name) %>.module.scss'
import <%= h.inflection.camelize(name) %>Interface from './<%= h.inflection.underscore(name) %>.interface'

export const typename = 'Set_Replicator_Block<%= h.inflection.camelize(name) %>'

const <%= h.inflection.camelize(name) %>Block:FunctionComponent<{ block: <%= h.inflection.camelize(name) %>Interface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    <%= h.inflection.humanize(name) %> Block:
    {block.type}
  </div>
)

export default <%= h.inflection.camelize(name) %>Block
