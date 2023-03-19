import styles from "@/styles/Nav.module.css";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/risk-optometric-associates-horizontal.svg";

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
  const [isHamburgerActive, setHamburgerActive] = useState(false); // Add this line

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;

  const closeMenu = () => {
    setMobileMenuVisible(false);
    setHamburgerActive(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Image src={logo} alt="Risk Optometric Associates Logo" height={50} />
        <button
          className={cn(styles.hamburger, {
            [styles.active]: isHamburgerActive, // Add this line
          })}
          onClick={() => {
            setMobileMenuVisible(!isMobileMenuVisible);
            setHamburgerActive(!isHamburgerActive); // Add this line
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
            <NavItem href="/" text="Home" closeMenu={closeMenu}/>
            <NavItem href="/about-us" text="About Us" closeMenu={closeMenu}/>
          </ul>
        </div>
      </nav>
      <>{children}</>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <h3>Risk Optometric Associates</h3>
            <p>
              4601 Ramsey St
              <br />
              Fayetteville, NC 28311
            </p>
            <p>
              <a href="tel:910-488-4674">(910) 488-4674</a>
            </p>
            <br />
            <div className={styles.emergency}>
              <p>Emergency Number</p>
              <p>
                <a href="tel:910-527-9517">(910) 527-9517</a>
              </p>
            </div>
          </div>
          <div className={styles.footerRight}>
            <h3>Hours</h3>
            <p>
              Monday: 9:00am - 5:00pm
              <br />
              Tuesday: 9:00am - 5:00pm
              <br />
              Wednesday: 9:00am - 5:00pm
              <br />
              Thursday: 9:00am - 5:00pm
              <br />
              Friday: 9:00am - 5:00pm
              <br />
              Saturday: 9:00am - 5:00pm
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
