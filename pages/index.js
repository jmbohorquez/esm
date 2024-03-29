import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header'
import Ojo from '../components/OjoESM'
import CommentSlider from '../components/CommentSlider'
import IcebergHome from '../components/IcebergHome'
import Equipo from '../components/equipo'

//Locals
import Locals from '../locals/home.json'

import Branding from '../public/images/branding.svg'
import Tecnologia from '../public/images/tecnologia.svg'
import Marketing from '../public/images/marketing.svg'
import LogoB from '../public/images/logo-b.svg'


//Logos Clientes

import LogoEscape from '../public/images/logos/logo-escape-bn.svg'
import LogoExtrema from '../public/images/logos/logo-extrema-bn.svg'
import LogoMejorBici from '../public/images/logos/logo-mejor-bici-bn.svg'
import LogoBe from '../public/images/logos/logo-be-bn.svg'
import LogoDelVeccio from '../public/images/logos/logo-delveccio-bn.svg'
import LogoVix from '../public/images/logos/logo-vix-bn.svg'
import LogoSetenta from '../public/images/logos/logo-setenta-bn.svg'
import LogoJarDeen from '../public/images/logos/logo-jardeen-bn.svg'
import LogoDot from '../public/images/logos/logo-dot-bn.svg'
import LogoSpanish from '../public/images/logos/logo-spanish-bn.svg'
import LogoMuv from '../public/images/logos/logo-muv-bn.svg'
import LogoVita from '../public/images/logos/logo-vita-bn.svg'
import LogoTMap from '../public/images/logos/logo-tmap-bn.svg'
import LogoProsperity from '../public/images/logos/logo-prosperity-bn.svg'
import LogoAmazing from '../public/images/logos/logo-amazing-bn.svg'
import LogoKynessium from '../public/images/logos/logo-kynessium-bn.svg'
import LogoIgp from '../public/images/logos/logo-igp-bn.svg'
import LogoSmokingMolly from '../public/images/logos/logo-smokingmolly-bn.svg'
import LogoPuntopay from '../public/images/logos/logo-puntopay-bn.svg'
import LogoGeoterra from '../public/images/logos/logo-geoterra-bn.svg'
import LogoIpler from '../public/images/logos/logo-ipler-bn.svg'
import LogoFindeco from '../public/images/logos/logo-findeco-bn.svg'

const Home = ({ locale }) => {

    return (
        <>
            <Head>
                <title>En sus Marcas, Agencia digital y creativa</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <section className="inicio__banner site-banner fondo-banner-home">
                <div className="site-banner-inner center">
                    <Header />
                    <div className="site__banner-copy">
                        <h2 className="text-align-center" dangerouslySetInnerHTML={{ __html: Locals[ locale ].heroCopy.title }} />
                    </div>
                </div>
            </section>
            <main className="inicio__main-body">
                <IcebergHome 
                    copyText = { Locals[ locale ].heroCopy.subTitle }
                />
                <div className="inicio__quienes-somos">
                    <div className="inicio__quienes-somos-text-container flex">
                        <div className="col-space col-space-left"></div>
                        <div className="inicio__quienes-somos-content">
                            <figure className="quienes-somos-image">
                                <Ojo />
                            </figure>
                            <h2 className="text-align-center text-color-6">{ Locals[ locale ].we.title }</h2>
                            <div dangerouslySetInnerHTML={{ __html: Locals[ locale ].we.content }} />
                        </div>
                        <div className="col-space col-space-right">
                            <div className="col-space-inner"></div>
                        </div>
                    </div>
                    <div className="inicio__quienes-somos-footer-container flex">
                        <div className="col-space footer-space-left"></div>
                        <div className="inicio__quienes-somos-text-footer">
                            <h3 className="text-align-center">{ Locals[ locale ].work.title }</h3>
                            <ul className="no-list">
                                <li className="inicio__quienes-somos-item">
                                    <Link href="/servicios#Branding" scroll={false}>
                                        <Branding />
                                        { Locals[ locale ].work.branding }
                                    </Link>
                                </li>
                                <li className="inicio__quienes-somos-item">
                                    <Link href="/servicios#Tecnologia" scroll={false}>
                                        <Tecnologia />
                                        { Locals[ locale ].work.tech }
                                    </Link>
                                </li>
                                <li className="inicio__quienes-somos-item">
                                    <Link href="/servicios#Marketing" scroll={false}>
                                        <Marketing />
                                        { Locals[ locale ].work.marketing }
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-space footer-space-right"></div>
                    </div>
                </div>
                <div className="inicio__equipo">
                    <div className="inicio__equipo-inner ancho-80 center">
                        <div className="inicio__equipo-text">
                            <h2>{ Locals[ locale ].team.title }</h2>
                            <div dangerouslySetInnerHTML={{ __html: Locals[ locale ].team.description }} />
                        </div>
                        <div className="inicio__equipo-card-container">
                            {
                                Locals[ locale ].team.members.map( person => (
                                    <Equipo 
                                        key={ person.name }
                                        imagen={ person.photoURL } 
                                        nombre={ person.name } 
                                        cargo={ person.position } 
                                        descripcion={ person.cv }
                                    />
                                ) )
                            }
                        </div>
                    </div>
                    <div className="inicio__equipo-ojos">
                        <div className="equipo-ojo-container ojo-container-izq">
                            <div className="ojo-inner">
                                <div className="inicio__ojo-container">
                                    <div className="ojo">
                                        <div className="ojo-brillo">
                                            <div className="ojo-retina">
                                                <div className="ojo-pupila"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="equipo-ojo-container ojo-container-der">
                            <div className="ojo-inner">
                                <div className="inicio__ojo-container">
                                    <div className="ojo">
                                        <div className="ojo-brillo">
                                            <div className="ojo-retina">
                                                <div className="ojo-pupila"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inicio__clientes panel">
                    <h2>{ Locals[ locale ].customers.title }</h2>
                    <p className="text-align-center center">{ Locals[ locale ].customers.description }</p>
                    <div className="inicio__clientes-list center">
                        <div className="clientes-list">
                            <figure className="clientes-item">
                                <LogoEscape />
                            </figure>
                            <figure className="clientes-item">
                                <LogoExtrema />
                            </figure>
                            <figure className="clientes-item">
                                <LogoMejorBici />
                            </figure>
                            <figure className="clientes-item">
                                <LogoBe />
                            </figure>
                            <figure className="clientes-item">
                                <LogoDelVeccio />
                            </figure>
                            <figure className="clientes-item">
                                <LogoVix />
                            </figure>
                            <figure className="clientes-item">
                                <LogoSetenta />
                            </figure>
                            <figure className="clientes-item">
                                <LogoJarDeen />
                            </figure>
                            <figure className="clientes-item">
                                <LogoDot />
                            </figure>
                            <figure className="clientes-item">
                                <LogoSpanish />
                            </figure>
                            <figure className="clientes-item">
                                <LogoMuv />
                            </figure>
                            <figure className="clientes-item">
                                <LogoVita />
                            </figure>
                            <figure className="clientes-item">
                                <LogoTMap />
                            </figure>
                            <figure className="clientes-item">
                                <LogoProsperity />
                            </figure>
                            <figure className="clientes-item">
                                <LogoAmazing />
                            </figure>
                            <figure className="clientes-item">
                                <LogoKynessium />
                            </figure>
                            <figure className="clientes-item">
                                <LogoIgp />
                            </figure>
                            <figure className="clientes-item">
                                <LogoSmokingMolly />
                            </figure>
                            <figure className="clientes-item">
                                <LogoPuntopay />
                            </figure>
                            <figure className="clientes-item">
                                <LogoGeoterra />
                            </figure>
                            <figure className="clientes-item">
                                <LogoIpler />
                            </figure>
                            <figure className="clientes-item">
                                <LogoFindeco />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="inicio__copy">
                    <figure className="inicio__copy-bg">
                        <Image 
                            alt="experiencias de marca"
                            src="/images/home-copy-surf@2x-50.jpg"
                            fill
                        />
                    </figure>
                    <div className="inicio__copy-inner">
                        <h3>{ Locals[ locale ].copyThree }</h3>
                        <LogoB />
                    </div>
                </div>
                <div className="inicio__comentarios panel">
                    <h2>{ Locals[ locale ].commentsTitle }</h2>
                    <CommentSlider />
                </div>
            </main>
        </>
    )
}

export const getStaticProps = ({ locale }) => {

    return {
        props: {
            locale
        }
    }

}

export default Home