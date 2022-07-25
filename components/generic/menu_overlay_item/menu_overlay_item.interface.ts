import Asset from 'interfaces/asset'

export default interface MenuOverlayItemInterface {
  links: {
    nav_title: string,
    columns: [{
      title: string,
      type: string,
      links: [{
        link_url: string,
        link_text: string,
        child_links: [{
          link_url: string,
          link_text: string,
        }],
      }],
      insight: {
        cover_image: Asset,
        uri: string,
        title: string,
      },
    }],
  },
}
