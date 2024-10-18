import React, { useEffect, useRef, useState } from 'react';
import styles from './TourComponent.module.scss';

const TourComponent = ({ title, paragraph, arrow, image }) => {
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
            <h2 className={styles["title"]}>{title}</h2>

            <div className={styles["content-container"]}>
                <div className={styles["para-content"]}>
                    <div className={styles["paragraph"]}>
                        <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                    </div>
                </div>
                
                <div className={`${styles["arrow"]} ${isVisible ? styles["visible"] : ""}`}>
                    <img src={arrow} alt="arrow" />
                </div>

                <div className={`${styles["image"]} ${isVisible ? styles["visible"] : ""}`}>
                    <img src={image} alt="right-content" />
                </div>
            </div>
        </div>
    );
};

export default TourComponent;
