"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";
import { Menu } from "../Icons/Menu";
import Close from "../Icons/Close";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }
  
  return (
    <>
      <button className={styles.hamburger} onClick={() => setIsOpen(true)}>
        <Menu />
      </button>

      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
        onClick={closeMenu}
      />

      {isOpen && (
        <div
          className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}
        >
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            <Close />
          </button>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/apparels" onClick={() => setIsOpen(false)}>
            Apparels
          </Link>
          <Link href="/accessories" onClick={() => setIsOpen(false)}>
            Accessories
          </Link>
          <Link href="/merchandise" onClick={() => setIsOpen(false)}>
            Merchandise
          </Link>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
