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
        <div class="carousel">
            <div class="overlay" ref={timer}></div>
            {slides.map((link, index) => {
                return (
                    <div class={`slide ${index === currentSlide ? "active" : ""}`}>
                        <img src={link} alt="Image 1" />
                        <div class="description">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 1.45312V6.75V6.79688V17.25C24 19.3594 21.9844 21 19.5 21C17.0156 21 15 19.3594 15 17.25C15 15.1875 17.0156 13.5 19.5 13.5C20.2969 13.5 21.0469 13.6875 21.75 14.0156V8.29688L9 12.2344V20.25C9 22.3594 6.98438 24 4.5 24C2.01562 24 0 22.3594 0 20.25C0 18.1875 2.01562 16.5 4.5 16.5C5.29688 16.5 6.04688 16.6875 6.75 17.0156V11.25V5.625C6.75 5.15625 7.03125 4.73438 7.5 4.59375L22.0781 0.09375C22.2188 0.046875 22.3594 0 22.5469 0C23.3438 0 24 0.65625 24 1.45312ZM21.75 17.25C21.75 16.8281 21.1406 15.75 19.5 15.75C17.8125 15.75 17.25 16.8281 17.25 17.25C17.25 17.7188 17.8125 18.75 19.5 18.75C21.1406 18.75 21.75 17.7188 21.75 17.25ZM6.75 20.25C6.75 19.8281 6.14062 18.75 4.5 18.75C2.8125 18.75 2.25 19.8281 2.25 20.25C2.25 20.7188 2.8125 21.75 4.5 21.75C6.14062 21.75 6.75 20.7188 6.75 20.25ZM21.75 5.95312V2.53125L9 6.46875V9.84375L21.75 5.95312Z" fill="#0AC6A6" />
                            </svg>
                        </div>
                    </div>)
            })}
            <div class="dots">
                {slides.map((_, index) => {
                    return (
                        <div class={`dot ${index === currentSlide ? "active" : ""}`} onClick={() => selectSlide(index)}>
                        </div>)
                })}
            </div>
            <a href="#" class="nav-arrow prev" onClick={(e) => {
                e.preventDefault();
                prevSlide();
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.70312 11.2031L14.2031 3.75C14.625 3.28125 15.3281 3.28125 15.7969 3.75C16.2188 4.17188 16.2188 4.875 15.7969 5.29688L9.04688 12L15.75 18.75C16.2188 19.1719 16.2188 19.875 15.75 20.2969C15.3281 20.7656 14.625 20.7656 14.2031 20.2969L6.70312 12.7969C6.23438 12.375 6.23438 11.6719 6.70312 11.2031Z" />
                </svg>
            </a>
            <a href="#" class="nav-arrow next" onClick={(e) => {
                e.preventDefault();
                nextSlide();
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2969 11.2031C17.7188 11.6719 17.7188 12.375 17.2969 12.7969L9.79688 20.2969C9.32812 20.7656 8.625 20.7656 8.20312 20.2969C7.73438 19.875 7.73438 19.1719 8.20312 18.75L14.9062 12.0469L8.20312 5.29688C7.73438 4.875 7.73438 4.17188 8.20312 3.75C8.625 3.28125 9.32812 3.28125 9.75 3.75L17.2969 11.2031Z" />
                </svg>
            </a>
            <div class="timer" ref={timer}></div>
        </div>
    )
}