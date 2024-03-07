import Navbar from './navbar'
import Footer from './footer'
 
export default function Layout({ children, home }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}