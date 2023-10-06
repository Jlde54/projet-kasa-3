import { useState } from 'react'
import '../styles/components/logementSlideShow.css'
import Angleleft from '../assets/icons/angle-left-solid.svg'
import Angleright from '../assets/icons/angle-right-solid.svg'

function SlideShow(props) {

    const slides = props.pictures

    const [currentIndex, setCurrentIndex] = useState(0)

    const isOneSlide = slides.length === 1

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    };
    
    const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    };
      
    return (
        <div className="containerStyle">
            <div className="sliderStyle">
                <div className='slideStyle'>
                    <img src={slides[currentIndex]} alt="Slide"></img>
                </div>

                <div onClick={goToPrevious} className="arrowStyle leftArrowStyle">
                    {!isOneSlide ? <img src={Angleleft} alt="Chevron Left"></img> : ''}
                </div>

                <div onClick={goToNext} className="arrowStyle rightArrowStyle">
                    {!isOneSlide ? <img src={Angleright} alt="Chevron Right"></img> : ''}
                </div>

                <div className="slideCounter">
                    {!isOneSlide ? <span className='slide_counter'>{currentIndex + 1} / {slides.length}</span> : ''}
                </div>
                
            </div>

        </div>
    )

}

export default SlideShow