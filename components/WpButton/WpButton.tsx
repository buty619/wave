import * as React from 'react';

//Styles
import styles from './WpButton.module.scss';

const WpButton: React.FC = () => (
  <a
  href="https://api.whatsapp.com/send?phone=573118164585&text=Ola%20%F0%9F%8C%8A%2C%20quisiera%20averiguar%20por%20uno%20de%20sus%20servicios."
  target="_blank"
  data-action="share/whatsapp/share"
  rel="noreferrer">
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="/images/whatsapp.svg" />
      </div>
    </div>
  </a>
);

export default WpButton;
