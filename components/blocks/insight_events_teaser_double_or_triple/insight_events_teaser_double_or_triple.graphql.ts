export default `
fragment BlockInsightEventsTeaserDoubleOrTriple on Set_Replicator_BlockInsightEventsTeaserDoubleOrTriple {
  ietd_first_item_is_content
  ietd_copy
  ietd_cta_link
  ietd_cta_text
  ietd_further_infos_link
  ietd_further_infos_text
  ietd_entries {
    ... on Entry_Insights_Insights {
      id
      date
      cover_image {
        ...CMSAsset
      }
      blurb
      uri
      title
      collection {
        handle
      }
    }
    ... on Entry_Blog_Blog {
      id
      date
      cover_image {
        ...CMSAsset
      }
      blurb
      uri
      title
      collection {
        handle
      }
    }
    ... on Entry_Events_Events {
      id
      date
      cover_image {
        ...CMSAsset
      }
      blurb
      uri
      title
      collection {
        handle
      }
    }
  }
  ietd_headline
}
`
