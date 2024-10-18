import React, { useState, useEffect } from "react";
import styles from "./Tour.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AskQuestion from "../components/TourAnimation/AskQuestion/AskQuestion.js";
import TourIntro from "../components/TourIntro/TourIntro.js";
import TourOutro from "../components/TourOutro/TourOutro.js";
import TourComponentList from "../components/TourAnimation/TourList/TourComponentList.js";
import IntroData from "../_SAMPLE_DATA/TourIntro.json";
import OutroData from "../_SAMPLE_DATA/TourOutro.json";
import toursData from "../_SAMPLE_DATA/toursData.json";
import NewUser from "../components/NewUser/NewUser.js";

const Tour = () => {
  const [intro, setIntro] = useState([]);

  useEffect(() => {
    const intro = IntroData["intro"];
    setIntro(intro);
  }, []);
  const [outro, setOutro] = useState([]);

  useEffect(() => {
    const outro = OutroData["outro"];
    setOutro(outro);
  }, []);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const toursArray = Object.values(toursData["tour"]);
    setTours(toursArray);
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["header"]}>
        <div className={styles["wrapper"]}>
          <Header />
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["wrapper"]}>
          <TourIntro intro={intro} />
          <AskQuestion />
          <TourComponentList tours={tours} />
          <NewUser />
          <TourOutro outro={outro} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tour;
