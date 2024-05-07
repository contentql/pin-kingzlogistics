'use client'

import { env } from '@env'
import { Global } from '@payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { trpc } from '@/trpc/client'

import { SlugType, blocksJSX } from './index'

interface RenderGlobalsProps {
  slug: string
  layout: Global // layout should be an array of objects conforming to the Page["layout"] type
}

const RenderGlobals: React.FC<RenderGlobalsProps> = ({ layout, slug }) => {
  // get the data using slug
  // use react query to fetch the data
  // the data from layout should act as the default value for react query
  const { data: globalData } = trpc.global.getGlobalData.useQuery(
    { slug },
    { initialData: layout },
  )

  console.log('page data', globalData)

  // Fetch page data for live preview
  const { data: livePreviewData } = useLivePreview<Global>({
    initialData: layout, // Use layout as initial data
    serverURL: env.NEXT_PUBLIC_PUBLIC_URL,
    depth: 2,
  })

  // Determine which data to use based on whether live preview data is available
  const dataToUse = livePreviewData?.layout || globalData?.layout

  return (
    <div>
      {dataToUse?.map((block, index) => {
        const Block = blocksJSX[block.blockType as SlugType]
        if (Block) {
          return <Block key={index} {...block} />
        }
        return <h3 key={slug}>slug does not exist </h3>
      })}
    </div>
  )
}

export default RenderGlobals
