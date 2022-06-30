---
to: pages/<%= h.inflection.underscore(base_path) %>/[slug].tsx
---
import { Context } from '@apollo/client'
import <%= h.inflection.underscore(name) %> from 'layouts/<%= h.inflection.underscore(name) %>'
import <%= h.inflection.underscore(name) %>Query from 'queries/<%= h.inflection.underscore(name) %>'
import { getStaticPathsWrapper, getStaticPropsWrapper } from 'utils/data_layer/entryQuery'

export default Team

export const getStaticProps = getStaticPropsWrapper(<%= h.inflection.underscore(name) %>Query, (ctx: Context) => {
  return {
    slug: ctx.params.slug,
  }
})

export const getStaticPaths = getStaticPathsWrapper(['<%= h.inflection.underscore(name) %>'])
