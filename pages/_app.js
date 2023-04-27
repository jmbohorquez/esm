import { Assistant, Merriweather, Readex_Pro } from 'next/font/google' 
import '../styles/globals.scss'

import ContactState from '../context/contact/contactState'
import MenuState from '../context/menu/menuState'
import LocaleState from '../context/locale/localeState'
import Layout from '../components/Layout'

const assistant = Assistant({
    weight: ['300', '400'],
    subsets: ['latin']
})

const merriweather = Merriweather({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
})

const readexPro = Readex_Pro({
    weight: ['300', '400', '500'],
    subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
    return(
        <>
            <style jsx global>{`
                html, body{
                    font-family: ${ readexPro.style.fontFamily }, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }
                .font-family-2{
                    font-family: ${ merriweather.style.fontFamily };
                }
                .font-family-3{
                    font-family: ${ assistant.style.fontFamily };
                }
            `}</style>
            <LocaleState>
                <MenuState>
                    <ContactState>
                        <Layout>
                            <Component { ...pageProps } />
                        </Layout>
                    </ContactState>
                </MenuState>
            </LocaleState>
        </>
    )
}

export default MyApp
