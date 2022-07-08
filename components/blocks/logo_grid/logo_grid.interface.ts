import Asset from 'interfaces/asset'

export default interface LogoGridInterface {
    type: string,
    lg_cta_url: string,
    lg_cta_title: string,
    lg_logos: {
        logo: Asset,
    }[],
}
