import HeaderQuery from 'components/generic/header/header.extraqueries.graphql'
import FooterQuery from 'components/generic/footer/footer.extraqueries.graphql'
import AssetFragment from './fragments/asset'
import nav from './fragments/nav'

export default `
  ${AssetFragment}
  query newsroom($slug: String) {
    ${HeaderQuery},
    ${FooterQuery},
    entry(collection: "newsroom", slug: $slug) {
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
      ... on Entry_Newsroom_Newsroom {
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

const newsroomDetailFragment = `
  fragment NewsRoomDetail on Entry_Newsroom_Newsroom {
    id
    uri
    slug
    cover_image {
      ...CMSAsset
    }
    author_name
    date
    blurb
    newsroom_types {
      id
      slug
    }
  }
`

export const overviewQuery = `
${AssetFragment}
${newsroomDetailFragment}
query page {
  ${HeaderQuery}
  ${FooterQuery}
  ${nav}
  entry(collection: "pages", filter: {blueprint: "page_newsroom"}) {
    id
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
    ... on Entry_Pages_PageNewsroom {
      id
      csd_cta_url
      csd_headline
      csd_link_text
      cta_banner
      hero_background
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
      hero_centered
      hero_blue_gradient
      hero_copy
      hero_copy_background
      hero_headline
      hero_large_version
      hero_orange_gradient
      hero_vimeo_id
      hero_vimeo_id_responsive
      image_text
      tv_copy
      tv_headline
      tv_statistics {
        stat_label
        stat_value
      }
      tv_vimeo_id
    }
  }
  inTheNews: entries(collection: "newsroom", filter: {newsroom_types: {contains: "in-the-news"}}, limit: 3) {
    data {
      ...NewsRoomDetail
    }
  }
  industryRecognition: entries(collection: "newsroom", filter: {newsroom_types: {contains: "industry-recognition"}}, limit: 3) {
    data {
      ...NewsRoomDetail
    }
  }
  pressReleases: entries(collection: "newsroom", filter: {newsroom_types: {contains: "press-releases"}}, limit: 3) {
    data {
      ...NewsRoomDetail
    }
  }
  socialFeed: entries(collection: "newsroom", filter: {newsroom_types: {contains: "social-feed"}}, limit: 3) {
    data {
      ...NewsRoomDetail
    }
  }
}
`
// ${articleDetailFragment}
export const topicOverviewQuery = `
${AssetFragment}
query newsRoomTopic($slug: String) {
  ${HeaderQuery}
  ${FooterQuery}
  ${nav}
  entry(slug: "newsroom", collection: "pages") {
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
  }
  taxonomy: terms(filter: { slug: $slug }, taxonomy: "newsroom_types") {
    data {
      slug
      title
    }
  }
  articles: entries(collection: "newsroom", filter: { newsroom_types: { contains: $slug }} ) {
    data {
      ... on Entry_Newsroom_Newsroom {
        id
        permalink
        newsroom_types {
          title
          slug
        }
      }
    }
  }
}
`
