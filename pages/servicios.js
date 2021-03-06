import { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header'
import ServicioItem from '../components/ServicioItem'

import Branding from '../public/images/icon-branding-3d.svg'
import Tecnologia from '../public/images/icon-tech-3d.svg'
import Marketing from '../public/images/icon-mktng-3d.svg'
import Logo from '../public/images/logo-b.svg'
import OjoBranding from '../public/images/ojo-branding.svg'
import OjoDev from '../public/images/ojo-dev.svg'
import OjoMkt from '../public/images/ojo-mkt.svg'

const serviciosList = [
    {
        id: 1,
        title: 'branding',
        icon: <Branding />,
        content: 'Creación, conceptualización y desarrollo visual de identidad corporativa, para darle personalidad a tu marca.',
        link: '/servicios/#Branding'
    },
    {
        id: 2,
        title: 'tech',
        icon: <Tecnologia />,
        content: 'Desarrollar soluciones tecnológicas a la medida, para tener una visibilidad real del negocio en internet.',
        link: '/servicios/#Tecnologia'
    },
    {
        id: 3,
        title: 'marketing',
        icon: <Marketing />,
        content: 'Estrategias de comunicación digital para lograr el adecuado posicionamiento de la marca en su segmento y mercado objetivo.',
        link: '/servicios/#Marketing'
    }
]

const Servicios = () => {
    
    const ojo = useRef( null )
    
    return(
        <>
            <Head>
                <title>Servicios | Agencia digital y creativa</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <section className="servicios__banner site-banner fondo-banner-servicios pt-4">
                <div className="site-banner-inner center">
                    <Header />
                    <div className="site__banner-copy">
                        <h2>El servicio ideal para tu marca</h2>
                        <div className="servicios__banner-list ancho-80 center flex flex-flow-row justify-space-between col-gap-2">
                            
                            {
                                serviciosList.map( servicio => (
                                    <ServicioItem 
                                        key = { servicio.id }
                                        title = { servicio.title }
                                        icon = { servicio.icon }
                                        content = { servicio.content }
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
                            <h2>Nos encanta <br />ver crecer <br />tu marca</h2>
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
                            <p className="servicio__fase">Fase 1</p>
                            <h2 className="servicio__titulo">Branding</h2>
                            <h3 className="servicio__subtitulo">Hacemos brillar tu negocio</h3>
                            <p className="servicio__content">Creamos branding partiendo del presente (Concepto, creencias, valores, misión y visión), enfocándonos en un impacto futuro. Diseñamos experiencias de marca asegurándonos de crear una conexión con el usuario final. Convertimos tus ideas y modelos de negocio en marcas poderosas, marcas que ENAMORAN.</p>
                            <div className="servicio__alcances">
                                <h3>Alcances</h3>
                                <ul>
                                    <li>Conceptualización de la idea (ADN de la Marca)</li>
                                    <li>Creación de Identidad Visual</li>
                                    <li>Construcción de Logotipo</li>
                                    <li>Manual de Identidad Corporativa</li>
                                    <li>Gráfica complementaria</li>
                                    <li>Diseño de material gráfico de apoyo</li>
                                </ul>
                            </div>
                            <Link href="/">
                                <a className="btn btn-blanco">Ver proyectos</a>
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
                            <p className="servicio__fase">Fase 2</p>
                            <h2 className="servicio__titulo">Tecnología</h2>
                            <h3 className="servicio__subtitulo">Optimizamos tu negocio para tener presencia virtual</h3>
                            <p className="servicio__content">Construimos sitios web enfocados en la retención y atracción de clientes. Diseñamos herramientas de optimización que nos permiten tener control y hacer seguimiento a cambios de comportamiento y tendencias del mercado actual.</p>
                            <div className="servicio__alcances">
                                <h3>Alcances</h3>
                                <ul>
                                    <li>Sitios web (Desde páginas de llegada, hasta plataformas de e-Commerce)</li>
                                    <li>oluciones a medida de tecnología de frontend & backend </li>
                                    <li>Progresive Web Aps (PWA)</li>
                                    <li>Sitios web programados Posicionamiento SEO</li>
                                </ul>
                            </div>
                            <Link href="/">
                                <a className="btn btn-blanco">Ver proyectos</a>
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
                            <p className="servicio__fase">Fase 3</p>
                            <h2 className="servicio__titulo">Marketing</h2>
                            <h3 className="servicio__subtitulo">Posicionamos tu marca con estrategias efectivas</h3>
                            <p className="servicio__content">Creamos estrategias de marketing omnicanal que hacen crecer a las empresas. Estrategias centradas en  mejorar posicionamiento, engagement y generación de leads, traducidas en crecimiento de ventas en canales físicos y digitales.</p>
                            <div className="servicio__alcances">
                                <h3>Alcances</h3>
                                <ul>
                                    <li>Estrategia de comunicación de Marca </li>
                                    <li>Estrategia de Posicionamiento online </li>
                                    <li>Análisis de mercado </li>
                                    <li>SEO / SEM</li>
                                    <li>Creación de campañas digitales</li>
                                    <li>E-Mail marketing</li>
                                    <li>Administración de redes sociales</li>
                                </ul>
                            </div>
                            <Link href="/">
                                <a className="btn btn-blanco">Ver proyectos</a>
                            </Link>
                        </div>
                        <div className="servicios__image">
                            <OjoMkt />
                        </div>
                    </div>
                </div>
                <div className="servicios__close-copy panel">
                    <div className="ancho-80 center">
                        <p className="servicios__close-copy-text text-align-center"><strong>Pensamos en soluciones</strong> a la medida de tu negocio</p>
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

export default Servicios