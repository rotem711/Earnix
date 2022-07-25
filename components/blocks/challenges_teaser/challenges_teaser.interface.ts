export default interface ChallengesTeaserInterface {
    type: string
    ct_cta_title: string
    ct_cta_url: string
    ct_headline: string
    ct_items: Array<{
      copy: string
    }>
}
