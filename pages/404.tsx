import Head from "next/head";
import styles from "@/styles/404.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Risk Optometric Associates, PA</title>
        <meta
          name="description"
          content="Risk Optometrics Associates Eye Care Practice"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <main className={styles.main}>
          <h1>404 Error Page</h1>
          <h3>The page you are trying to access does not exist.</h3>
          <Link href="/">
            <p className={styles.returnButton}>Return to Home Page</p>
          </Link>
        </main>
      </>
    </>
  );
}
