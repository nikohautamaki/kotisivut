import React from 'react';

const Footer = () => (
  <footer className="App-footer">
    <p>Yhteystiedot: Tmi Niko Hautamäki - Rosil Y-tunnus: 2824627-2</p>
  <p>
    Puhelinnumero: <a href="tel:+358442083222">+358 44 208 3222</a><br/>
    Email: <a href="mailto:niko.hautamaki@rosil.fi">niko.hautamaki@rosil.fi</a>
  </p>

    <p>
      © {new Date().getFullYear()} 
      <a href="https://www.tinkerit.fi" target="_blank" rel="noopener noreferrer"> Website by Tinkerit</a>. 
      Kaikki oikeudet pidätetään.
    </p>
  </footer>
);

export default Footer;
