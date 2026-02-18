import React, { useState } from "react";
import styles from "./header.module.css";

type HeaderProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ dark, setDark }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`${styles.header} ${dark ? styles.headerDark : styles.headerLight}`}>
        <a href="./" className={styles.logo}>
          My React App
        </a>

        {/* DESKTOP/TABLET NAV */}
        <ul className={styles.navigationHeader}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* BURGER (mobile only) */}
        <div className={styles.burger} onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        <button onClick={() => setDark((prev) => !prev)}>{dark ? "Light" : "Dark"}</button>
      </header>

      {/* MOBILE MODAL */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="/about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
