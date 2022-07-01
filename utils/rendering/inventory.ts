import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import { typename as TextImageTypename } from '../../components/blocks/text_image/text_image'
import TextImageQuery from '../../components/blocks/text_image/text_image.graphql'

import { typename as HeroBlockTypename } from '../../components/blocks/hero/hero'
import HeroBlockQuery from '../../components/blocks/hero/hero.graphql'

import { typename as QuoteSliderBlockTypename } from '../../components/blocks/quote_slider/quote_slider'
import QuoteSliderBlockQuery from '../../components/blocks/quote_slider/quote_slider.graphql'


import { typename as LogoGridBlockTypename } from '../../components/blocks/logo_grid/logo_grid'
import LogoGridBlockQuery from '../../components/blocks/logo_grid/logo_grid.graphql'


// ##HYGEN_IMPORT##
// do not modify the above line since its used by hygen to generate the block list

interface Block {
  component: FunctionComponent | React.ComponentType<any>,
  query: string,
  extraQueries: string[],
  typename: string
}

const blocks:Block[] = [
  {
    component: dynamic(() => import('../../components/blocks/text_image/text_image')),
    query: TextImageQuery,
    typename: TextImageTypename,
    extraQueries: undefined,
  },
  {
    component: dynamic(() => import('../../components/blocks/hero/hero')),
    query: HeroBlockQuery,
    typename: HeroBlockTypename,
    extraQueries: undefined,
  },

  {
    component: dynamic(() => import('../../components/blocks/quote_slider/quote_slider')),
    query: QuoteSliderBlockQuery,
    typename: QuoteSliderBlockTypename,
    extraQueries: undefined,
  },

  {
    component: dynamic(() => import('../../components/blocks/logo_grid/logo_grid')),
    query: LogoGridBlockQuery,
    typename: LogoGridBlockTypename,
    extraQueries: undefined,
  },

  // ##HYGEN_START##
  // do not modify the above line since its used by hygen to generate the block list
]

export default blocks
