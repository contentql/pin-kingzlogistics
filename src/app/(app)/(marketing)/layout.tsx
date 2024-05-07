import GlobalLayout from '../_components/layout/Layout'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const payload = await getPayload({
    config: configPromise,
  })
  const headerData = await payload.findGlobal({ slug: 'Navbar_3' })
  const footerData = await payload.findGlobal({ slug: 'Footer_3' })

  return (
    <>
      <GlobalLayout header={headerData} footer={footerData}>
        {children}
      </GlobalLayout>
    </>
  )
}
