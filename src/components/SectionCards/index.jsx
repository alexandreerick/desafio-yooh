import React from 'react';

import pikachuImg from '../../assets/pikachu.png';
import pokebolaImg from '../../assets/pokerbola.png';

import Button from '../../components/Button';

import styles from './sectionCards.module.css';

function SectionCards() {
  return (
    <div className="container">
      <div className={styles.sectionContainer}>
        <ul className={styles.sectionGrid}>
          <li className={styles.gridItems}>
            <p>Pikachu</p>
            <div className={styles.pokemonCardContent}>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"/>
            </div>
          </li>

          <li className={styles.gridItems}>
            <p>Pikachu</p>
            <div className={styles.pokemonCardContent}>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"/>
            </div>
          </li>

          <li className={styles.gridItems}>
            <p>Pikachu</p>
            <div className={styles.pokemonCardContent}>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"/>
            </div>
          </li>

          <li className={styles.gridItems}>
            <p>Pikachu</p>
            <div className={styles.pokemonCardContent}>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"/>
            </div>
          </li>
        </ul>

        <div className={styles.yellowBoard}>
          <p>Teste frontend</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a lacus, aliquam mattis est enim, molestie diam. Consequat blandit nec, venenatis dignissim suspendisse in facilisi molestie duis. Tempor sed quis phasellus arcu, posuere. Elementum ut tellus nisi, nunc ac etiam ut lectus porta. Et morbi enim vestibulum sodales sed ullamcorper dapibus accumsan. Faucibus pharetra, et at orci, vel blandit odio. Volutpat urna fusce quisque libero pellentesque in. Augue tempor vitae ullamcorper bibendum. <br/><br/> Quis facilisi nulla id est natoque sed ut consectetur. Id eleifend eros ullamcorper et. Diam, ultrices pellentesque urna, integer a lectus. Sit sollicitudin ac egestas amet netus. Elit vitae dolor cursus cursus.</span>
          <Button text="CALL TO ACTION" />
        </div>

        <img className={styles.heroImg} src={pikachuImg} alt="Pikachu"/>
        <img className={styles.pokebolaImg} src={pokebolaImg} alt="Pokebola"/>
      </div>
    </div>
  );
}

export default SectionCards;
