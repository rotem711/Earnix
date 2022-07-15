import Asset from 'interfaces/asset'

export default interface FooterInterface {
    legal_links: {
        link_url: string,
        text: string,
    }[],
    links: {
        cta_title: string,
        cta_url: string,
    }[],
    logo: Asset,
    social_links: {
        url: string,
        logo: Asset,
    }[],
}
