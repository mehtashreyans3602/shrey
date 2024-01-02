import Footer from '@/components/Footer/Footer'
// import Header from '@/components/Header/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-b from-black via-blue-950 to-black'>
        {/* <Header /> */}
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
