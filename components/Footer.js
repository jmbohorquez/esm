import { useContext } from 'react'
import Link from 'next/link'

import contactContext from '../context/contact/contactContext'
import Contacto from './Contacto'

import Facebook from '../public/images/f-facebook.svg'
import Instagram from '../public/images/f-instagram.svg'
import Linkedin from '../public/images/f-linkedin.svg'
import Mail from '../public/images/f-mail.svg'

const Footer = () => {
    
    const ContactContext = useContext( contactContext )
    const { contactVisible, mostrarOcultarContacto } = ContactContext
    
    return(
        <>
            <footer className="footer">
                <div className="footer_column center">
                    <h3>Contáctanos</h3>
                    <div className="footer__redes-container">
                        <Link href="https://www.facebook.com/esmarcas">
                            <a target="_blank"><Facebook /></a>
                        </Link>
                        <Link href="https://www.instagram.com/estamosensusmarcas/">
                            <a target="_blank"><Instagram /></a>
                        </Link>
                        <Link href="https://www.linkedin.com/company/esmarcas/">
                            <a target="_blank"><Linkedin /></a>
                        </Link>
                        <Link href="#">
                            <a onClick={ () => mostrarOcultarContacto( true ) }><Mail /></a>
                        </Link>
                    </div>
                    <p>©{ new Date().getFullYear() } EnSusMarcas <br />
                    Agencia Digital y Creativa / Desarrollo de Marcas <br />
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