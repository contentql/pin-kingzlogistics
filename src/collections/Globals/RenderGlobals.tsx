'use client'

import { trpc } from '@/trpc/client'

import { SlugType, blocksJSX } from './index'

const RenderHeader = () => {
  const { data: globalData } = trpc.global.getGlobalData.useQuery({
    slug: 'header',
  })

  return (
    <div>
      {globalData?.layout?.map((block, index) => {
        const Block = blocksJSX[block.blockType as SlugType]
        if (Block) {
          return <Block key={index} {...block} />
        }
        return <h3 key={index}>slug does not exist </h3>
      })}
    </div>
  )
}

const RenderFooter = () => {
  const { data: globalData } = trpc.global.getGlobalData.useQuery({
    slug: 'footer',
  })

  return (
    <div>
      {globalData?.layout?.map((block, index) => {
        const Block = blocksJSX[block.blockType as SlugType]
        if (Block) {
          return <Block key={index} {...block} />
        }
        return <h3 key={index}>slug does not exist </h3>
      })}
    </div>
  )
}

const RenderGlobals = ({ children }: any) => {
  return (
    <div>
      <RenderHeader />
      {children}
      <RenderFooter />
    </div>
  )
}

export default RenderGlobals
