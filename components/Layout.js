import Head from 'next/head'

import Footer from './Footer'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <link rel="alternate icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon180X180.png" />
                <meta property="og:site_name" content="En Sus Marcas" />
                <meta property="og:title" content="En Sus Marcas" />
                <meta property="og:description" content="Agencia de estrategia y soluciones en marca, marketing y despliegue digital" />
                <meta property="og:image" content="/ojo-wap.png" />
                <meta property="og:type" content="website" />       
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
                <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400&family=Merriweather:wght@400;700&family=Readex+Pro:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>

            { children }

            <Footer />
        </>
    )
}

export default Layout