import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import contactContext from '../context/contact/contactContext'

import Facebook from '../public/images/f-facebook.svg'
import Instagram from '../public/images/f-instagram.svg'
import LinkedIn from '../public/images/f-linkedin.svg'
import Logo from '../public/images/logo.svg'
import IconCall from '../public/images/icon-llamar.svg'
import IconWhatsapp from '../public/images/icon-whatsapp.svg'


const Contacto = () => {
    
    const ContactContext = useContext( contactContext )
    const { mostrarOcultarContacto } = ContactContext
    
    return(
        <div className="contacto__container">
            <div className="contacto__close-btn">
                <button 
                    className="btn btn-blanco"
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel nibh lobortis, ullamcorper sapien sit amet, elementum erat. </p>
                    <div className="contacto__mauricio">
                        <figure className="mauricio-foto">
                            <div className="mauricio-foto-inner">
                                <Image 
                                    alt="Mauricio Ortis, Director comercial"
                                    src="/images/mauricio-ortis.png"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </figure>
                        <div className="descrip">
                            <h3>Mauricio Ortiz</h3>
                            <p>Director Comercial</p>
                            <div className="descrip-boton-container">
                                <Link href="#">
                                    <a className="btn btn-icon btn-red"><span><IconCall /></span> Llamar</a>
                                </Link>
                                <Link href="#">
                                    <a className="btn btn-icon btn-red"><span><IconWhatsapp /></span> Escribir</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="contacto__redes">
                        <Link href="#">
                            <a><Facebook /></a>
                        </Link>
                        <Link href="#">
                            <a><Instagram /></a>
                        </Link>
                        <Link href="#">
                            <a><LinkedIn /></a>
                        </Link>
                    </div>
                </div>
                <div className="contacto__col-form">
                    <iframe  
                        height="691"
                        scrolling="no" 
                        frameBorder="0"  
                        src="http://arteobjeto.co/machform/embed.php?id=20376" 
                        title="En sus Marcas"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacto