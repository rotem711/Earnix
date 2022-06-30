---
to: utils/rendering/inventory.ts
before: HYGEN_IMPORT
inject: true
---
import { typename as <%= h.inflection.camelize(name) %>BlockTypename } from '../../components/blocks/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>'
import <%= h.inflection.camelize(name) %>BlockQuery from '../../components/blocks/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.graphql'
<%- hasExtraQuery ? `import ${ h.inflection.camelize(name) }BlockExtraQueries from '../../components/blocks/${ h.inflection.underscore(name) }/${ h.inflection.underscore(name) }.extraqueries.graphql'` : '' %>
