import Head from 'next/head'

import Footer from './Footer'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
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