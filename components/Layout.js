import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
