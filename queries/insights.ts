import HeaderQuery from 'components/generic/header/header.extraqueries.graphql'
import FooterQuery from 'components/generic/footer/footer.extraqueries.graphql'
import AssetFragment from './fragments/asset'
import nav from './fragments/nav'

export default `
  ${AssetFragment}
  query insights($slug: String) {
    ${HeaderQuery},
    ${FooterQuery},
    entry(collection: "insights", slug: $slug) {
      id
      title
      slug
      date
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
      ... on Entry_Insights_Insights {
        id
        # author_about
        # author_image {
        #   ...CMSAsset
        # }
        # author_name
        # author_title
        # linkedin_profile
        blurb
        cover_image {
          ...CMSAsset
        }
        blog_topic {
          title
          id
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

const articleDetailFragment = `
  fragment ArticleDetail on Entry_Insights_Insights {
    id
    uri
    slug
    title
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
    # author_name
    date
    blurb
  }
`

export const insightsOverviewQuery = `
${AssetFragment}
${articleDetailFragment}
query page {
  ${HeaderQuery}
  ${FooterQuery}
  ${nav}
  entry(filter: { blueprint: "page_insights" }, collection: "pages") {
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
    ... on Entry_Pages_PageInsights {
      id
      main_featured_item {
        ...ArticleDetail
      }
      hero_centered
      hero_copy
      hero_copy_background
      hero_headline
      hero_large_version
      hero_orange_gradient
      hero_vimeo_id
      hero_vimeo_id_responsive
      hero_blue_gradient
      hero_narrow
      hero_background_image {
        ...CMSAsset
      }
      hero_background_image_responsive {
        ...CMSAsset
      }
      hero_background_type {
        label
        value
      }
    }
  }
  articles: entries(collection: "insights", limit: 5) {
    data {
      ...ArticleDetail
    }
    total
  }
  featured: entries(collection: "insights", filter: { featured: true }, limit: 3) {
    data {
      ...ArticleDetail
    }
    total
  }
  industries: terms(taxonomy: "blog_industry") {
    data {
      id
      title
      slug
    }
  }
  topics: terms(taxonomy: "blog_topic") {
    data {
      id
      title
      slug
    }
  }
}
`
export const lazyArticlesQuery = `
  ${AssetFragment}
  ${articleDetailFragment}
  query Articles($limit: Int, $filter: JsonArgument) {
    articles: entries(collection: "blog", limit: $limit, filter: $filter) {
      data {
        ...ArticleDetail
      }
      total
    }
  }
`
