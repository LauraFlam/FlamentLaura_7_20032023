import './Carrousel.scss'
import { useState } from 'react'
import ArrowLeft from '../../assets/chevron_carrousel_left.png'
import ArrowRight from '../../assets/chevron_carrousel_right.png'

export default function Carrousel({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const precedent = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carrousel'>
            {imageSlider.length > 1 && 
                <>
                    <img className='carrousel_arrow carrousel_arrow_right' src={ArrowRight} alt="show next slider" onClick={next}/>

                    <img className='carrousel_arrow carrousel_arrow_left' src={ArrowLeft} alt="show previous slider" onClick={precedent}/>
                    
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}