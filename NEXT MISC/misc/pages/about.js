import Footer from '../components/footer'
import Head from 'next/head';

function About(){
    return (
        <>
        <Head>
            <title>
                About Next JS
            </title>
            <meta name="description" content="free lectures" />
        </Head>
        <h1 className='About-layout'>About</h1>
        </>
    )
    
}

export default About;

About.getLayout = function PageLayout(page){
    return(
        <>
        {page}
        <Footer/>
        </>
    )

}