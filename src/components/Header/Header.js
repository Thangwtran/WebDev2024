import React from 'react';
import styles from './Header.module.scss'; 

function Header() {
  return (
    <header className={styles["site-header"]}>
      <div>
        <a href ="http://localhost:3000/">
          <h1>USTH Exchange</h1>
        </a>
      </div>
      <ul className={styles["header-nav-links"]}>
        <li>
          <a href="#all-sites">All Sites</a>
        </li>
        <li>
          <a href="#top-users">Top 400 Users</a>
        </li>
        <li>
          <a href="#digests">Digests</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
