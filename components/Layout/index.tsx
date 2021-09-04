/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          NextJS Basic |
          {' '}
          {pageTitle}
        </title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}