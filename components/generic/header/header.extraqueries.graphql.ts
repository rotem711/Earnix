export default `
  header: globalSet(handle: "header") {
    ... on GlobalSet_Header {
      links {
        ... on Set_Links_SimpleLink {
          type
          link
          text
        }
        ... on Set_Links_Overlay {
          type
          nav_title
          columns {
            ... on Set_Links_Columns_LinkList {
              title
              links {
                link_url
                link_text
                child_links {
                  link_url
                  link_text
                }
              }
            }
            ... on Set_Links_Columns_FeaturedInsight {
              insight {
                permalink
                title
              }
            }
          }
        }
      }
      logo_dark {
        ...CMSAsset
      }
      logo_light {
        ...CMSAsset
      }
    }
  }
`
