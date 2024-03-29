import { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header'
import ServicioItem from '../components/ServicioItem'

import Locals from '../locals/services.json'

import Branding from '../public/images/icon-branding-3d.svg'
import Tecnologia from '../public/images/icon-tech-3d.svg'
import Marketing from '../public/images/icon-mktng-3d.svg'
import Logo from '../public/images/logo-b.svg'
import OjoBranding from '../public/images/ojo-branding.svg'
import OjoDev from '../public/images/ojo-dev.svg'
import OjoMkt from '../public/images/ojo-mkt.svg'

const serviciosList = {
    es: [        
        {
            id: 1,
            title: 'branding',
            icon: <Branding />,
            content: 'Creación, conceptualización y desarrollo visual de identidad corporativa, para darle personalidad a tu marca.',
            btnCta: 'Saber más',
            link: '/servicios/#Branding'
        },
        {
            id: 2,
            title: 'tech',
            icon: <Tecnologia />,
            content: 'Desarrollar soluciones tecnológicas a la medida, para tener una visibilidad real del negocio en internet.',
            btnCta: 'Saber más',
            link: '/servicios/#Tecnologia'
        },
        {
            id: 3,
            title: 'marketing',
            icon: <Marketing />,
            content: 'Estrategias de comunicación digital para lograr el adecuado posicionamiento de la marca en su segmento y mercado objetivo.',
            btnCta: 'Saber más',
            link: '/servicios/#Marketing'
        }
    ],
    en: [
        {
            id: 1,
            title: 'branding',
            icon: <Branding />,
            content: 'Creation, conceptualization, and visual development of corporate identity, to give personality to your brand.',
            btnCta: 'Read more',
            link: '/servicios/#Branding'
        },
        {
            id: 2,
            title: 'tech',
            icon: <Tecnologia />,
            content: 'Develop customized technological solutions, to have real visibility of the business on the Internet.',
            btnCta: 'Read more',
            link: '/servicios/#Tecnologia'
        },
        {
            id: 3,
            title: 'marketing',
            icon: <Marketing />,
            content: 'Digital communication strategies to achieve the proper positioning of the brand in its segment and target market.',
            btnCta: 'Read more',
            link: '/servicios/#Marketing'
        }
    ]
}

const Servicios = ({ locale }) => {
    
    const ojo = useRef( null )
    
    return(
        <>
            <Head>
                <title>{ Locals[ locale ].metaTitle } | Agencia digital y creativa</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <section className="servicios__banner site-banner fondo-banner-servicios pt-4">
                <div className="site-banner-inner center">
                    <Header />
                    <div className="site__banner-copy">
                        <h2>{ Locals[ locale ].copyHeader }</h2>
                        <div className="servicios__banner-list ancho-80 center flex flex-flow-row justify-space-between col-gap-2">
                            
                            {
                                serviciosList[locale].map( servicio => (
                                    <ServicioItem 
                                        key = { servicio.id }
                                        title = { servicio.title }
                                        icon = { servicio.icon }
                                        content = { servicio.content }
                                        cta = { servicio.btnCta }
                                        link = { servicio.link }
                                    />
                                ) )
                            }
                            
                        </div>
                    </div>
                </div>
            </section>
            <main className="servicios__main-body">
                <div className="servicios__copy">
                    <figure className="servicios__copy-bg">
                        <Image 
                            alt="El servicio ideal para tu marca"
                            src="/images/bg-servicios-copy-50.jpg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </figure>
                    <div className="servicios__copy-inner ancho-80 center">
                        <div className="servicios__copy-container">
                            <h2 dangerouslySetInnerHTML={{ __html: Locals[ locale ].copyTwo }} />
                            <Logo />
                        </div>
                        <figure className="servicios__image-hoja">
                            <Image 
                                alt="Queremos ver crecer tu marca"
                                src="/images/hoja.png"
                                layout="fixed"
                                height={ 640 }
                                width={ 722 }
                            />
                        </figure>
                    </div>
                </div>
                <div id="Branding" className="servicios__detail servicios__branding">
                    <div className="servicios__detail-inner ancho-80 center flex flex-flow-row justify-space-between">
                        <div className="servicios__text">
                            <p className="servicio__fase">{ Locals[ locale ].services[0].phase }</p>
                            <h2 className="servicio__titulo">{ Locals[ locale ].services[0].title }</h2>
                            <h3 className="servicio__subtitulo">{ Locals[ locale ].services[0].copy }</h3>
                            <p className="servicio__content">{ Locals[ locale ].services[0].description }</p>
                            <div className="servicio__alcances">
                                <h3>{ Locals[ locale ].services[0].scopes.title }</h3>
                                <ul>
                                    {
                                        Locals[ locale ].services[0].scopes.list.map( ( item, index ) => (
                                            <li key={ index }>{ item }</li>
                                        ) )
                                    }
                                </ul>
                            </div>
                            <Link 
                                href="/proyectos"
                                className="btn btn-blanco"
                            >
                                { Locals[ locale ].services[0].btnCta }
                            </Link>
                        </div>
                        <div className="servicios__image">
                            <OjoBranding />
                        </div>
                    </div>
                </div>
                <div id="Tecnologia" className="servicios__detail servicios__tecnologia">
                    <div className="servicios__detail-inner ancho-80 center flex flex-flow-row justify-space-between">
                        <div className="servicios__text">
                            <p className="servicio__fase">{ Locals[ locale ].services[1].phase }</p>
                            <h2 className="servicio__titulo">{ Locals[ locale ].services[1].title }</h2>
                            <h3 className="servicio__subtitulo">{ Locals[ locale ].services[1].copy }</h3>
                            <p className="servicio__content">{ Locals[ locale ].services[1].description }</p>
                            <div className="servicio__alcances">
                                <h3>{ Locals[ locale ].services[1].scopes.title }</h3>
                                <ul>
                                    {
                                        Locals[ locale ].services[1].scopes.list.map( ( item, index ) => (
                                            <li key={ index }>{ item }</li>
                                        ) )
                                    }
                                </ul>
                            </div>
                            <Link 
                                href="/proyectos"
                                className="btn btn-blanco"
                            >
                                { Locals[ locale ].services[1].btnCta }
                            </Link>
                        </div>
                        <div className="servicios__image">
                            <OjoDev />
                        </div>
                    </div>
                </div>
                <div id="Marketing" className="servicios__detail servicios__marketing">
                    <div className="servicios__detail-inner ancho-80 center flex flex-flow-row justify-space-between">
                        <div className="servicios__text">
                            <p className="servicio__fase">{ Locals[ locale ].services[2].phase }</p>
                            <h2 className="servicio__titulo">{ Locals[ locale ].services[2].title }</h2>
                            <h3 className="servicio__subtitulo">{ Locals[ locale ].services[2].copy }</h3>
                            <p className="servicio__content">{ Locals[ locale ].services[2].description }</p>
                            <div className="servicio__alcances">
                                <h3>{ Locals[ locale ].services[2].scopes.title }</h3>
                                <ul>
                                    {
                                        Locals[ locale ].services[2].scopes.list.map( ( item, index ) => (
                                            <li key={ index }>{ item }</li>
                                        ) )
                                    }
                                </ul>
                            </div>
                            <Link 
                                href="/proyectos"
                                className="btn btn-blanco"
                            >
                                { Locals[ locale ].services[2].btnCta }
                            </Link>
                        </div>
                        <div className="servicios__image">
                            <OjoMkt />
                        </div>
                    </div>
                </div>
                <div className="servicios__close-copy panel">
                    <div className="ancho-80 center">
                        <p className="servicios__close-copy-text text-align-center">{ Locals[ locale ].copyEnd }</p>
                        <figure className="servicios__close-image">
                            <Image 
                                alt="Soluciones a medida"
                                src="/images/soluciones-medida.png"
                                layout="intrinsic"
                                height={ 441 }
                                width={ 441 }
                            />
                        </figure>
                    </div>
                </div>
            </main>
            <div ref={ ojo }></div>
        </>
    )
}

export const getStaticProps = ({ locale }) => {
    return{
        props:{
            locale
        }
    }
}

export default Servicios