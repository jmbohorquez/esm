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
                    <p>Contáctanos mandando un mensaje a nuestro correo electrónico a través del formulario que encuentras a continuación o a través de whatsapp hablando directamente con nuestro director comercial.</p>
                    <div className="contacto__mauricio">
                        <figure className="mauricio-foto">
                            <div className="mauricio-foto-inner">
                                <Image 
                                    alt="Mauricio Ortiz, Director comercial"
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
                                <Link href="tel:+573007918979">
                                    <a className="btn btn-icon btn-red contacto-llamar"><span><IconCall /></span> Llamar</a>
                                </Link>
                                <Link href="https://api.whatsapp.com/send?phone=+573007918979&text=Hola,%20busco%20información%20sobre%20En%20Sus%20Marcas">
                                    <a className="btn btn-icon btn-red contacto-escribir" target="_blank"><span><IconWhatsapp /></span> Escribir</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="contacto__redes">
                        <Link href="https://www.facebook.com/esmarcas">
                            <a target="_blank"><Facebook /></a>
                        </Link>
                        <Link href="https://www.instagram.com/estamosensusmarcas/">
                            <a target="_blank"><Instagram /></a>
                        </Link>
                        <Link href="https://www.linkedin.com/company/esmarcas/">
                            <a target="_blank"><LinkedIn /></a>
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