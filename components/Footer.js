import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import contactContext from '../context/contact/contactContext'
import Contacto from './Contacto'

import Labels from '../locals/footer.json'

import Facebook from '../public/images/f-facebook.svg'
import Instagram from '../public/images/f-instagram.svg'
import Linkedin from '../public/images/f-linkedin.svg'
import Mail from '../public/images/f-mail.svg'

const Footer = () => {
    
    const ContactContext = useContext( contactContext )
    const { contactVisible, mostrarOcultarContacto } = ContactContext

    const router = useRouter()
    const { locale } = router
    
    return(
        <>
            <footer className="footer">
                <div className="footer_column center">
                    <h3>{ Labels[ locale ].title }</h3>
                    <div className="footer__redes-container">
                        <Link 
                            href="https://www.facebook.com/esmarcas"
                            target="_blank"
                        >
                            <Facebook />
                        </Link>
                        <Link 
                            href="https://www.instagram.com/estamosensusmarcas/"
                            target="_blank"
                        >
                           <Instagram />
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/company/esmarcas/"
                            target="_blank"
                        >
                            <Linkedin />
                        </Link>
                        <Link 
                            href="#"
                            onClick={ () => mostrarOcultarContacto( true ) }
                        >
                            <Mail />
                        </Link>
                    </div>
                    <p>©{ new Date().getFullYear() } EnSusMarcas <br />
                    { Labels[ locale ].copy } <br />
                    Bogotá, Colombia</p>
                </div>
            </footer>

            {
                contactVisible &&
                    <Contacto />
            }
        </>
    )
}

export default Footer