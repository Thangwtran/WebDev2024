import React, { useEffect, useState, useRef} from "react";
import styles from './AskQuestion.module.scss';
import arrowImage from '../../../assets/tour_assets/triangle.png';
import tickImage from '../../../assets/tour_assets/correct.png';
import arrowUp from '../../../assets/tour_assets/orange-arrow2.png';
import arrowDown from '../../../assets/tour_assets/orange-arrow.png';
import rightTab from '../../../assets/tour_assets/askquestion.png';

function AskQuestion() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(containerRef.current);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className={styles["container"]}>
            <h2 className={styles["title"]}>Ask questions, get answers, no distractions</h2>

            <div className={styles["panel-container"]}>
                <div className={styles["left-panel"]}>
                    <p>
                    This site is all about <b>getting answers</b>. 
                    It's not a discussion forum. 
                    There's no chit-chat.
                    </p>

                    <div className={styles["justqa"]}>
                        <div className={styles["justquestions"]}>
                            <p>Just questions...</p>
                            <div className={`${styles["arrow"]} ${isVisible ? styles["visible"] : ""}`}>
                                <img src={arrowUp} alt="arrow-up"></img>
                            </div>
                        </div>

                        <div className={styles["andanswers"]}>
                            <p>... and answers.</p>
                            <div className={`${styles["arrow"]} ${isVisible ? styles["visible"] : ""}`}>
                                <img src={arrowDown} alt="arrow-down"></img>
                            </div>
                        </div>
                    </div>

                    <div className={styles["goodanswers"]}>
                        <div className={styles["image-container"]}>
                            <img src={arrowImage} alt="triangle" className={styles["image"]}></img>  
                        </div>
                        
                        <p>Good answers are voted up 
                            <b> and rise to the top</b>.</p>
                        <p className={styles["para-italic"]}>The best answers show up first 
                            so that they are always easy to find.</p>
                    </div>

                    <div className={styles["theperson"]}>
                        <div className={styles["image-container"]}>
                            <img src={tickImage} alt="correct" className={styles["image"]}></img>  
                        </div>
                        
                            <p>The person who asked can mark
                                 one answer as "accepted".</p>

                            <p className={styles["para-italic"]}>Accepting doesn't mean it's the best answer, 
                                it just means that it worked 
                                for the person who asked.</p>
                    </div>
                </div>

                <div className={styles["right-panel"]}>
                    <img src={rightTab} alt="right-tab" className={`${styles["right-image"]} ${isVisible ? styles["visible"] : ""}`} />
                </div>
            </div>
        </div>
    )
}
export default AskQuestion;