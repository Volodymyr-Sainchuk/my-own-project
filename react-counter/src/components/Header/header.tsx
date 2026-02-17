import React from "react";
import styles from "./header.module.css";
import { useState } from "react";

type HeaderProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ dark, setDark }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} ${dark ? styles.headerDark : styles.headerLight}`}>
      <a href="./" className={styles.logo}>
        My React App
      </a>
      <div className={styles.burger} onClick={() => setMenuOpen((prev) => !prev)}>
        =
      </div>
      <ul className={`${styles.navigationHeader} ${menuOpen ? styles.active : ""}`}>
        <li className={styles.navList}>
          <a href="/">Home</a>
        </li>
        <li className={styles.navList}>
          <a href="/about">About</a>
        </li>
        <li className={styles.navList}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button onClick={() => setDark((prev) => !prev)}>{dark ? "Light" : "Dark"}</button>
    </header>
  );
}

export default Header;
