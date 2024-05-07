// import RenderGlobals from '@/collections/Globals/RenderGlobals'
// import { serverClient } from '@/trpc/serverClient'

export default async function Layout({ children }: any) {
  // const globalData = await serverClient.global.getGlobalData({ slug })
  return (
    <div>
      {/* <RenderGlobals /> */}
      {children}
    </div>
  )
}
