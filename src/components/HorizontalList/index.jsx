import React from 'react';

import styles from './horizontalList.module.css';

function HorizontalList() {
  return (
    <div className="container">
      <h2 className={styles.title}>Últimos pokemons</h2>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard"/>
          <p>CHARIZARD</p>
        </div>

        <div className={styles.listItem}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard"/>
          <p>CHARIZARD</p>
        </div>

        <div className={styles.listItem}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard"/>
          <p>CHARIZARD</p>
        </div>

        <div className={styles.listItem}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard"/>
          <p>CHARIZARD</p>
        </div>

        <div className={styles.listItem}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard"/>
          <p>CHARIZARD</p>
        </div>

        <div className={styles.listItem}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard"/>
          <p>CHARIZARD</p>
        </div>
      </div>
    </div>
  );
}

export default HorizontalList;
