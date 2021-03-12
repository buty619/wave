import * as React from 'react';

//Styles
import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <section className={styles.container}>
    <div className={styles.footer}>
      <h1>CONÉCTATE CON NOSOTROS</h1>
      <h2>Conversemos sobre nuestro proyecto</h2>
      <div className={styles.social}>
        <a href="https://instagram.com/oladigital_?igshid=wqbgzgk1wcl9" target="_blank" rel="noreferrer">
          <img src='/images/facebook.svg' alt="facebook"/>
        </a>
        <a href="https://instagram.com/oladigital_?igshid=wqbgzgk1wcl9" target="_blank" rel="noreferrer">
          <img src='/images/instagram.svg' alt="instagram"/>
        </a>
      </div>
    </div>
  </section>
);

export default Footer;
