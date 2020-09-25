import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../services/api';

import styles from './horizontalList.module.css';

function HorizontalList() {
  const [lastPokemons, setLastPokemons] = useState([]);

  useEffect(() => {
    api.get('pokemon?limit=6').then((response) => {
      const pokemonUrl = response.data.results.map((urlPokemon) => urlPokemon.url);
      function getUrl() {
        pokemonUrl.forEach(url => {
            axios.get(url).then(response => {
            setLastPokemons(pokemons => [...pokemons, response.data]);
          })
        })
      }
      getUrl();
    })
  }, []);

  return (
    <div className="container">
      <h2 className={styles.title}>Últimos pokemons</h2>
      <div className={styles.listContainer}>
        <div className={styles.list}>
          {lastPokemons.map(pokemon => (
            <div key={pokemon.id} className={styles.listItem}>
              <img src={pokemon.sprites && pokemon.sprites.other[`official-artwork`].front_default} alt={pokemon.name}/>
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalList;
