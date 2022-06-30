---
to: components/generic/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.tsx
---
import React from 'react'
import styles from './<%= h.inflection.underscore(name) %>.module.scss'
import <%= h.inflection.camelize(name) %>Interface from './<%= h.inflection.underscore(name) %>.interface'

const <%= h.inflection.camelize(name) %> = (): <%= h.inflection.camelize(name) %>Interface => (
  <div
    className={`${styles.root} container`}
  >
    Generic Component: <%= h.inflection.humanize(name) %>
  </div>
)

export default <%= h.inflection.camelize(name) %>
