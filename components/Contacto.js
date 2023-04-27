import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import contactContext from '../context/contact/contactContext'

import Facebook from '../public/images/f-facebook.svg'
import Instagram from '../public/images/f-instagram.svg'
import LinkedIn from '../public/images/f-linkedin.svg'
import Logo from '../public/images/logo.svg'
import IconCall from '../public/images/icon-llamar.svg'
import IconWhatsapp from '../public/images/icon-whatsapp.svg'

import Data from '../locals/contact.json'

const Contacto = () => {

    const router = useRouter()
    const currentLocale = router.locale
    
    const ContactContext = useContext( contactContext )
    const { mostrarOcultarContacto } = ContactContext
    
    return(
        <div className="contacto__container">
            <div className="contacto__close-btn">
                <button 
                    className="btn btn-red btn-cerrar"
                    onClick = { () => mostrarOcultarContacto( false ) }
                >
                    X
                </button>
            </div>
            <div className="contacto__container-inner">
                <div className="contacto__col-contact">
                    <figure className="contacto__logo">
                        <Logo />
                    </figure>
                    <p>{ Data[currentLocale].copyText }</p>
                    <div className="contacto__redes">
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
                            <LinkedIn />
                        </Link>
                    </div>
                </div>
                <div className="contacto__col-form">
                    <iframe  
                        height="691"
                        scrolling="no" 
                        frameBorder="0"  
                        src="https://arteobjeto.co/machform/embed.php?id=20376" 
                        title="En sus Marcas"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacto