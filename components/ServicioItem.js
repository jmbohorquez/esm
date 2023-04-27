import { useRef, useEffect } from 'react'
import Link from 'next/link'

const ServicioItem = ({ title, icon, content, cta, link }) => {
    
    const IconBrand = useRef( null )
    const TituloBrand = useRef( null )
    const CircleBG = useRef( null )
    const BtnBrand = useRef( null )

    useEffect( () => {

        if( BtnBrand ){
            BtnBrand.current.addEventListener( 'mouseenter', () => {
                IconBrand.current.style.top = '-32px'
                TituloBrand.current.style.transform = 'scale( 1.2, 1.2 )'
                CircleBG.current.style.animationName = 'rubberBand'
            } )

            BtnBrand.current.addEventListener( 'mouseout', () => {
                IconBrand.current.style.top = '-16px'
                TituloBrand.current.style.transform = 'scale( 1, 1 )'
                CircleBG.current.style.animationName = 'none'
            } )
        }
       
    } )
    
    return(
        <div className="servicio ancho-33">
            <div className="servicios__banner-title">
                <figure className="servicio-icono" ref={ IconBrand }>
                    { icon }
                </figure>
                <h3 ref={ TituloBrand }>{ title }</h3>
                <div className="circle-bg" ref={ CircleBG }></div>
            </div>
            <p>{ content }</p>
            <Link 
                href={ link }
                className="btn btn-blanco"
                ref={ BtnBrand }
            >
                { cta }
            </Link>
        </div>
    )
}

export default ServicioItem