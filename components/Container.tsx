import styles from "@/styles/Nav.module.css";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/risk-optometric-associates-horizontal.svg";
import { FaArrowUp } from "react-icons/fa";
import instagramLogo from "@/public/images/icons/instagram.svg";
import facebookLogo from "@/public/images/icons/facebook.svg";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const handleScroll = () => {
      const scrollY =
        typeof document !== "undefined" ? document.body.scrollTop : 0;
      if (scrollY > 500) {
        if (!isVisible) setIsVisible(true);
      } else {
        if (isVisible) setIsVisible(false);
      }
    };

    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const handleClick = () => {
    setTimeout(() => {
      if (typeof document !== "undefined") {
        document.body.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.isVisible : ""}`}
      onClick={handleClick}
      style={{
        transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
      }}
    >
      <FaArrowUp />
    </button>
  );
}

function NavItem({ href, text, closeMenu }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = (e) => {
    if (isActive) {
      e.preventDefault();
      closeMenu();
    }
  };

  return (
    <NextLink href={href} passHref>
      <div onClick={handleClick}>
        <span>{text}</span>
      </div>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;

  const closeMenu = () => {
    setMobileMenuVisible(false);
    setHamburgerActive(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <NextLink href="/" passHref className={styles.companyLogo}>
          <Image src={logo} alt="Risk Optometric Associates Logo" height={60} />
        </NextLink>
        <button
          className={cn(styles.hamburger, {
            [styles.active]: isHamburgerActive,
          })}
          onClick={() => {
            setMobileMenuVisible(!isMobileMenuVisible);
            setHamburgerActive(!isHamburgerActive);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={cn(styles.menu, {
            [styles.menuVisible]: isMobileMenuVisible,
          })}
        >
          <ul>
            <NavItem href="/" text="Home" closeMenu={closeMenu} />
            <NavItem href="/about-us" text="About Us" closeMenu={closeMenu} />
            <NavItem
              href="/review"
              text="Leave A Review"
              closeMenu={closeMenu}
            />
          </ul>
        </div>
      </nav>
      <>{children}</>
      <ScrollToTopButton />
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <h3>Risk Optometric Associates, PA</h3>
            <div className={styles.emergency}>
              <p>After Hours Emergency Number:</p>
              <a href="tel:910-527-9517">(910) 527-9517</a>
              <p>
                If we do not contact you in 10 minutes please go to the local
                emergency room.
              </p>
            </div>
            <div className={styles.nonEmergency}>
              <p>For non-emergency questions, please contact us at:</p>
              <p>
                <a href="mailto:kentrisk@nceyedocs.com?subject=Non-emergency%20Question&amp;body=Dear%20Team,%0D%0A%0D%0APlease%20find%20my%20non-emergency%20question%20below:%0D%0A%0D%0A[Your%20question%20here]%0D%0A%0D%0AThank%20you.">
                  kentrisk@nceyedocs.com
                </a>
              </p>
            </div>
            <div className={styles.copyright}>
              <p>
                &copy; {new Date().getFullYear()} Risk Optometric Associates,
                PA. All Rights Reserved.
              </p>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.social}>
              <NextLink
                href="https://www.instagram.com/riskoptometricassociates/"
                passHref
                target="_blank"
              >
                <Image
                  src={instagramLogo}
                  alt="Risk Optometric Associates Instagram"
                  height={50}
                />
              </NextLink>
              <NextLink
                href="https://www.facebook.com/nceyedocs.roa"
                passHref
                target="_blank"
              >
                <Image
                  src={facebookLogo}
                  alt="Risk Optometric Associates Facebook"
                  height={50}
                />
              </NextLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
