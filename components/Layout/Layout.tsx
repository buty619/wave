import * as React from 'react';
import Head from 'next/head';
import classnames from 'classnames';
import WpButton from '../WpButton'

//Styles
import styles from './Layout.module.scss';

interface Props {
  children?: JSX.Element[];
}

const Layout: React.FC<Props> = ({ children }) => {

  const [loanding, setLoanding] = React.useState(true);

  React.useEffect(()=>{setTimeout(()=>setLoanding(false),7000)},[]);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/logo.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.ico"></link>
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>OLA - Sumate a esta oLA</title>
      </Head>
      <main>{children}</main>
      <div className={classnames(styles.background, !loanding && styles.hide)}>
        <div className={classnames(styles.loading, styles.wave)}>
          CARGANDO
        </div>
      </div>
      <WpButton />
    </div>
  );
};

export default Layout;
