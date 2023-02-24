import Container from "@/components/Container";
import blueCross from "@/public/images/insurance/bluecrossblueshield_north_carolina.svg";
import cec from "@/public/images/insurance/cec.svg";
import eye_med from "@/public/images/insurance/eye-med.svg";
import humana from "@/public/images/insurance/humana.svg";
import medicaid from "@/public/images/insurance/medicaid.svg";
import medicare from "@/public/images/insurance/medicare.svg";
import spectra from "@/public/images/insurance/spectra.svg";
import superior_vision from "@/public/images/insurance/superior-vision.svg";
import tricare from "@/public/images/insurance/tricare.svg";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import { BsFillFileArrowDownFill } from "react-icons/bs";
import { FaClipboardList, FaMapPin, FaWpforms } from "react-icons/fa";

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
          <div className={styles.headSection}>
            <div>
              <h1>Risk Optometric</h1>
              <h1>Associates</h1>
              <p>
                Established for over 20 years, Risk Optometric is a family-owned
                and operated practice that puts patients first.
              </p>
            </div>
          </div>
          <div className={styles.insuranceSection}>
            <h2>
              <FaWpforms /> Insurance
            </h2>
            <p>
              We accept most major insurance plans including the following
              listed below. Please call our office to verify your insurance
              plan.
            </p>
            <div className={styles.insuranceImages}>
              <Image
                src={blueCross}
                alt="Blue Cross Blue Shield"
                height={100}
              />
              <Image src={cec} alt="Community Eye Care" height={100} />
              <Image src={tricare} alt="Tricare" height={100} />
              <Image src={eye_med} alt="Eye Med" height={100} />
              <Image src={spectra} alt="Spectra" height={100} />
              <Image src={superior_vision} alt="Superior Vision" height={100} />
              <Image src={medicaid} alt="Medicaid" height={100} />
              <Image src={medicare} alt="Medicare" height={100} />
              <Image src={humana} alt="Humana" height={100} />
            </div>
          </div>
          <div className={styles.locationSection}>
            <h2>
              <FaMapPin /> Locations
            </h2>
            <p>
              We have 8 locations in the NC area. Please call the location
              nearest you to schedule an appointment.
            </p>
            <div className={styles.location}>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/maps?q=7701+S+Raeford+Rd%2C+Fayetteville%2C+NC+28304"
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
                    href="https://www.google.com/maps?q=4601+Ramsey+St%2C+Fayetteville%2C+NC+28311"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>4601 Ramsey St</p>
                    <p>Fayetteville, NC 28311</p>
                  </a>
                  <a href="tel:9104884674">(910) 488-4674</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps?q=1550+Skibo+Rd%2C+Fayetteville%2C+NC+28303"
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
                    href="https://www.google.com/maps?q=250+Highlands+Square+Dr%2C+Hendersonville%2C+NC+28792"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>250 Highlands Square Dr</p>
                    <p>Hendersonville, NC 28792</p>
                  </a>
                  <a href="tel:8286967898">(828) 696-7898</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps?q=601+Souter+Pl%2C+Fort+Bragg%2C+NC+28307"
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
                    href="https://www.google.com/maps?q=3030+N+Main+St%2C+Hope+Mills%2C+NC+28348"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>3030 N Main St</p>
                    <p>Hope Mills, NC 28348</p>
                  </a>
                  <a href="tel:9104246413">(910) 424-6413</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps?q=2025+N+Marine+Blvd%2C+Jacksonville%2C+NC+28546"
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
                    href="https://www.google.com/maps?q=250+Turner+St%2C+Aberdeen%2C+NC+28315"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>250 Turner St</p>
                    <p>Aberdeen, NC 28315</p>
                  </a>
                  <a href="tel:9106951034">(910) 695-1034</a>
                </li>
              </ul>
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
                <BsFillFileArrowDownFill />
                Tricare
              </a>
              <a
                className={styles.formLink}
                href="/documents/Medicare_Form.pdf"
                target="_blank"
              >
                <BsFillFileArrowDownFill />
                Medicare
              </a>
              <a
                className={styles.formLink}
                href="/documents/Other_Insurance_Form.pdf"
                target="_blank"
              >
                <BsFillFileArrowDownFill />
                Other Insurance
              </a>
              <a
                className={styles.formLink}
                href="/documents/Intermediate_Exam_Form_No_Insurance.pdf"
                target="_blank"
              >
                <BsFillFileArrowDownFill />
                Self Pay (No Insurance)
              </a>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
