import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Globe } from "../Icons/Globe";
import { Star } from "../Icons/Star";
import { Basket } from "../Icons/Basket";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={`${styles.navigation} contentWidth`}>
        <Link href="/"><Image
          className="logo"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /></Link>

        <div className={styles.navLinks}>
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/apparels">
            <span>Apparels</span>
          </Link>
          <Link href="/accessories">
            <span>Accessories</span>
          </Link>
          <Link href="/merchandise">
            <span>Merchandise</span>
          </Link>
        </div>

        <div className={styles.navIcons}>
          <Globe/>
          <Star/>
          <Basket/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
