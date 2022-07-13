import Asset from 'interfaces/asset'

export default interface HeroInterface {
    type: string,
    hero_centered: boolean,
    hero_copy: string,
    hero_copy_background: boolean,
    hero_headline: string,
    hero_large_version: boolean,
    hero_orange_gradient: boolean,
    hero_vimeo_id: string,
    hero_vimeo_id_responsive: string,
    hero_blue_gradient: boolean,
    hero_background_image: Asset,
    hero_background_image_responsive: Asset,
    hero_background_type: {
        label: string,
        value: string
    },
}
