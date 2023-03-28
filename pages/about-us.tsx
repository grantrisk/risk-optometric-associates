import Container from "@/components/Container";
import andrewlovsin from "@/public/images/doctors/andrewlovsin.webp";
import anthonywoolet from "@/public/images/doctors/anthonywoolet.webp";
import brandichavis from "@/public/images/doctors/brandichavis.webp";
import carlenerosadomartin from "@/public/images/doctors/carlenerosadomartin.webp";
import glennlikens from "@/public/images/doctors/glennlikens.webp";
import jennastoddard from "@/public/images/doctors/jennastoddard.webp";
import karenbrown from "@/public/images/doctors/karenbrown.png";
import kentrisk from "@/public/images/doctors/kentrisk.webp";
import susanhendrix from "@/public/images/doctors/susanhendrix.webp";
import styles from "@/styles/AboutUs.module.css";
import Head from "next/head";
import Image from "next/image";
import { FaStethoscope } from "react-icons/fa";
import { RiHandHeartLine } from "react-icons/ri";

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
        <main className={styles.main}>
          <div className={styles.ourMission}>
            <h1>
              {" "}
              <RiHandHeartLine /> Our Mission
            </h1>
            <p>
              Risk Optometric is a family owned and operated practice. We strive to see everything
              we do from our patient&apos;s point of view. Our eye doctors have been with the
              company for many years. In fact, most of our eye doctors have been with the company
              for over a decade. We have been in business for over 20 years and have provided eye
              exams and eye care to over 200,000 patients in our surrounding communities. We hope
              you join our ever expanding family of patients.
            </p>
            <div className={styles.youtubeVideo}>
              <iframe
                style={{ width: "100%", height: "100%" }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/o2KDYWpkZfk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={styles.ourDoctors}>
            <h1>
              <FaStethoscope />
              Our Doctors
            </h1>
            <p>
              Risk Optometric only selects the best eye doctors to join our practice. Our eye
              doctors are all licensed by the state of North Carolina and we are members of the
              American Optometric Association and the North Carolina State Optometric Society.
            </p>
            <div className={styles.doctorsContainer}>
              <div className={styles.doctor}>
                <Image src={kentrisk} alt="Dr. Kent J Risk" width={200} height={200} />
                <div className={styles.doctorInfo}>
                  <h2>Dr. Kent J Risk</h2>
                </div>
              </div>
              <div className={styles.doctor}>
                <Image src={andrewlovsin} alt="Dr. Andrew J. Lovsin" width={200} height={200} />
                <div className={styles.doctorInfo}>
                  <h2>Dr. Andrew J. Lovsin</h2>
                </div>
              </div>
              <div className={styles.doctor}>
                <Image src={anthonywoolet} alt="Dr. Anthony Woolet" width={200} height={200} />
                <div className={styles.doctorInfo}>
                  <h2>Dr. Anthony Woolet</h2>
                </div>
              </div>
              <div className={styles.doctor}>
                <Image src={brandichavis} alt="Dr. Brandi Chavis" width={200} height={200} />
                <div className={styles.doctorInfo}>
                  <h2>Dr. Brandi Chavis</h2>
                </div>
              </div>
              <div className={styles.doctor}>
                <Image
                  src={carlenerosadomartin}
                  alt="Dr. Carlene Rosado-Martin"
                  width={200}
                  height={200}
                />
                <div className={styles.doctorInfo}>
                  <h2>Dr. Carlene Rosado-Martin</h2>
                </div>
              </div>
              <div className={styles.doctor}>
                <Image src={glennlikens} alt="Dr. E. Glenn Likens" width={200} height={200} />
                <div className={styles.doctorInfo}>
                  <h2>Dr. E. Glenn Likens</h2>
                </div>
              </div>
              <div className={styles.doctor}>
                <Image src={jennastoddard} alt="Dr. Jenna E. Stoddard" width={200} height={200} />
                <div className={styles.doctorInfo}>
                  <h2>Dr. Jenna E. Stoddard</h2>
                </div>
              </div>
              <div className={styles.doctor}>
                <Image src={karenbrown} alt="Dr. Karen G. Brown" width={200} height={200} />
                <div className={styles.doctorInfo}>
                  <h2>Dr. Karen G. Brown</h2>
                </div>
              </div>
              <div className={styles.doctor}>
                <Image src={susanhendrix} alt="Dr. Susan W. Hendrix" width={200} height={200} />
                <div className={styles.doctorInfo}>
                  <h2>Dr. Susan W. Hendrix</h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
