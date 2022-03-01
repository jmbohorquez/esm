import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import contactContext from '../context/contact/contactContext'
import menuContext from '../context/menu/menuContext'

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
    const { pathname } = router
    console.log( pathname )
    
    return(
        <header className="header">
            <figure className="header__logo-container">
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
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
                            <Link href="/servicios">
                                <a onClick={ () => abrirCerrarMenu( false ) }>Servicios</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${ pathname === '/proyectos' ? 'nav-item-current' : '' }`}>
                            <Link href="/proyectos">
                                <a onClick={ () => abrirCerrarMenu( false ) }>Proyectos</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${ pathname === '/contacto' ? 'nav-item-current' : '' }`}>
                            <Link href="/">
                                <a onClick={ () => {
                                    mostrarOcultarContacto( true )
                                    abrirCerrarMenu( false )
                                } }>Contacto</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ul className="social-nav no-list flex flex-flow-row justify-space-between">
                    <li>
                        <Link href="/">
                            <a><Facebook /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a><Linkedin /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a><Instagram /></a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header