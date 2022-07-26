import HeaderQuery from 'components/generic/header/header.extraqueries.graphql'
import FooterQuery from 'components/generic/footer/footer.extraqueries.graphql'
import AssetFragment from './fragments/asset'
import nav from './fragments/nav'

export default `
  ${AssetFragment}
  query blog($slug: String) {
    ${HeaderQuery},
    ${FooterQuery},
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
        linkedin_profile
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

const articleDetailFragment = `
  fragment ArticleDetail on Entry_Blog_Blog {
    id
    uri
    slug
    blog_topic {
      title
      id
    }
    blog_industry {
      id
      title
    }
    cover_image {
      ...CMSAsset
    }
    author_name
    date
    blurb
  }
`

export const blogOverviewQuery = `
${AssetFragment}
${articleDetailFragment}
query page {
  ${FooterQuery}
  ${nav}
  entry(slug: "blog", collection: "pages") {
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
    ... on Entry_Pages_PageBlog {
      id
      main_featured_item {
        ...ArticleDetail
      }
    }
  }
  articles: entries(collection: "blog") {
    data {
      ...ArticleDetail
    }
  }
}
`
