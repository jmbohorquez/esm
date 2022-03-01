import '../styles/globals.scss'

import ContactState from '../context/contact/contactState'
import MenuState from '../context/menu/menuState'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
    return(
        <MenuState>
            <ContactState>
                <Layout>
                    <Component { ...pageProps } />
                </Layout>
            </ContactState>
        </MenuState>
    )
}

export default MyApp
