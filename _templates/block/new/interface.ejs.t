---
to: components/blocks/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.interface.ts
---

export default interface <%= h.inflection.camelize(name) %>Interface {
    type: string
}
