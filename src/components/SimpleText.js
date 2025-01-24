import React from 'react';
import './SimpleText.css';

const SimpleText = () => {
  return (
    <section className="simple-text-section">
      <h2 className="simple-text-header">Miksi minun kanssani kannattaa työskennellä?</h2>
      <ul className="simple-text-list">
        <li>Tuloksellista myyntiä yli 10 vuotta</li>
        <li>Sertifioitu koulutus nykyaikaisiin myynnin prosesseihin</li>
        <li>Jatkuva itse oppiminen, olen myös itse mentoroitavana</li>
        <li>Erikoistunut nopeita tuloksia tuottavaan markkinointiin</li>
        <li>Ainutlaatuinen lähestymistapa, jota et löydä muilta konsulteilta</li>
      </ul>
    </section>
  );
};

export default SimpleText;
