import { SlugType } from '@/blocks'
import FunfactArea from '@/blocks/FunfactArea'
import PortfolioArea from '@/blocks/PortfolioArea'
import RenderBlocks from '@/blocks/RenderBlocks'
import TeamSection from '@/blocks/TeamSection'
import { serverClient } from '@/trpc/serverClient'

const Page = async ({ params }: { params: { route: SlugType[] } }) => {
  const slug = params.route?.at(0) || 'index'

  const pageData = await serverClient.page.getPageData({ slug })

  return (
    <div>
      <RenderBlocks layout={pageData} slug={slug} />
      <FunfactArea />
      <TeamSection />
      <PortfolioArea />
      {/* <AboutUsTwo /> */}
      {/* <ServicesAreaTwo />
      <BrandArea /> */}
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
