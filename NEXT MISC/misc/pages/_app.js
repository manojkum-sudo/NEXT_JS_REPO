import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }



  return (
    <>
    <Head>
            <title>
                About Next JS
            </title>
            <meta name="description" content="free lectures" />
        </Head>
    <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
  
}

export default MyApp
