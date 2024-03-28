"use client";
import { Iceland } from "next/font/google";

import styles from "./style.module.css";
import localFont from "next/font/local";
import Link from "next/link";

const inter = Iceland({ weight: ["400"], subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className={styles.navb}>
      {/* <!-- <img src=".\philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg" alt="image" /> --> */}
      <Link href={"/"}>
<<<<<<< Updated upstream
        <h1 className={`${inter.className} ${styles.logo}`}>Adrenaline Junkie</h1>
      </Link>

      <div className={`${inter.className} ${styles.links}`}>
        <Link href="/states">About </Link>
        <Link href="/states">Sports</Link>
        <Link href="/states">States</Link>
=======
        <h1 className={`${inter.className} ${styles.logo}`}>
          Adrenaline Junkie
        </h1>
      </Link>

      <div className={`${inter.className} ${styles.links}`}>
        <Link href="/d/north">North States</Link>
        <Link href="/d/south">South States</Link>
        <Link href="/d/east">East States</Link>
        <Link href="/d/west">West States</Link>
>>>>>>> Stashed changes
      </div>
    </nav>
  );
}
