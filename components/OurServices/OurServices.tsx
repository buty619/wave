import * as React from 'react';

//Styles
import styles from './OurServices.module.scss';

const OUR_SERVICES = [
  '/images/ourServices/img3.png',
  '/images/ourServices/img5.png',
  '/images/ourServices/img6.png',
  '/images/ourServices/img2.png',
  '/images/ourServices/img4.jpg',
  '/images/ourServices/img1.jpg',
]

const OurServices: React.FC = () => (
  <section className={styles.container}>
    <h1>
      <span>NUESTROS</span>
      <span>SERVICIOS</span>
    </h1>
    <span className={styles.line} />
    <div className={styles.services}>
      {OUR_SERVICES.map((img, i)=>(
        <img src={img} alt={img} key={i}/>
      ))}
    </div>
  </section>
);

export default OurServices;
