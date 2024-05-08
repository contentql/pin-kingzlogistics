import configPromise from '@payload-config'
import { getPayload } from 'payload'
import GlobalLayout from '../_components/layout/Layout'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const payload = await getPayload({
    config: configPromise,
  })
  const headerData = await payload.findGlobal({ slug: 'Navbar' })
  const footerData = await payload.findGlobal({ slug: 'Footer' })

  console.log("headerData", headerData)

  return (
    <>
      <GlobalLayout header={headerData} footer={footerData}>
        {children}
      </GlobalLayout>
    </>
  )
}
