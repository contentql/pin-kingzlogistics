import { Page as PageType } from '@payload-types'

import { SlugType } from '@/blocks'
import RenderBlocks from '@/blocks/RenderBlocks'
import RenderGlobals from '@/collections/Globals/RenderGlobals'
import { serverClient } from '@/trpc/serverClient'

const Page = async ({ params }: { params: { route: SlugType[] } }) => {
  const slug = params.route?.at(0) || 'index'

  const pageData = await serverClient.page.getPageData({ slug })
  const globalData = await serverClient.global.getGlobalData({ slug })

  return (
    <div>
      <RenderGlobals>
        <RenderBlocks layout={pageData as PageType} slug={slug} />
      </RenderGlobals>
    </div>
  )
}

export const generateStaticParams = async () => {
  const pageData = await serverClient.page.getAllPages()

  const arrayOfPageSlugs = pageData?.map(page => {
    return page.slug
  })

  return arrayOfPageSlugs
}

export default Page
