import React from "react";
import styles from "./TourOutro.module.scss";

const TourOutro = ({ outro }) => {
  const title = outro.title;
  const image = outro.image;
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{title}</h2>
      <div className={styles.description}>
        In 2024, Kwang and Kwangaroo launched USTH Overflow, a site
        where programmers could help solve each other's problems. Online. For
        free. Since then, millions of people have jumped at the chance to help a
        stranger. And thanks to those people like you, the USTH Exchange
        network has grown to include 182 different communities visited by over
        100 million monthly unique visitors.
      </div>
      <div className={styles["logo-container"]}>
        <img src={image} alt="USTH Exchange logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default TourOutro;
