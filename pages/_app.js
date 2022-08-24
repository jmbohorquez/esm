import '../styles/globals.scss'

import ContactState from '../context/contact/contactState'
import MenuState from '../context/menu/menuState'
import LocaleState from '../context/locale/localeState'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
    return(
        <LocaleState>
            <MenuState>
                <ContactState>
                    <Layout>
                        <Component { ...pageProps } />
                    </Layout>
                </ContactState>
            </MenuState>
        </LocaleState>
    )
}

export default MyApp
