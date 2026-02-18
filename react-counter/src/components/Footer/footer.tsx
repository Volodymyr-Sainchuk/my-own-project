import styles from "./footer.module.css";

type FootProps = {
  dark: boolean;
};

function Footer({ dark }: FootProps) {
  return (
    <footer className={`${styles.footer} ${dark ? styles.footerDark : styles.footerLight}`}>
      <div className={styles.container}>
        <div className={styles.left}>© {new Date().getFullYear()} My React App</div>

        <ul className={styles.links}>
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
      </div>
    </footer>
  );
}

export default Footer;
