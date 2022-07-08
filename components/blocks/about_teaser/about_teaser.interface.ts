import Asset from 'interfaces/asset';

export default interface AboutTeaserInterface {
    type: string,
    at_copy: string,
    at_cta_title: string,
    at_cta_url: string,
    at_headline: string,
    at_image: Asset
}
