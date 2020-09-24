import React, { useState, useRef, useEffect } from 'react';
import styles from './carousel.module.css';

import Button from '../Button';

import heroImg from '../../assets/hero-banner__image.png';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

function Carousel({ slides }) {
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
    if(active < slides.length - 1) setActive(active + 1);
  }

  return (
    <div className="container">
      <section className={styles.carouselContainer}>
        <div ref={contentRef} style={{ transform: `translateX(${position}px)` }} className={styles.carouselContent}>
          {slides.map(slide => (
            <div style={{ backgroundColor: `${slide.backgroundColor}` }} className={styles.carouselItem} key={slide.id}>
              <div className={styles.carouselInfo}>
                <h2>{slide.lightTitle}</h2>
                <h1>{slide.boldTitle}</h1>
                <p>{slide.subtitle}</p>
                <Button text="DETALHES" />
              </div>

              <div className={styles.carouselHeroImg}>
                <img src={heroImg} alt="Charizard voando em posição de batalha."/>
              </div>
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

export default Carousel;
