import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import contactContext from '../context/contact/contactContext'
import menuContext from '../context/menu/menuContext'

import Labels from '../locals/nav.json'
import LocalSwitcher from './LocalSwitcher'

import Logo from '../public/images/logo.svg'
import Facebook from '../public/images/icon-facebook.svg'
import Linkedin from '../public/images/icon-linkedin.svg'
import Instagram from '../public/images/icon-instagram.svg'

const Header = () => {

    const ContactContext = useContext( contactContext )
    const { mostrarOcultarContacto } = ContactContext

    const MenuContext = useContext( menuContext )
    const { estadoMenu, abrirCerrarMenu } = MenuContext
    
    const router = useRouter()
    const { pathname, locale } = router

    const prevenirDefault = e => {
        e.preventDefault()
    } 
    
    return(
        <header className="header">
            <figure className="header__logo-container">
                <Link href="/">
                    <Logo />
                </Link>
            </figure>
            <div className="header__nav-container flex flex-flow-row justify-space-between">
                <nav className="header__main-nav-container">
                    <div 
                        className={`nav-button ${ estadoMenu ? 'button-open' : '' }`}
                        onClick={ () => abrirCerrarMenu( ! estadoMenu ) }
                    >
                        <span className="nav-button-line line-one"></span>
                        <span className="nav-button-line line-two"></span>
                        <span className="nav-button-line line-three"></span>
                    </div>
                    <ul className={`main-nav no-list flex flex-flow-row justify-space-between ${ estadoMenu ? 'menu-open' : '' }`}>
                        <li className={`nav-item ${ pathname === '/servicios' ? 'nav-item-current' : '' }`}>
                            <Link 
                                href="/servicios"
                                onClick={ () => abrirCerrarMenu( false ) }
                            >
                                { Labels[ locale ].services }
                            </Link>
                        </li>
                        <li className={`nav-item ${ pathname === '/proyectos' ? 'nav-item-current' : '' }`}>
                            <Link 
                                href="/proyectos"
                                onClick={ () => abrirCerrarMenu( false ) }
                            >
                               { Labels[ locale ].projects }
                            </Link>
                        </li>
                        <li className={`nav-item ${ pathname === '/contacto' ? 'nav-item-current' : '' }`}>
                            <Link 
                                href="#"
                                onClick={ e => {
                                    mostrarOcultarContacto( true )
                                    abrirCerrarMenu( false )
                                    prevenirDefault( e )
                                } }
                            >
                                { Labels[ locale ].contact }
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ul className="social-nav no-list flex flex-flow-row justify-space-between">
                    <li>
                        <Link 
                            href="https://www.facebook.com/esmarcas"
                            target="_blank"
                        >
                            <Facebook />
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="https://www.instagram.com/estamosensusmarcas/"
                            target="_blank"
                        >
                            <Linkedin />
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="https://www.linkedin.com/company/esmarcas/"
                            target="_blank"
                        >
                            <Instagram />
                        </Link>
                    </li>
                </ul>
                <LocalSwitcher />
            </div>
        </header>
    )
}

export default Header