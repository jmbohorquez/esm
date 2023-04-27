import Image from 'next/image'

const Equipo = ({ imagen, nombre, cargo, descripcion }) => {
    return(
        <div className="inicio__equipo-card">
            <div className="card-side card-front">
                <figure className="card-image">
                    <Image 
                        alt={ nombre }
                        src={ imagen }
                        height={ 420 }
                        width={ 382 }
                    />
                </figure>
                <div className="card-name">
                    <h3>{ nombre }</h3>
                    <p>{ cargo }</p>
                </div>
            </div>
            <div className="card-side card-back">
                <div className="text-container" dangerouslySetInnerHTML={{ __html: descripcion }} />
            </div>
        </div>
    )
}

export default Equipo