import React from 'react';
import styles from './Comments.module.scss';

const Comments = ({ comments, postId }) => {
    const postComments = comments.find(commentGroup => commentGroup.postId === postId)?.comments || [];

    return (
        <div className={styles.comments}>
            {postComments.map((comment) => (
                <div key={comment.id} className={styles.comment}>
                    <div className={styles.upvote}>{comment.upvote}</div>
                    <div className={styles.text}>
                        <p>{comment.text}</p> 
                        <span className={styles.author}>- {comment.author}</span> 
                        <span className={styles.date}> {comment.date}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
