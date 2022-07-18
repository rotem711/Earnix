import AssetFragment from './fragments/asset'

export default `
  ${AssetFragment}
  query blog($slug: String) {
    entry(collection: "blog", slug: $slug) {
      id
      title
      slug
      seo {
        description
        og_description
        og_locale
        og_site_name
        og_type
        og_title
        og_url
        rel_author
        rel_canonical
        rel_home
        rel_next_
        rel_prev
        title
        twitter_card
        twitter_description
        twitter_site
        twitter_title
      }
      ... on Entry_Blog_Blog {
        id
        author_about
        author_image {
          ...CMSAsset
        }
        author_name
        author_title
        blurb
        cover_image {
          ...CMSAsset
        }
        content {
          ... on Set_Content_Image {
            caption
            image {
              ...CMSAsset
            }
            type
          }
          ... on BardText {
            text
            type
          }
          ... on Set_Content_CtaDivider {
            __typename
            copy
            cta_title
            cta_url
            type
          }
          ... on Set_Content_Quote {
            __typename
            quote
            type
          }
        }
      }
    }
    nav(handle: "main_nav") {
      tree {
        page {
          id
          url
          title
        }
        depth
        children {
          depth
          page {
            id
            url
            title
          }
        }
      }
    }
  }
`
