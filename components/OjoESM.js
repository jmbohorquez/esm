import { useEffect } from 'react'

import EyeArrow from '../public/images/eye-arrow.svg'
import EyePestanas from '../public/images/pestanas.svg'

const OjoESM = () => {
    
    useEffect( () => {

        const ojo = document.getElementById('ojo')
        const retina = document.getElementById('retina')
        const cuadranteSupIzq = document.getElementById('cuadranteSupIzq')
        const cuadranteSupDer = document.getElementById('cuadranteSupDer')
        const cuadranteInfIzq = document.getElementById('cuadranteInfIzq')
        const cuadranteInfDer = document.getElementById('cuadranteInfDer')
        
        if( ojo ){

            setInterval(() => {
                ojo.style.animation = 'blink .5s 1'
                setTimeout(() => {
                    ojo.style.animation = 'none'
                }, 1000);
            }, 10000);
    
            cuadranteSupIzq.addEventListener( 'mouseenter', () => {
                retina.style.transform = ( "translate(-30px, -30px)" )
            } )
            cuadranteSupIzq.addEventListener( 'mouseleave', () => {
                retina.style.transform = 'none'
            } )
            cuadranteSupDer.addEventListener( 'mouseenter', () => {
                retina.style.transform = ( "translate(30px, -30px)" )
            } )
            cuadranteSupDer.addEventListener( 'mouseleave', () => {
                retina.style.transform = 'none'
            } )
            cuadranteInfIzq.addEventListener( 'mouseenter', () => {
                retina.style.transform = ( "translate(-30px, 30px)" )
            } )
            cuadranteInfIzq.addEventListener( 'mouseleave', () => {
                retina.style.transform = 'none'
            } )
            cuadranteInfDer.addEventListener( 'mouseenter', () => {
                retina.style.transform = ( "translate(30px, 30px)" )
            } )
            cuadranteInfDer.addEventListener( 'mouseleave', () => {
                retina.style.transform = 'none'
            } )
            
        }     

    }, [] )
    
    return(
        <div className="ojo-container">
            <div id="ojo" className="ojo">
                <div className="ojo-brillo">
                    <div id="retina" className="ojo-retina">
                        <div className="ojo-pupila">

                        </div>
                    </div>
                </div>
            </div>
            <div className="ojo-pestanas">
                <EyePestanas />
            </div>
            <div className="ojo-flecha">
                <EyeArrow />
            </div>
            <div id="cuadrantes" className="ojo-cuadrantes">
                <div id="cuadranteSupIzq" className="ojo-cuadrante"></div>
                <div id="cuadranteSupDer" className="ojo-cuadrante"></div>
                <div id="cuadranteInfIzq" className="ojo-cuadrante"></div>
                <div id="cuadranteInfDer" className="ojo-cuadrante"></div>
            </div>
        </div>
    )
}
export default OjoESM