import React from 'react';

import styles from './footer.module.css';

import logoImg from '../../assets/teste-web.svg';
import yoohLogo from '../../assets/logo-yooh.svg';
import mailImg from '../../assets/mail.svg';
import fbLogo from '../../assets/facebook.svg';
import igLogo from '../../assets/instagram.svg';
import ytLogo from '../../assets/youtube.svg';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.upFooter}>
            <img src={logoImg} alt="Logo Teste Web"/>

            <div className={styles.footerLinks}>
              <span>
                <img src={mailImg} alt="Símbolo de uma carta"/>
                email@testeweb.com
              </span>
              <ul className="social">
                <li> <a href="https://www.facebook.com/yoohdigital" target="_blank" rel="noopener noreferrer"> <img src={fbLogo} alt="Botão do Facebook"/> </a> </li>
                <li> <a href="https://www.instagram.com/yoohdigital/" target="_blank" rel="noopener noreferrer"> <img src={igLogo} alt="Botão do Instagram"/> </a> </li>
                {/* Aqui coloquei o link para o Behance já que não tem um Youtube da YOOH */}
                <li> <a href="https://www.behance.net/yoohdigital" target="_blank" rel="noopener noreferrer"> <img src={ytLogo} alt="Botão do Youtube"/> </a> </li>
             </ul>
            </div>
          </div>

          <div className={styles.downFooter}>
            <img className={styles.testeWebDownFooterImg} src={logoImg} alt="Logo Teste Web"/>
            <span>2020 © Todos os direitos reservados.</span>
            <span className={styles.devBy}>Desenvolvido por</span>
            <img src={yoohLogo} alt="Logo da YOOH"/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
