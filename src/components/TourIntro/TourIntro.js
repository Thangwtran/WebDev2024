import React from "react";
import styles from "./TourIntro.module.scss";

const WelcomeStackExchange = ({ intro }) => {
  const title = intro.title;
  const image = intro.image;
  const additionalInfo = intro.additionalInfo;
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{title}</h2>
      <div className={styles["logo-container"]}>
        <img src={image} alt="Stack Exchange logo" className={styles.logo} />
      </div>
      <div className={styles.description}>
        <strong>Stack Exchange</strong> is a network of 182 communities that are
        created and run by experts and enthusiasts like you who are passionate
        about a specific topic. We build libraries of high-quality questions and
        answers, focused on each community's area of expertise.
      </div>
      <p className={styles.note}>{additionalInfo}</p>
    </div>
  );
};

export default WelcomeStackExchange;
