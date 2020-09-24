import React from 'react';

import Button from '../Button';

import './style.css';

import menu from '../../assets/menu.svg';
import headerLogo from '../../assets/teste-web.svg';
import fbLogo from '../../assets/facebook.svg';
import igLogo from '../../assets/instagram.svg';
import ytLogo from '../../assets/youtube.svg';


function Header() {
  return (
    <header>
      <div className="container">
        <div>
          <a href="" className="hamburger"> <img src={menu} alt="Menu Hamburger"/> </a>
          <a href="/"> <img src={headerLogo} alt="Teste Web"/> </a>
        </div>

        <div>
          <Button />
          <ul className="social">
            <li> <a href="https://www.facebook.com/yoohdigital" target="_blank" rel="noopener noreferrer"> <img src={fbLogo} alt="Botão do Facebook"/> </a> </li>
            <li> <a href="https://www.instagram.com/yoohdigital/" target="_blank" rel="noopener noreferrer"> <img src={igLogo} alt="Botão do Instagram"/> </a> </li>
            {/* Aqui coloquei o link para o Behance já que não tem um Youtube da YOOH */}
            <li> <a href="https://www.behance.net/yoohdigital" target="_blank" rel="noopener noreferrer"> <img src={ytLogo} alt="Botão do Youtube"/> </a> </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
