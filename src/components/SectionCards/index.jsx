import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import useWindowSize from '../../hooks/useWindowSize';

import pikachuImg from '../../assets/pikachu.png';
import pokebolaImg from '../../assets/pokerbola.png';

import Button from '../../components/Button';

import styles from './sectionCards.module.css';

function SectionCards() {
  const [pikachu, setPikachu] = useState({
    name: '',
    sprite_url: ''
  });
  const [ivysaur, setIvysaur] = useState({
    name: '',
    sprite_url: ''
  });
  const [bulbasaur, setBulbasaur] = useState({
    name: '',
    sprite_url: ''
  });
  const [charizard, setCharizard] = useState({
    name: '',
    sprite_url: ''
  });

  const size = useWindowSize();

  useEffect(() => {
    api.get('pokemon/pikachu').then((response) => {
      setPikachu({
        ...pikachu,
        name: response.data.name,
        sprite_url: response.data.sprites.other[`official-artwork`].front_default
      })
    })
  }, [pikachu]);

  useEffect(() => {
    api.get('pokemon/ivysaur').then((response) => {
      setIvysaur({
        ...ivysaur,
        name: response.data.name,
        sprite_url: response.data.sprites.other[`official-artwork`].front_default
      })
    })
  }, [ivysaur]);

  useEffect(() => {
    api.get('pokemon/bulbasaur').then((response) => {
      setBulbasaur({
        ...bulbasaur,
        name: response.data.name,
        sprite_url: response.data.sprites.other[`official-artwork`].front_default
      })
    })
  }, [bulbasaur]);

  useEffect(() => {
    api.get('pokemon/charizard').then((response) => {
      setCharizard({
        ...charizard,
        name: response.data.name,
        sprite_url: response.data.sprites.other[`official-artwork`].front_default
      })
    })
  }, [charizard]);

  return (
    <div className="container">
      <div className={styles.sectionContainer}>
        <ul className={styles.sectionGrid}>
          <li className={styles.gridItems}>
            <p>{pikachu.name}</p>
            <div className={styles.pokemonCardContent}>
              <img src={pikachu.sprite_url} alt={pikachu.name}/>
            </div>
          </li>

          <li className={styles.gridItems}>
            <p>{ivysaur.name}</p>
            <div className={styles.pokemonCardContent}>
              <img src={ivysaur.sprite_url} alt={ivysaur.name}/>
            </div>
          </li>

          <li className={styles.gridItems}>
            <p>{bulbasaur.name}</p>
            <div className={styles.pokemonCardContent}>
              <img src={bulbasaur.sprite_url} alt={bulbasaur.name}/>
            </div>
          </li>

          <li className={styles.gridItems}>
            <p>{charizard.name}</p>
            <div className={styles.pokemonCardContent}>
              <img src={charizard.sprite_url} alt={charizard.name}/>
            </div>
          </li>
        </ul>

        <div className={styles.yellowBoard}>
          <p>Teste frontend</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a lacus, aliquam mattis est enim, molestie diam. Consequat blandit nec, venenatis dignissim suspendisse in facilisi molestie duis. Tempor sed quis phasellus arcu, posuere. Elementum ut tellus nisi, nunc ac etiam ut lectus porta. Et morbi enim vestibulum sodales sed ullamcorper dapibus accumsan. Faucibus pharetra, et at orci, vel blandit odio. Volutpat urna fusce quisque libero pellentesque in. Augue tempor vitae ullamcorper bibendum. <br/><br/> Quis facilisi nulla id est natoque sed ut consectetur. Id eleifend eros ullamcorper et. Diam, ultrices pellentesque urna, integer a lectus. Sit sollicitudin ac egestas amet netus. Elit vitae dolor cursus cursus.</span>
          <Button text="CALL TO ACTION" />
        </div>
        {
          size.width > 1130 && (
            <>
              <img className={styles.heroImg} src={pikachuImg} alt="Pikachu"/>
              <img className={styles.pokebolaImg} src={pokebolaImg} alt="Pokebola"/>
            </>
          )
        }

      </div>
    </div>
  );
}

export default SectionCards;
