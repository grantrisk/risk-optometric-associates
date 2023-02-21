import Head from "next/head";
import styles from "@/styles/AboutUs.module.css";
import Container from "@/components/Container";
import Image from "next/image";
import { RiHandHeartLine } from "react-icons/ri";
import { FaStethoscope } from "react-icons/fa";
import cec from "@/public/images/insurance/cec.svg";

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
          <div className={styles.ourMission}>
            <h1>
              {" "}
              <RiHandHeartLine /> Our Mission
            </h1>
            <p>
              Risk Optometric is a family owned and operated practice. We strive
              to see everything we do from our patient&apos;s point of view. Our
              eye doctors have been with the company for many years. In fact,
              most of our eye doctors have been with the company for over a
              decade. We have been in business for over 20 years and have
              provided eye exams and eye care to over 200,000 patients.
              It&apos;s the personal touch we offer with our eye exams that sets
              us apart.
            </p>
          </div>
          <div className={styles.ourDoctors}>
            <h1>
              <FaStethoscope />
              Our Doctors
            </h1>
            <p>
              Risk Optometric only selects the best eye doctors to join our
              practice. Our eye doctors are all licensed and board certified.
            </p>
            <div className={styles.doctor}>
              <div className={styles.doctorInfo}>
                <h2>Dr. Kent J Risk</h2>
                <p>
                  Dr. Risk is married to his high school sweetheart. They have
                  three children. He likes to water ski, play chess, and run
                  with his dog.
                </p>
              </div>
              <Image src={cec} alt="Dr. Kent J Risk" width={200} height={200} />
            </div>
            <div className={styles.doctor}>
              <div className={styles.doctorInfo}>
                <h2>Dr. Brandi Chavis</h2>
                <p>
                  Dr. Brandi Chavis joined Risk Optometric in 2005.
                  <br />
                  <br />
                  Education Bachelor&apos;s in Biology from the University of
                  North Carolina at Chapel Hill in 1999 Doctorate of Optometry
                  from Pennsylvania College of Optometry, 2004 Professional
                  affiliation: American Optometric Association North Carolina
                  State Optometric Society Sandhills Optometric Society
                </p>
              </div>
              <Image src={cec} alt="Dr. Kent J Risk" width={200} height={200} />
            </div>
            <div className={styles.doctor}>
              <div className={styles.doctorInfo}>
                <h2>Dr. Karen G. Brown</h2>
                <p>
                  Dr. Karen Brown joined Risk Optometric in 2009. She practices
                  exclusively in the Hendersonville, NC location.
                  <br />
                  <br />
                  Education Undergraduate degree with Cum Laude from Westfield
                  State College in Westfied, MA, 1992 Doctorate of Optometry
                  from The New England College of Optometry in Boston, MA in
                  1996
                  <br />
                  <br />
                  Professional Affiliation: American Optometric Association
                  North Carolina State Optometric Society She is married with
                  two children. She enjoys spending time with her family,
                  sewing, cooking, and going to the beach.
                </p>
              </div>
              <Image src={cec} alt="Dr. Kent J Risk" width={200} height={200} />
            </div>
            <div className={styles.doctor}>
              <div className={styles.doctorInfo}>
                <h2>Dr. Susan W. Hendrix</h2>
                <p>
                  Dr. Susan Hendrix joined Risk Optometric in 1997. She
                  specializes in primary eye care and contact lens evaluations.
                  This includes routine eye examinations and fitting of contact
                  lenses, medical treatment of diseases and disorders affecting
                  the eye and pre and post-operative patient management.
                  <br />
                  <br />
                  Education Undergraduate Degree from East Carolina University
                  Doctorate of Optometry from Southern College of Optometry
                  Externship at Carolina Eye Associates and Womack Army Hospital
                  Eye Clinic
                  <br />
                  <br />
                  Professional Affiliation: American Optometric Association
                  North Carolina State Optometric Society She and her family
                  live in Raeford, NC
                </p>
              </div>
              <Image src={cec} alt="Dr. Kent J Risk" width={200} height={200} />
            </div>
            <div className={styles.doctor}>
              <div className={styles.doctorInfo}>
                <h2>Dr. E. Glenn Likens</h2>
                <p>
                  Dr. E. Glenn Likens joined Risk Optometric in 2002 and
                  practices in our Jacksonville locations.
                  <br />
                  <br />
                  Education Bachelor&apos;s Degree in Physiological Optics
                  University of Alabama at Birmingham School of Optometry
                  Doctorate of Optometry from the University of Alabama at
                  Birmingham School of Optometry in 1994 Externship at Holland
                  Eye Clinic I Louisburg, North Carolina with emphasis in
                  diagnostic management of ocular disease Memberships Member of
                  North Carolina State Optometric Society Personal Interests A
                  professional fisherman who enjoys salt water inshore fishing
                  Has two sons and likes watching them play sports.
                </p>
              </div>
              <Image src={cec} alt="Dr. Kent J Risk" width={200} height={200} />
            </div>
            <div className={styles.doctor}>
              <div className={styles.doctorInfo}>
                <h2>Dr. Andrew J. Lovsin</h2>
                <p>
                  Dr. Andrew Lovsin joined Risk Optometric in 2003. Dr. Lovsin
                  practices overall primary eye care and surgical co-management.
                  In this capacity, he treats disease, assists patients with
                  their general vision needs, provides contact lens
                  prescriptions and fittings, and administers pre and
                  post-operative surgical care. He enjoys providing care for
                  patients of all ages - from toddlers to senior citizens.
                  Education Undergraduate degrees from Queen&apos;s University
                  in Kingston, Ontario, Canada Magna Cum Laude with a Doctorate
                  of Optometry from the University of Houston, College of
                  Optometry Three externships in Texas with focus on primary eye
                  care, ocular disease, and surgical co-management Dr. Lovsin is
                  married with a young daughter.
                </p>
              </div>
              <Image src={cec} alt="Dr. Kent J Risk" width={200} height={200} />
            </div>
            <div className={styles.doctor}>
              <div className={styles.doctorInfo}>
                <h2>Dr. Carlene Rosado-Martin</h2>
                <p>
                  Carlene Rosado-Martin, O.D., F.A.A.O. Obtained her Bachelor of
                  Science in Biomedical Science from Texas A&M University. She
                  graduated with her Doctorate of Optometry from University of
                  Houston College of Optometry. She specializes in contact
                  lenses, medical optometry, and dry eyes. She was an Adjunct
                  Clinical Faculty member for the Pennsylvania College of
                  Optometry, Southern College of Optometry, and Indiana
                  University College of Optometry. She is a member of the
                  Sandhills District Optometric Society, American Academy of
                  Optometry, and the American Optometric Association. She has
                  also been cited in several publications.
                </p>
              </div>
              <Image src={cec} alt="Dr. Kent J Risk" width={200} height={200} />
            </div>
            <div className={styles.doctor}>
              <div className={styles.doctorInfo}>
                <h2>Dr. Anthony Woolet</h2>
                <p>
                  Dr. Anthony Woolet grew up in Raleigh, North Carolina. After
                  receiving his Bachelor&apos;s Degree in chemistry from North
                  Carolina State University he went on to receive his Doctor of
                  Optometry degree from The Pennsylvania College of Optometry at
                  Salus University in Philadelphia, Pennsylvania. Dr. Woolet is
                  a member of the American Optometric Association and the North
                  Carolina State Optometric Society. He enjoys golfing and
                  spending time with his family. He currently resides in
                  Goldsboro with his wife Maggie and two boys Gavin and Grayden.
                </p>
              </div>
              <Image src={cec} alt="Dr. Kent J Risk" width={200} height={200} />
            </div>
            <div className={styles.doctor}>
              <div className={styles.doctorInfo}>
                <h2>Dr. Hakkam Alsaidi</h2>
                <p>
                  In addition to providing primary care and contact lens
                  fitting, Dr. Alsaidi treats Dry Eye Syndrome, Glaucoma and
                  manages Macular Degeneration along with ocular manifestations
                  of systemic medical conditions such as Diabetes, Hypertension,
                  inflammatory conditions, etc. Education: Graduated Cum Lauda
                  with Bachelor of Science in Biology from East Carolina
                  University. Doctorate of Optometry Degree from Nova
                  Southeastern University. Professional affiliation with
                  American Optometric Association and the North Carolina State
                  Optometric Society Dr. Alsaidi enjoys spending time with
                  family, swimming and enjoying the great outdoors.
                </p>
              </div>
              <Image src={cec} alt="Dr. Kent J Risk" width={200} height={200} />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
