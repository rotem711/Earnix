import HeaderQuery from 'components/generic/header/header.extraqueries.graphql'
import FooterQuery from 'components/generic/footer/footer.extraqueries.graphql'
import AssetFragment from './fragments/asset'
import nav from './fragments/nav'

export default `
  ${AssetFragment}
  query brochures($slug: String) {
    ${HeaderQuery},
    ${FooterQuery},
    entry(collection: "brochures", slug: $slug) {
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
      ... on Entry_Brochures_Brochures {
        id
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
        related_articles {
          id
          title
          uri
          date
          collection {
            handle
          }
          ... on Entry_Blog_Blog {
            cover_image {
              ...CMSAsset
            }
            blurb
          }
          ... on Entry_Events_Events {
            cover_image {
              ...CMSAsset
            }
            blurb
          }
          ... on Entry_Insights_Insights {
            cover_image {
              ...CMSAsset
            }
            blurb
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

const brochuresDetailFragment = `
  fragment BrochuresDetail on Entry_Brochures_Brochures {
    id
    uri
    slug
    brochure_topic {
      title
      id
    }
    brochure_industry {
      id
      title
    }
    cover_image {
      ...CMSAsset
    }
    date
    blurb
  }
`

export const brochuresOverviewQuery = `
${AssetFragment}
${brochuresDetailFragment}
query page {
  ${HeaderQuery}
  ${FooterQuery}
  ${nav}
  entry(filter: { blueprint: "page_brochures" }, collection: "pages") {
    id
    title
    slug
    uri
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
    ... on Entry_Pages_PageBrochures {
      id
      main_featured_item {
        ...BrochuresDetail
      }
    }
  }
  brochures: entries(collection: "brochures") {
    data {
      ...BrochuresDetail
    }
  }
}
`
