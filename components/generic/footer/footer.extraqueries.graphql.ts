const FooterQuery = [
  `footer: globalSet(handle: "footer") {
    ... on GlobalSet_Footer {
      legal_links {
        link_url
        text
      }
      links {
        cta_title
        cta_url
      }
      logo {
        ...CMSAsset
      }
      social_links {
        url
        logo {
          ...CMSAsset
        }
      }
    }
  }
`,
]

export default FooterQuery
