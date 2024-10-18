import React from 'react';
import Voting from '../Voting/Voting';
import UserInfo from '../UserInfo/UserInfo';
import { useParams } from 'react-router-dom';
import styles from './ThreadPost.module.scss';

import Tag from '../Tag/Tag';
import questionData from '../../_SAMPLE_DATA/questions.json';
import votingData from '../../_SAMPLE_DATA/voting.json';
import userInfoData from '../../_SAMPLE_DATA/userInfo.json';
import postData from '../../_SAMPLE_DATA/threadPost.json';

const ThreadPost = () => {
    const { id } = useParams();

    const question = questionData.questions.find((question) => question.id === id);
    const voting = votingData.votings.find((voting) => voting.questionId === id);
    const userInfoArray = userInfoData.users.filter((userInfo) => userInfo.questionId === id);
    const postArray = postData.posts.filter((post) => post.questionId === id);

    if (!postArray.length && !question) {
        return <h1>Sorry! Page was not found!</h1>;
    }

    return (
        <div className={styles.ThreadPost}>
            {postArray.map((post, index) => {
                const { title, body, tags, asked, modified, viewed } = post;

                const userInfo = userInfoArray[index] || {};

                const user = {
                    time: userInfo.time,
                    username: userInfo.username,
                    avatar: userInfo.avatar,
                    reputation: userInfo.reputation,
                    badges: userInfo.badges,
                    icon: userInfo.icon,
                };

                const vote = voting ? { upvote: voting.upvote } : {};

                return (
                    <div key={post.id} className={styles.postItem}>
                        {index === 0 && (
                            <>
                                {title && (
                                    <div className={styles['threadHeader']}>
                                        <h1>{title}</h1>
                                    </div>
                                )}

                                {asked && modified && viewed && (
                                    <div className={styles.time}>
                                        <p>
                                            Asked <span>{asked}</span>
                                        </p>
                                        <p>
                                            Modified <span>{modified}</span>
                                        </p>
                                        <p>
                                            Viewed <span>{viewed}</span>
                                        </p>
                                    </div>
                                )}
                            </>
                        )}

                        <div className={styles.threadBody}>
                            {voting && <Voting {...vote} />}

                            <div className={styles.content}>
                                <p>{body}</p>

                    { tagData.tags && (
                        <div className={styles.startingLine}>
                            <div className={styles.tag}>
                                {tagData.tags && tagData.tags.map((tag, index) => (
                                    <Tag key={index} nameTag={tag}/> 
                                ))}
                            </div>
                        </div> 
                    )}
                
                    <div className={styles["tags-user"]}>
                        {userInfo && <UserInfo {...user} />} 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreadPost;