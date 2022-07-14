import Asset from 'interfaces/asset'
import NavInterface from '../nav/nav.interface'

export default interface HeaderInterface {
  nav: NavInterface,
  darkMode: Boolean,
  logo_dark: Asset,
  logo_light: Asset,
  links: [{
    type: string,
    link: string,
    text: string,
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
      insight: [{
        cover_image: Asset,
        title: string,
        uri: string,
      }],
    }],
  }],
}
