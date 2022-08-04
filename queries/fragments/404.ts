export default `
  notfound: globalSet(handle: "not_found") {
    ... on GlobalSet_NotFound {
      hero_headline
      hero_copy
      cta_background {
        ...CMSAsset
      }
      cta_headline
      cta_copy
      cta_link_text
      cta_link_url
    }
  }
`
