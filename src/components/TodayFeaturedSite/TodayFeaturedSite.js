import React from 'react'
import styles from'./TodayFeaturedSite.module.scss'

const TodayFeaturedSite = ({image, title, paragraph, questions, answers, answered}) => {
    return (
        <div className={styles.container}>
            <div className={styles['heading']}>
                Today's Featured Site
            </div>
            <div className={styles['container-without-heading']}>
                <div className={styles['icon-image']}>
                    <a href='#'>
                        <img src={image} alt={title}/>
                    </a>
                </div>
                <div className={styles['right-panel']}>
                    <a href='#'>{title}</a>
                    <br/>
                    {paragraph}
                </div>     
                <div className={styles['statistics']}>
                    <div className={styles['stats-container']}>
                        <span className={styles['number']}>{questions}k</span>
                        <br/>
                        <span className={styles['label']}>questions</span>
                    </div>

                    <div className={styles['stats-container']}>
                        <span className={styles['number']}>{answers}k</span>
                        <br/>
                        <span className={styles['label']}>answers</span>
                    </div>

                    <div className={styles['stats-container']}>
                        <span className={styles['number']}>{answered}%</span>
                        <br/>
                        <span className={styles['label']}>answered</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TodayFeaturedSite;