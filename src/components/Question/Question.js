import React from 'react';
import styles from './Question.module.scss';
import Tag from '../Tag/Tag';
import { formatDistanceToNowStrict, differenceInDays } from 'date-fns';

const Question = ({ image, title, link, tags, answer, createdTime, author, field}) => {
    const createdDate = new Date(createdTime);
    
    const formatTimeAgo = (date) => {
        const daysDiff = differenceInDays(new Date(), date);
        if (daysDiff === 1) {
            return 'yesterday';
        }
        return formatDistanceToNowStrict(date, { addSuffix: true });
    };

    return (
        <div className={styles.container}>
            <img src={image} alt={title} className={styles["question-image"]} />
            <div className={styles["question-content"]}>
                <a href={link} className={styles["question-link"]}>
                    <div className={styles["question-title"]}>{title}</div>
                </a>
                <div className={styles["question-details"]}>
                    <div className={styles["tags"]}>
                        {tags.map((tag, index) => (
                            <Tag key={index} nameTag={tag} />
                        ))}
                    </div>
                    <div className={styles["details"]}>
                        {answer} answers | asked {formatTimeAgo(createdDate)} by {author} in {field}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
