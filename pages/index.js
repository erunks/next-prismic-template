import Head from 'next/head'
import map from 'lodash/map';
import GridCard from '../components/GridCard.js';
import styles from '../styles/Home.module.scss';


const Home = () => {
  const cards = [
    <GridCard
      href={"https://nextjs.org/docs"}
    >
      <h3>Documentation &raquo;</h3>
      <p>Find in-depth information about Next.js features and API.</p>
    </GridCard>,
    <GridCard
      href={"https://nextjs.org/learn"}
    >
      <h3>Learn  &raquo;</h3>
      <p>Learn about Next.js in an interactive course with quizzes!</p>
    </GridCard>,
    <GridCard
      href={"https://github.com/vercel/next.js/tree/master/examples"}
    >
      <h3>Examples  &raquo;</h3>
      <p>Discover and deploy boilerplate example Next.js projects.</p>
    </GridCard>,
    <GridCard
      href={"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"}
    >
      <h3>Deploy  &raquo;</h3>
      <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
    </GridCard>
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          { map(cards, (card) => card) }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          Powered by &nbsp;
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
};

export default Home;
