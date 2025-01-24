import React from 'react';
import './TextSection.css';

const TextSection = () => {
  return (
    <div className="text-section">
      <div className="problem-description">
        <h2>ONGELMASI?</h2>
        <hr />
        <p>Tunnistatko nämä yrittäjän arjen haasteet?</p>
        <ul>
          <li>Sosiaalisen median päivitykset eivät tuota asiakkaita</li>
          <li>Markkinointiin menee rahaa, mutta tuloksia ei näy</li>
          <li>Myyntiä tulee, jos on tullakseen</li>
          <li>Uusien asiakkaiden saaminen tuntuu sattumanvaraiselta</li>
        </ul>
        <p>
          Et ole yksin näiden haasteiden kanssa. Tapasin hiljattain yrittäjän, joka
          oli joutunut lomauttamaan työntekijöitään, koska asiakkaita ei tullut tarpeeksi.
          Hän oli rakentanut verkkosivut vuosia sitten, ja alussa se riitti saamaan asiakkaita,
          mutta ei enää. Kuulostaako tutulta?
        </p>
      </div>

      <div className="solution-description">
        <h2>RATKAISU</h2>
        <hr />
        <p>Totuus on, että pelkkä somessa päivittäminen tai verkkosivujen olemassaolo ei riitä.</p>
        <p>Tarvitset systemaattisen prosessin, joka:</p>
        <ul>
          <li>Tuo sinulle tasaisesti uusia liidejä</li>
          <li>Muuttaa liidit maksaviksi asiakkaiksi</li>
          <li>Toimii ennustettavasti kuukaudesta toiseen</li>
        </ul>
      </div>
    </div>
  );
};

export default TextSection;
