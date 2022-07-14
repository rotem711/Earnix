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
              type
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
              type
              insight {
                ... on Entry_Insights_Insights {
                  cover_image {
                    ...CMSAsset
                  }
                  uri
                  title
                }
                ... on Entry_Events_Events {
                  cover_image {
                    ...CMSAsset
                  }
                  uri
                  title
                }
                ... on Entry_Blog_Blog {
                  cover_image {
                    ...CMSAsset
                  }
                  uri
                  title
                }
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
