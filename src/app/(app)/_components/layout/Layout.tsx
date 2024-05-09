import { Footer } from './Footer'
import { Header } from './Header'

export default function GlobalLayout({ children, header, footer }: any) {
  return (
    <>
      <Header headerData={header} />
      {children}
      <Footer footerData={footer} />
    </>
  )
}
