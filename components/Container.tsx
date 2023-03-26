import styles from "@/styles/Nav.module.css";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/risk-optometric-associates-horizontal.svg";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const handleScroll = () => {
      const scrollY = typeof document !== "undefined" ? document.body.scrollTop : 0;
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
      style={{ transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out" }}
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
          </ul>
        </div>
      </nav>
      <>{children}</>
      <ScrollToTopButton />
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <h3>Risk Optometric Associates</h3>
            <div className={styles.emergency}>
              <p>After Hours Emergency Number:</p>
              <p>
                <a href="tel:910-527-9517">(910) 527-9517</a>
              </p>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>
              &copy; {new Date().getFullYear()} Risk Optometric Associates. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
