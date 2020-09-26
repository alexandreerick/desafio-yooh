import React, { useState, useRef, useEffect } from 'react';
import styles from './miniCarousel.module.css';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

function MiniCarousel(props) {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function handlePrevSlide() {
    if(active > 0) setActive(active - 1);
  }

  function handleNextSlide() {
    if(active < props.slides.length - 1) setActive(active + 1);
  }

  return (
    <div className="container">
      <section className={styles.carouselContainer}>
        <div ref={contentRef} style={{ transform: `translateX(${position}px)` }} className={styles.carouselContent}>
          {props.slides.map(slide => (
            <div style={{ backgroundColor:"#FFF" }} key={slide.id} className={styles.miniCarouselItem}>
              <img src={slide.pokeImg} alt={slide.name}/>
              <p>{slide.name}</p>
            </div>
          ))}
        </div>
        <nav className={styles.nav}>
          <button className={styles.prevButton} onClick={handlePrevSlide}><img src={arrowLeft} alt="Flecha para esquerda"/></button>
          <button className={styles.nextButton} onClick={handleNextSlide}><img src={arrowRight} alt="Flecha para direita"/></button>
        </nav>
      </section>
    </div>
  );
}

export default MiniCarousel;
