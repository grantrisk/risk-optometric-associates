import Container from "@/components/Container";
import styles from "@/styles/Review.module.css";
import Head from "next/head";
import { FaMapPin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Risk Optometric Associates PA</title>
        <meta name="description" content="Risk Optometrics Associates Eye Care Practice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main>
          <div className={styles.headSection}>
            <h1>Leave A Review!</h1>
            <p>How do I do it?</p>
            <ol>
              <li>Choose the location you visited by clicking on the address below.</li>
              <li>You will be redirected to the Google Reviews page for the selected location.</li>
              <li>If you&apos;re not already signed in, sign in to your Google account.</li>
              <li>
                Rate your experience using the 5-star rating system, and add any additional comments
                in the text box.
              </li>
              <li>When you&apos;re done, click &quot;Post&quot; to submit your review.</li>
            </ol>
          </div>

          <div className={styles.locationSection}>
            <h2>
              <FaMapPin /> Pick Your Location!
            </h2>
            <div className={styles.location}>
              <ul>
                <li>
                  <a
                    href="https://g.page/r/CdVVPPZLcXOcEAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>7701 S Raeford Rd</p>
                    <p>Fayetteville, NC 28304</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://g.page/r/CSZgC4_9rh6TEAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>4601 Ramsey St</p>
                    <p>Fayetteville, NC 28311</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://g.page/r/CSlE1NhW0rY5EAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>1550 Skibo Rd</p>
                    <p>Fayetteville, NC 28303</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://g.page/r/CQO9fQZekUw1EAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>250 Highlands Square Dr</p>
                    <p>Hendersonville, NC 28792</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://g.page/r/Cd0P3n_HeJfuEAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>601 Souter Pl</p>
                    <p>Fort Bragg, NC 28307</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://g.page/r/CdM6CFHKIV65EAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>3030 N Main St</p>
                    <p>Hope Mills, NC 28348</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://g.page/r/CRK7iBJjk_doEAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>2025 N Marine Blvd</p>
                    <p>Jacksonville, NC 28546</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://g.page/r/CRdddoW2aaZ_EAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>250 Turner St</p>
                    <p>Aberdeen, NC 28315</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
