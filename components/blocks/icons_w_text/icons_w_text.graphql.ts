export default `
fragment BlockIconsWText on Set_Replicator_BlockIconsWText {
    ict_copy
    ict_cta_title
    ict_cta_url
    ict_headline
    ict_background {
        ... on Asset_Assets {
          permalink
        }
      }
    ict_icons {
            icon {
                    ... on Asset_Assets {
                      permalink
                    }
                  }
            text
            }
    type
}
`
