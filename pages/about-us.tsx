import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Risk Optometric Associates</title>
        <meta
          name="description"
          content="Risk Optometrics Associates Eye Care Practice"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main className={styles.main}>
          <h1>About Us</h1>
        </main>
      </Container>
    </>
  );
}
