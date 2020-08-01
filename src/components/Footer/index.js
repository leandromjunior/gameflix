import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="GameFlix Logo" />
      </a>
      <p>
        Powered by
        {' '}
        <a href="https://github.com/leandromjunior">
          Leandro Motta Junior
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
