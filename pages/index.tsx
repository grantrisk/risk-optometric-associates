import Container from "@/components/Container";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { BsDownload } from "react-icons/bs";
import { FaClipboardList, FaMapPin, FaWpforms } from "react-icons/fa";

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
      <Container>
        <main className={styles.main}>
          <div className={styles.headSection}>
            <div>
              <h1>Risk Optometric</h1>
              <h1>Associates, PA</h1>
              <p>
                Established for over 20 years, Risk Optometric is a family-owned
                optometric practice. We provide comprehensive eye exams for
                glasses, contacts, and the treatment of eye diseases.
              </p>
            </div>
          </div>
          <div className={styles.locationSection}>
            <h2>
              <FaMapPin /> Locations
            </h2>
            <p>
              We have 6 locations in the NC area. Please call the location
              nearest you to schedule an appointment.
            </p>
            <div className={styles.location}>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Risk+Optometric+Associates,+PA/@35.0244433,-79.0552085,17z/data=!3m1!4b1!4m6!3m5!1s0x89ab3e52a155d5a5:0x9c73714bf63c55d5!8m2!3d35.0244433!4d-79.0530198!16s%2Fg%2F1v29cx2v"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>7701 S Raeford Rd</p>
                    <p>Fayetteville, NC 28304</p>
                  </a>
                  <a href="tel:9108260100">(910) 826-0100</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Risk+Optometric+Associates,+PA/@35.0815221,-78.9588925,17z/data=!3m1!4b1!4m6!3m5!1s0x89ab6b142d902c5b:0x39b6d256d8d44429!8m2!3d35.0815221!4d-78.9567038!16s%2Fg%2F1v9lcnb4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>1550 Skibo Rd</p>
                    <p>Fayetteville, NC 28303</p>
                  </a>
                  <a href="tel:9109732366">(910) 973-2366</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Risk+Optometric+Associates,+PA/@35.3489201,-82.4398423,17z/data=!3m1!4b1!4m6!3m5!1s0x8859e9c98405ed6f:0x354c915e067dbd03!8m2!3d35.3489201!4d-82.4376536!16s%2Fg%2F1vxzbbfz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>250 Highlands Square Dr</p>
                    <p>Hendersonville, NC 28792</p>
                  </a>
                  <a href="tel:8283820412">(828) 382-0412</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Risk+Optometric+Associates,+PA/@35.1569351,-78.9795608,17z/data=!3m1!4b1!4m6!3m5!1s0x89ab69818cc7004f:0xee9778c77fde0fdd!8m2!3d35.1569351!4d-78.9773721!16s%2Fg%2F12642hwxs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>601 Souter Pl</p>
                    <p>Fort Bragg, NC 28307</p>
                  </a>
                  <a href="tel:9104970082">(910) 497-0082</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Risk+Optometric+Associates,+PA/@34.7797303,-77.3948936,17z/data=!4m10!1m2!2m1!1sRisk+Optometric+2025+N+Marine+Blvd,+Jacksonville,+NC+28546!3m6!1s0x89a910885d3e9f2f:0x68f793631288bb12!8m2!3d34.7794336!4d-77.3928589!15sCjpSaXNrIE9wdG9tZXRyaWMgMjAyNSBOIE1hcmluZSBCbHZkLCBKYWNrc29udmlsbGUsIE5DIDI4NTQ2IgOIAQGSAQtvcHRvbWV0cmlzdOABAA!16s%2Fg%2F1tfrc0y5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>2025 N Marine Blvd</p>
                    <p>Jacksonville, NC 28546</p>
                  </a>
                  <a href="tel:9109371297">(910) 937-1297</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Risk+Optometric+Associates,+PA/@35.1597615,-79.4263226,17z/data=!3m1!4b1!4m6!3m5!1s0x8854b4f632ce3759:0x7fa669b685765d17!8m2!3d35.1597615!4d-79.4241339!16s%2Fg%2F11ckr_nf68"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>250 Turner St</p>
                    <p>Aberdeen, NC 28315</p>
                  </a>
                  <a href="tel:9106950750">(910) 695-0750</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Risk+Optometric+Associates,+PA/@35.1232899,-78.8869237,17z/data=!3m1!4b1!4m6!3m5!1s0x89ab6dcb471f93fd:0x931eaefd8f0b6026!8m2!3d35.12329!4d-78.882439!16s%2Fg%2F1tdjxwqw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>4601 Ramsey St</p>
                    <p>Fayetteville, NC 28311</p>
                  </a>
                  <a>Permanently Closed</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Risk+Optometric+Associates,+PA/@34.9801747,-78.967232,17z/data=!4m10!1m2!2m1!1sRisk+Optometric+3030+N+Main+St,+Hope+Mills,+NC+28348!3m6!1s0x89ab142f2561648f:0xb95e21ca51083ad3!8m2!3d34.9799568!4d-78.9644169!15sCjRSaXNrIE9wdG9tZXRyaWMgMzAzMCBOIE1haW4gU3QsIEhvcGUgTWlsbHMsIE5DIDI4MzQ4IgOIAQGSAQtvcHRvbWV0cmlzdOABAA!16s%2Fg%2F1w2y_9l5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>3030 N Main St</p>
                    <p>Hope Mills, NC 28348</p>
                  </a>
                  <a>Permanently Closed</a>
                </li>
              </ul>
            </div>
            <div className={styles.locationMap}>
              <iframe
                style={{ width: "100%", height: "100%" }}
                src="https://www.google.com/maps/d/u/0/embed?mid=1DSJ1cflVZieNCskm1KqOGYkOlygT4sA&ehbc=2E312F"
                width="640"
                height="480"
                loading="lazy"
                title="Risk Optometric Associates Location Map"
              ></iframe>
            </div>
          </div>
          <div className={styles.formSection}>
            <h2>
              {" "}
              <FaClipboardList /> Come Prepared
            </h2>
            <p>
              Fill out our form and contact us to schedule your appointment.
            </p>
            <p>Follow these steps for a faster sign-in process!</p>
            <ol>
              <li>Find the right form(s) for you</li>
              <li>Click on the Form you want</li>
              <li>
                Download the .pdf file on your computer and print it out or fill
                it out online
              </li>
              <li>
                Fill out the electronic form to the best of your knowledge and
                we&apos;ll help with the rest
              </li>
              <li>Bring the forms in with you for your visit</li>
            </ol>
            <div className={styles.formLinks}>
              <a
                className={styles.formLink}
                href="/documents/Tricare_Form.pdf"
                target="_blank"
              >
                <div>
                  <BsDownload />
                </div>
                <p>Tricare</p>
              </a>
              <a
                className={styles.formLink}
                href="/documents/Medicare_Form.pdf"
                target="_blank"
              >
                <div>
                  <BsDownload />
                </div>
                <p>Medicare</p>
              </a>
              <a
                className={styles.formLink}
                href="/documents/Other_Insurance_Form.pdf"
                target="_blank"
              >
                <div>
                  <BsDownload />
                </div>
                <p>Other Insurance</p>
              </a>
              <a
                className={styles.formLink}
                href="/documents/Intermediate_Exam_Form_No_Insurance.pdf"
                target="_blank"
              >
                <div>
                  <BsDownload />
                </div>
                <p>
                  Self Pay <br></br>(No Insurance)
                </p>
              </a>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
