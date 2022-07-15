export default `
fragment BlockIconsWTextAndBackground on Set_Replicator_BlockIconsWTextAndBackground {
      itb_bgimage {
        ...CMSAsset {
          id
          permalink
        }
      }
      itb_cta_title
      itb_cta_url
      itb_copy
      itb_headline
      type
      itb_icons {
        copy
        icon {
          ...CMSAsset {
            id
            permalink
          }
        }
      }
}
`
