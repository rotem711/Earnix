---
to: utils/rendering/inventory.ts
before: HYGEN_START
inject: true
---
  {
    component: dynamic(() => import('../../components/blocks/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>')),
    query: <%= h.inflection.camelize(name) %>BlockQuery,
    typename: <%= h.inflection.camelize(name) %>BlockTypename,
    extraQueries: <%= hasExtraQuery ? `${ h.inflection.camelize(name) }BlockExtraQueries` : `undefined` %>,
  },
