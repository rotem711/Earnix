---
to: components/blocks/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.graphql.ts
---
export default `
fragment Block<%= h.inflection.camelize(name) %> on Set_Replicator_Block<%= h.inflection.camelize(name) %> {
    type
}
`
