import { useEffect, useRef, useState } from "react";
import "./Carousel.scss"

export default function Carousel({ slides }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const timerRef = useRef();
    const timer = useRef();

    function selectSlide(newIndex) {
        setCurrentSlide((newIndex + slides.length) % slides.length);
        resetTimer();
    }

    function nextSlide() {
        setCurrentSlide((prevSlide) => {
            const newSlide = (prevSlide + 1 + slides.length) % slides.length;
            return newSlide;
        });
        resetTimer();
    }

    function prevSlide() {
        setCurrentSlide((prevSlide) => {
            const newSlide = (prevSlide - 1 + slides.length) % slides.length;
            return newSlide;
        });
        resetTimer();
    }

    // Timer animation
    function resetTimer() {
        clearTimeout(timerRef.current);
        if (timer.current) {
            timer.current.style.transition = 'none';
            timer.current.style.width = '0%';
        }
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (timer.current) {
                    timer.current.style.transition = 'width 4s linear';
                    timer.current.style.width = '100%';
                }
            });
        });
        timerRef.current = setTimeout(nextSlide, 4000);
    }

    useEffect(() => {
        if (slides.length)
            resetTimer();
        return ()=>{
            clearTimeout(timerRef.current);
        }
    }, [slides])

    return (
        <div className="carousel">
            <div className="overlay" ref={timer}></div>
            {slides.map((link, index) => {
                return (
                    <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
                        <img src={link} alt={`Slide ${index + 1}`} />
                    </div>)
            })}
            <div className="dots">
                {slides.map((_, index) => {
                    return (
                        <div key={index} className={`dot ${index === currentSlide ? "active" : ""}`} onClick={() => selectSlide(index)}>
                        </div>)
                })}
            </div>
            <a href="#" className="nav-arrow prev" onClick={(e) => {
                e.preventDefault();
                prevSlide();
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.70312 11.2031L14.2031 3.75C14.625 3.28125 15.3281 3.28125 15.7969 3.75C16.2188 4.17188 16.2188 4.875 15.7969 5.29688L9.04688 12L15.75 18.75C16.2188 19.1719 16.2188 19.875 15.75 20.2969C15.3281 20.7656 14.625 20.7656 14.2031 20.2969L6.70312 12.7969C6.23438 12.375 6.23438 11.6719 6.70312 11.2031Z" />
                </svg>
            </a>
            <a href="#" className="nav-arrow next" onClick={(e) => {
                e.preventDefault();
                nextSlide();
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2969 11.2031C17.7188 11.6719 17.7188 12.375 17.2969 12.7969L9.79688 20.2969C9.32812 20.7656 8.625 20.7656 8.20312 20.2969C7.73438 19.875 7.73438 19.1719 8.20312 18.75L14.9062 12.0469L8.20312 5.29688C7.73438 4.875 7.73438 4.17188 8.20312 3.75C8.625 3.28125 9.32812 3.28125 9.75 3.75L17.2969 11.2031Z" />
                </svg>
            </a>
            <div className="timer" ref={timer}></div>
        </div>
    )
}