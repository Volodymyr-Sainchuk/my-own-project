import React from "react";
import styles from "./header.module.css";

type HeaderProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ dark, setDark }: HeaderProps) {
  return (
    <header className={dark ? styles.headerDark : styles.headerLight}>
      <a href="./">My React App</a>
      <ul className={styles.navigationHeader}>
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
