import Asset from 'interfaces/asset'

export default interface ProductTeaserInterface {
    type: string,
    pt_headline: string,
    pt_background_image: Asset,
    pt_copy: string,
    pt_cta_title: string,
    pt_cta_url: string,
    pt_ferris_wheel_center_icon: Asset,
    pt_ferris_wheel_icons: {
        icon: Asset,
        text: string,
    }[]
}
