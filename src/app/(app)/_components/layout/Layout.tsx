'use clinet'

// import Test1_1 from '@/blocks/Test1_1'
import Navbar_3 from '@/blocks/Navbar_3'

export default function GlobalLayout({ children, header, footer }: any) {
  console.log('header', header)
  return (
    <>
      <Navbar_3 {...header} />
      {children}
      {/* <Footer_3 {...footer} /> */}
    </>
  )
}
