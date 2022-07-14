export default interface MenuOverlayItemInterface {
  isMobileLayout: boolean,
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
    }],
  },
}
