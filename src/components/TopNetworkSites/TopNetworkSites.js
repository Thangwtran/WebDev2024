import React, { useState } from "react";
import styles from './TopNetworkSites.module.scss';
import linksData from '../../_SAMPLE_DATA/links.json';

function TopNetworkSites() {
    const [links] = useState(linksData);

    return (
        <div className={styles.container}>
            <div className={styles["heading"]}>Top Network Sites</div>
            <nav className={styles["topnetworksites-nav-links"]}>
                {links.map(link => (
                    <a key={link.href} href={link.href} className={styles["topnetworksites-link"]}>
                        <img
                            className={styles["topnetworksites-logo"]}
                            src={link.imgSrc}
                            alt={link.altText}
                        />
                        {link.name}
                    </a>
                ))}
            </nav>
            <p className={styles["topnetworksites-footer"]}>
                <a href="https://stackexchange.com/sites" className={styles["topnetworksites-footer"]}>
                    <b>View all 182 sites »</b>
                </a>
            </p>
        </div>
    );
}

export default TopNetworkSites;
