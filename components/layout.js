import Navbar from "./navbar";
import Footer from "./footer";
import ScrollTop from "./scrollTop";

export default function Layout({ children, home }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ScrollTop />
      <Footer />
    </>
  );
}
