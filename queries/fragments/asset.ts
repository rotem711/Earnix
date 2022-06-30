export default `
  fragment CMSAsset on Asset_Assets {
    id
    placeholder
    url
    alt
    permalink
    extension
    width
    height
    isImage: is_image
    focusCss: focus_css
  }
`
