import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
// import { typename as TextImageTypename } from '../../components/blocks/text_image/text_image'
// import TextImageQuery from '../../components/blocks/text_image/text_image.graphql'
import { typename as HeroBlockTypename } from '../../components/blocks/hero/hero'
import HeroBlockQuery from '../../components/blocks/hero/hero.graphql'
import { typename as QuoteSliderBlockTypename } from '../../components/blocks/quote_slider/quote_slider'
import QuoteSliderBlockQuery from '../../components/blocks/quote_slider/quote_slider.graphql'
import { typename as LogoGridBlockTypename } from '../../components/blocks/logo_grid/logo_grid'
import LogoGridBlockQuery from '../../components/blocks/logo_grid/logo_grid.graphql'
import { typename as ProductTeaserBlockTypename } from '../../components/blocks/product_teaser/product_teaser'
import ProductTeaserBlockQuery from '../../components/blocks/product_teaser/product_teaser.graphql'
import { typename as IconsWTextBlockTypename } from '../../components/blocks/icons_w_text/icons_w_text'
import IconsWTextBlockQuery from '../../components/blocks/icons_w_text/icons_w_text.graphql'
import { typename as InsightEventsTeaserSingleBlockTypename } from '../../components/blocks/insight_events_teaser_single/insight_events_teaser_single'
import InsightEventsTeaserSingleBlockQuery from '../../components/blocks/insight_events_teaser_single/insight_events_teaser_single.graphql'
import { typename as InsightEventsTeaserDoubleOrTripleBlockTypename } from '../../components/blocks/insight_events_teaser_double_or_triple/insight_events_teaser_double_or_triple'
import InsightEventsTeaserDoubleOrTripleBlockQuery from '../../components/blocks/insight_events_teaser_double_or_triple/insight_events_teaser_double_or_triple.graphql'
import { typename as AboutTeaserBlockTypename } from '../../components/blocks/about_teaser/about_teaser'
import AboutTeaserBlockQuery from '../../components/blocks/about_teaser/about_teaser.graphql'
import { typename as CTABannerBlockTypename } from '../../components/blocks/cta_banner/cta_banner'
import CTABannerBlockQuery from '../../components/blocks/cta_banner/cta_banner.graphql'
import { typename as TextImageBlockTypename } from '../../components/blocks/text_image/text_image'
import TextImageBlockQuery from '../../components/blocks/text_image/text_image.graphql'
import { typename as TextIconGridBlockTypename } from '../../components/blocks/text_icon_grid/text_icon_grid'
import TextIconGridBlockQuery from '../../components/blocks/text_icon_grid/text_icon_grid.graphql'
import { typename as ChallengesTeaserBlockTypename } from '../../components/blocks/challenges_teaser/challenges_teaser'
import ChallengesTeaserBlockQuery from '../../components/blocks/challenges_teaser/challenges_teaser.graphql'
import { typename as TextImageDividerBlockTypename } from '../../components/blocks/text_image_divider/text_image_divider'
import TextImageDividerBlockQuery from '../../components/blocks/text_image_divider/text_image_divider.graphql'
import { typename as IconsWTextAndBackgroundBlockTypename } from '../../components/blocks/icons_w_text_and_background/icons_w_text_and_background'
import IconsWTextAndBackgroundBlockQuery from '../../components/blocks/icons_w_text_and_background/icons_w_text_and_background.graphql'
import { typename as TextVideoBlockTypename } from '../../components/blocks/text_video/text_video'
import TextVideoBlockQuery from '../../components/blocks/text_video/text_video.graphql'
import { typename as CtaBoxBlockTypename } from '../../components/blocks/cta_box/cta_box'
import CtaBoxBlockQuery from '../../components/blocks/cta_box/cta_box.graphql'
import { typename as NextGenTeaserBlockTypename } from '../../components/blocks/next_gen_teaser/next_gen_teaser'
import NextGenTeaserBlockQuery from '../../components/blocks/next_gen_teaser/next_gen_teaser.graphql'
import { typename as TeamsBlockTypename } from '../../components/blocks/teams/teams'
import TeamsBlockQuery from '../../components/blocks/teams/teams.graphql'
import { typename as ThreeCardsBlockTypename } from '../../components/blocks/three_cards/three_cards'
import ThreeCardsBlockQuery from '../../components/blocks/three_cards/three_cards.graphql'
import { typename as ConnectWithUsBlockTypename } from '../../components/blocks/connect_with_us/connect_with_us'
import ConnectWithUsBlockQuery from '../../components/blocks/connect_with_us/connect_with_us.graphql'
import { typename as FullbleedTextImageWIconBlockTypename } from '../../components/blocks/fullbleed_text_image_w_icon/fullbleed_text_image_w_icon'
import FullbleedTextImageWIconBlockQuery from '../../components/blocks/fullbleed_text_image_w_icon/fullbleed_text_image_w_icon.graphql'
import { typename as ObjectiveOrChallengeBlockTypename } from '../../components/blocks/objective_or_challenge/objective_or_challenge'
import ObjectiveOrChallengeBlockQuery from '../../components/blocks/objective_or_challenge/objective_or_challenge.graphql'
import { typename as QuoteBlockTypename } from '../../components/blocks/quote/quote'
import QuoteBlockQuery from '../../components/blocks/quote/quote.graphql'
import { typename as ImpactBlockTypename } from '../../components/blocks/impact/impact'
import ImpactBlockQuery from '../../components/blocks/impact/impact.graphql'
import { typename as SolutionBlockTypename } from '../../components/blocks/solution/solution'
import SolutionBlockQuery from '../../components/blocks/solution/solution.graphql'
import { typename as LocationTeaserBlockTypename } from '../../components/blocks/location_teaser/location_teaser'
import LocationTeaserBlockQuery from '../../components/blocks/location_teaser/location_teaser.graphql'
import { typename as CtaSimpleDividerBlockTypename } from '../../components/blocks/cta_simple_divider/cta_simple_divider'
import CtaSimpleDividerBlockQuery from '../../components/blocks/cta_simple_divider/cta_simple_divider.graphql'
import { typename as SimpleLocationGridBlockTypename } from '../../components/blocks/simple_location_grid/simple_location_grid'
import SimpleLocationGridBlockQuery from '../../components/blocks/simple_location_grid/simple_location_grid.graphql'
import { typename as HeroWithAnimatedLinesBlockTypename } from '../../components/blocks/hero_with_animated_lines/hero_with_animated_lines'
import HeroWithAnimatedLinesBlockQuery from '../../components/blocks/hero_with_animated_lines/hero_with_animated_lines.graphql'
import { typename as DepartmentTeaserBlockTypename } from '../../components/blocks/department_teaser/department_teaser'
import DepartmentTeaserBlockQuery from '../../components/blocks/department_teaser/department_teaser.graphql'
import { typename as CopyWithBackgroundDividerBlockTypename } from '../../components/blocks/copy_with_background_divider/copy_with_background_divider'
import CopyWithBackgroundDividerBlockQuery from '../../components/blocks/copy_with_background_divider/copy_with_background_divider.graphql'
import { typename as SimpleHeadlineCopyBlockTypename } from '../../components/blocks/simple_headline_copy/simple_headline_copy'
import SimpleHeadlineCopyBlockQuery from '../../components/blocks/simple_headline_copy/simple_headline_copy.graphql'

import { typename as LinkBoxGridBlockTypename } from '../../components/blocks/link_box_grid/link_box_grid'
import LinkBoxGridBlockQuery from '../../components/blocks/link_box_grid/link_box_grid.graphql'
import { typename as GalleryTextBlockTypename } from '../../components/blocks/gallery_text/gallery_text'
import GalleryTextBlockQuery from '../../components/blocks/gallery_text/gallery_text.graphql'
import { typename as GalleryDividerBlockTypename } from '../../components/blocks/gallery_divider/gallery_divider'
import GalleryDividerBlockQuery from '../../components/blocks/gallery_divider/gallery_divider.graphql'
import { typename as ImageHeroBlockTypename } from '../../components/blocks/image_hero/image_hero'
import ImageHeroBlockQuery from '../../components/blocks/image_hero/image_hero.graphql'
import { typename as CareerHeroBlockTypename } from '../../components/blocks/career_hero/career_hero'
import CareerHeroBlockQuery from '../../components/blocks/career_hero/career_hero.graphql'
import ssrGetJobs from '../../components/blocks/career_hero/ssrGetJobs'

// ##HYGEN_IMPORT##
// do not modify the above line since its used by hygen to generate the block list

interface Block {
  component: FunctionComponent | React.ComponentType<any>,
  query: string,
  extraQueries: string[],
  typename: string,
  layouts: string[],
  ssrFunctions?: any[],
}

const blocks:Block[] = [
  {
    component: dynamic(() => import('../../components/blocks/hero/hero')),
    query: HeroBlockQuery,
    typename: HeroBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/quote_slider/quote_slider')),
    query: QuoteSliderBlockQuery,
    typename: QuoteSliderBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/logo_grid/logo_grid')),
    query: LogoGridBlockQuery,
    typename: LogoGridBlockTypename,
    extraQueries: undefined,
    layouts: ['page', 'spotlight'],
  },
  {
    component: dynamic(() => import('../../components/blocks/product_teaser/product_teaser')),
    query: ProductTeaserBlockQuery,
    typename: ProductTeaserBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/icons_w_text/icons_w_text')),
    query: IconsWTextBlockQuery,
    typename: IconsWTextBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/insight_events_teaser_single/insight_events_teaser_single')),
    query: InsightEventsTeaserSingleBlockQuery,
    typename: InsightEventsTeaserSingleBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/insight_events_teaser_double_or_triple/insight_events_teaser_double_or_triple')),
    query: InsightEventsTeaserDoubleOrTripleBlockQuery,
    typename: InsightEventsTeaserDoubleOrTripleBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/about_teaser/about_teaser')),
    query: AboutTeaserBlockQuery,
    typename: AboutTeaserBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },
  {
    component: dynamic(() => import('../../components/blocks/cta_banner/cta_banner')),
    query: CTABannerBlockQuery,
    typename: CTABannerBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/text_image/text_image')),
    query: TextImageBlockQuery,
    typename: TextImageBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/text_icon_grid/text_icon_grid')),
    query: TextIconGridBlockQuery,
    typename: TextIconGridBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/challenges_teaser/challenges_teaser')),
    query: ChallengesTeaserBlockQuery,
    typename: ChallengesTeaserBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/text_image_divider/text_image_divider')),
    query: TextImageDividerBlockQuery,
    typename: TextImageDividerBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/icons_w_text_and_background/icons_w_text_and_background')),
    query: IconsWTextAndBackgroundBlockQuery,
    typename: IconsWTextAndBackgroundBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/text_video/text_video')),
    query: TextVideoBlockQuery,
    typename: TextVideoBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/cta_box/cta_box')),
    query: CtaBoxBlockQuery,
    typename: CtaBoxBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/next_gen_teaser/next_gen_teaser')),
    query: NextGenTeaserBlockQuery,
    typename: NextGenTeaserBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/teams/teams')),
    query: TeamsBlockQuery,
    typename: TeamsBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },
  {
    component: dynamic(() => import('../../components/blocks/three_cards/three_cards')),
    query: ThreeCardsBlockQuery,
    typename: ThreeCardsBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/connect_with_us/connect_with_us')),
    query: ConnectWithUsBlockQuery,
    typename: ConnectWithUsBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/fullbleed_text_image_w_icon/fullbleed_text_image_w_icon')),
    query: FullbleedTextImageWIconBlockQuery,
    typename: FullbleedTextImageWIconBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },
  {
    component: dynamic(() => import('../../components/blocks/objective_or_challenge/objective_or_challenge')),
    query: ObjectiveOrChallengeBlockQuery,
    typename: ObjectiveOrChallengeBlockTypename,
    extraQueries: undefined,
    layouts: ['spotlight'],
  },

  {
    component: dynamic(() => import('../../components/blocks/quote/quote')),
    query: QuoteBlockQuery,
    typename: QuoteBlockTypename,
    extraQueries: undefined,
    layouts: ['spotlight'],
  },

  {
    component: dynamic(() => import('../../components/blocks/impact/impact')),
    query: ImpactBlockQuery,
    typename: ImpactBlockTypename,
    extraQueries: undefined,
    layouts: ['spotlight'],
  },
  {
    component: dynamic(() => import('../../components/blocks/solution/solution')),
    query: SolutionBlockQuery,
    typename: SolutionBlockTypename,
    extraQueries: undefined,
    layouts: ['spotlight'],
  },
  {
    component: dynamic(() => import('../../components/blocks/location_teaser/location_teaser')),
    query: LocationTeaserBlockQuery,
    typename: LocationTeaserBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },
  {
    component: dynamic(() => import('../../components/blocks/cta_simple_divider/cta_simple_divider')),
    query: CtaSimpleDividerBlockQuery,
    typename: CtaSimpleDividerBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },
  {
    component: dynamic(() => import('../../components/blocks/simple_location_grid/simple_location_grid')),
    query: SimpleLocationGridBlockQuery,
    typename: SimpleLocationGridBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },
  {
    component: dynamic(() => import('../../components/blocks/hero_with_animated_lines/hero_with_animated_lines')),
    query: HeroWithAnimatedLinesBlockQuery,
    typename: HeroWithAnimatedLinesBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },
  {
    component: dynamic(() => import('../../components/blocks/department_teaser/department_teaser')),
    query: DepartmentTeaserBlockQuery,
    typename: DepartmentTeaserBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },
  {
    component: dynamic(() => import('../../components/blocks/copy_with_background_divider/copy_with_background_divider')),
    query: CopyWithBackgroundDividerBlockQuery,
    typename: CopyWithBackgroundDividerBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },
  {
    component: dynamic(() => import('../../components/blocks/simple_headline_copy/simple_headline_copy')),
    query: SimpleHeadlineCopyBlockQuery,
    typename: SimpleHeadlineCopyBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/link_box_grid/link_box_grid')),
    query: LinkBoxGridBlockQuery,
    typename: LinkBoxGridBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/gallery_text/gallery_text')),
    query: GalleryTextBlockQuery,
    typename: GalleryTextBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/gallery_divider/gallery_divider')),
    query: GalleryDividerBlockQuery,
    typename: GalleryDividerBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/image_hero/image_hero')),
    query: ImageHeroBlockQuery,
    typename: ImageHeroBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
  },

  {
    component: dynamic(() => import('../../components/blocks/career_hero/career_hero')),
    query: CareerHeroBlockQuery,
    typename: CareerHeroBlockTypename,
    extraQueries: undefined,
    layouts: ['page'],
    ssrFunctions: [ssrGetJobs],
  },

  // ##HYGEN_START##
  // do not modify the above line since its used by hygen to generate the block list
]

export default blocks
