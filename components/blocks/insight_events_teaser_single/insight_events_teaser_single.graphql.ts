export default `
fragment BlockInsightEventsTeaserSingle on Set_Replicator_BlockInsightEventsTeaserSingle {
  iets_headline
  iets_cta_title
  iets_cta_url
  iets_entry {
    collection {
      handle
    }
    ... on Entry_Blog_Blog {
      cover_image {
        ...CMSAsset
      }
      uri
      title
      blurb
    }
    ... on Entry_Events_Events {
      cover_image {
        ...CMSAsset
      }
      uri
      title
      blurb
    }
    ... on Entry_Insights_Insights {
      cover_image {
        ...CMSAsset
      }
      uri
      title
      blurb
    }
  }
}
`
