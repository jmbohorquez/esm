import Image from 'next/image'

import Sombra from '../public/images/iceberg/sombra.svg'
import Cielo from '../public/images/iceberg/cielo.svg'
import Flag from '../public/images/iceberg/flag.svg'
import Iceberg from '../public/images/iceberg/iceberg.svg'
import Mar from '../public/images/iceberg/mar.svg'

const IcebergHome = ({ copyText }) => {
    return(
        <div className="iceberg">
            <div className="iceberg-laptop">
                <div className="iceberg-container">
                    <div className="iceberg-cielo">
                        <Cielo />
                    </div>
                    <div className="iceberg-sombra">
                        <Sombra />
                    </div>
                    <div className="iceberg-ice">
                        <div className="flag">
                            <Flag />
                        </div>
                        <Iceberg />
                    </div>
                    <div className="iceberg-mar">
                        <Mar />
                    </div>
                    <div className="iceberg-text">
                        <p>{ copyText }</p>
                    </div>
                </div>
                <figure className="iceberg-image-container">
                    <Image 
                        alt="laptop"
                        src="/images/laptop.png"
                        fill
                        quality={100}
                    />
                </figure>
            </div>
        </div>
    )
}

export default IcebergHome