import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header'

const Proyectos = () => {
    return(
        <>
            <Head>
                <title>Proyectos | Agencia digital y creativa</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <section className="proyectos__banner site-banner fondo-banner-proyectos pt-4">
                <div className="site-banner-inner center">
                    <Header />
                    <div className="site__banner-copy pb-4">
                        <h2>Nuestro reto: <br />Construir marcas que dejan huella</h2>
                        <p className="site__banner-sub text-align-center text-color-5"><strong>Crear. Innovar. Inspirar.</strong></p>
                    </div>
                </div>
            </section>
            <main>
                <div className="height-100 flex flex-flow-row">
                    <div className="proyectos__link-container proyectos__jar-dean ancho-50">
                        <div className="proyectos__link-image link-image-jar-dean">
                            <figure className="inner">
                                <Image 
                                    alt="Jar-Dean Healthy Life Style"
                                    src="/images/proyectos-jar-deen-bg.png"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </figure>
                        </div>
                        <Link href="/proyectos/jar-deen">
                            <a>
                                <div className="proyectos__link-description">
                                    <span className="proyectos__link-name">Jar-Deen</span>
                                    <span className="proyectos__link-title">Comida vegana con Amor</span>
                                    <span className="proyectos__link-sub-title">Desarrollo de marca y fotografía</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="proyectos__compuesto ancho-50">
                        <div className="proyectos__link-container proyectos__escape proyectos_link-height-50">
                            <div className="proyectos__link-image link-image-escape">
                                <figure className="inner">
                                    <Image 
                                        alt="Jar-Dean Healthy Life Style"
                                        src="/images/proyectos-escape-50.jpg"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </figure>
                            </div>
                            <Link href="/proyectos/escape">
                                <a>
                                    <figure className="proyectos__link-image">

                                    </figure>
                                    <div className="proyectos__link-description">
                                        <span className="proyectos__link-name">Escape Travellers</span>
                                        <span className="proyectos__link-title">Un viajero sabe lo que otro necesita</span>
                                        <span className="proyectos__link-sub-title">Desarrollo de marca y tecnológico</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="proyectos__link-container proyectos__outbox proyectos_link-height-50">
                            <div className="proyectos__link-image link-image-outbox">
                                <figure className="inner">
                                    <Image 
                                        alt="Jar-Dean Healthy Life Style"
                                        src="/images/proyectos-outbox-50.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </figure>
                            </div>
                            <Link href="/proyectos/outbox">
                                <a>
                                    <figure className="proyectos__link-image">

                                    </figure>
                                    <div className="proyectos__link-description">
                                        <span className="proyectos__link-name">OutBox</span>
                                        <span className="proyectos__link-title">We Are In</span>
                                        <span className="proyectos__link-sub-title">Desarrollo de marca</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Proyectos