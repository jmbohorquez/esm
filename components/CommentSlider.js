import Image from 'next/image'
import { useRouter } from 'next/router'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import CommentList from '../content/comments.json'

const CommentSlider = () => {

    const router = useRouter()
    const slideLocale = router.locale
    
    const [ sliderRef ] = useKeenSlider(
        {
            initial: 0,
            slides: { perView: 3, spacing: 32 },
            loop: true,
            breakpoints: {
                '(max-width: 600px)': {
                    slides: { perView: 1, spacing: 32 },
                },
            },
            duration: 1500
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout( timeout )
                }
                function nextTimeout() {
                    clearTimeout( timeout )
                    if ( mouseOver ) return
                    timeout = setTimeout( () => {
                        slider.next()
                    }, 2000)
                }
                slider.on( "created", () => {
                    slider.container.addEventListener( "mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    } )
                    slider.container.addEventListener( "mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    } )
                    nextTimeout()
                })
                slider.on( "dragStarted", clearNextTimeout )
                slider.on( "animationEnded", nextTimeout )
                slider.on( "updated", nextTimeout )
            }
        ]
    )

    return(
        <div className="comentarios-slider">
            <div ref={ sliderRef } className="keen-slider">
                {
                    CommentList[slideLocale].map( comment => (
                        <div 
                            key = { comment.id }
                            className = "keen-slider__slide number-slide1"
                        >
                            <figure className="slide-icon">
                                <Image 
                                    alt={`logo ${ comment.company }`}
                                    src={ comment.iconUrl }
                                    height={ 64 }
                                    width={ 64 }
                                />
                            </figure>
                            <p><i>{ comment.comment }</i></p>
                            <p><strong>{ comment.name }  / <br />{ comment.company }</strong></p>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default CommentSlider