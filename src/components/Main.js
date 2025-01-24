import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import profileImage from '../images/niko1.jpg'; // Adjust the path accordingly
import WorkExamples from './WorkExamplesPage'; // Import the WorkExamples component
import backgroundImage from '../images/tausta1.png';
import ServicesSection from './ServicesSection';
import TextSection from './TextSection';
import SimpleText from './SimpleText';

const Main = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    // Validate form fields
    if (!firstName || !lastName || !email || !message) {
      setErrorMessage("Please fill in all the required fields.");
      return;
    }

    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!regex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Clear error messages
    setErrorMessage("");

    // Send email using EmailJS
    //Nikon TemplateID : template_onuzjja, service_c0wruvq

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Environment variable
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Environment variable
        {
          user_name: `${firstName} ${lastName}`,
          user_email: email,
          message: message
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Environment variable
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Viestisi on lähetetty!");
          setFormData({ firstName: '', lastName: '', email: '' });
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Viestin lähetyksessä tapahtui virhe, ole yhteydessä info@tinkerit.fi suoraan.");
        }
      );
  };

  return (
    <main className="App-main">
      {/* Hero Section Container */}
      <div className="hero-section-container">
        <div className="hero-image">
          <img
            src={backgroundImage} // Use the imported image
            alt="Taustakuva"
            className="hero-image-img"
          />
        </div>

        <div className="header-left-container">
          <h2 className="left-header">
            Rakenna ennustettava myyntiprosessi, joka tuo asiakkaita joka kuukausi
          </h2>
        </div>

        <div className="header-right-container">
          <h2 className="right-header">
            Lopeta rahan tuhlaaminen satunnaiseen mainontaan
          </h2>
        </div>
      </div>

      <div>
        <TextSection />
      </div>

      <div>
        <ServicesSection />
      </div>

      {/* Blue Section Container */}
      <div className="blue-section-container">
        <div className="blue-section">
          <h2 className="blue-section-text">
            Autoin puunkaatoyrittäjälle 17 000€ liikevaihtoa kahdessa viikossa systemaattisella myyntiprosessilla. Varaa
            ilmainen konsultaatio ja katsotaan yhdessä jos ja miten voin auttaa
          </h2>
          <a href="#contact" className="contact-me-button">
            Ota yhteyttä
          </a>
        </div>
      </div>

      {/* Content Section Container */}
      <div className="header-before-image">
        <h1 className="big-header">Kuka minä olen?</h1>
        <h2 className="small-header">Ammatti & Niko Hautamäki</h2>
      </div>
      <div className="content-section-container">
        <div className="content">
          <img
            src={profileImage} // Use the imported image
            alt="Niko Hautamäki"
            className="profile-pic"
          />
          <p className="description">
          Olen <a style={{ color: '#ea656d' }}>Niko Hautamäki</a>, myynnin ja markkinoinnin MacGyver, joka uskoo, että jokaisella yrittäjällä on oikeus selkeään ja toimivaan <a style={{ color: '#ea656d' }}>myyntiprosessiin</a>. Kaikki alkoi, kun olin myyjänä isossa organisaatiossa, jossa markkinointi ei oikein tuottanut riittävää määrää tulosta. Kaikkea kokeiltiin. Täytyi itse alkaa kehittämään keinoja ja prosesseja joilla tulosta saataisiin. Ja löysinkin toimivat prosessit. Voitin myynnin kilpailuja ja pääsin palkintomatkoille. Sen jälkeen olenkin auttanut muita rakentamaan järjestelmällisiä prosesseja jotka tuottavat tulosta kuukaudesta toiseen.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section" id="contact">
        <h1>Pyydä tarjous</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="firstName">Etunimi (Pakollinen) </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Sukunimi (Pakollinen)</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email (Pakollinen)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Viesti (Pakollinen)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <button type="submit" className="submit-button">Lähetä</button>
        </form>
      </div>

      <div>
        <SimpleText />
      </div>
    </main>
  );
};

export default Main;
