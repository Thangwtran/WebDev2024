import React from 'react';
import { useParams } from 'react-router-dom';

import ThreadPost from '../components/ThreadPost/ThreadPost';
import PostHeader from '../components/PostHeader/postHeader';
import styles from './PostContent.module.scss';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';  
import SideBarWidget from '../components/SideBarWidget/SideBarWidget'; 
import Comments from '../components/Comments/Comments';
import Related from '../components/Related/Related';  
import Navbar from '../components/Navbar/Navbar';

import relatedQuestionsData from '../_SAMPLE_DATA/relatedQuestions.json';
import sideBarWidgetData from '../_SAMPLE_DATA/widget.json';
import leftSideBarData from '../_SAMPLE_DATA/leftSideBar.json';
import postHeaderData from '../_SAMPLE_DATA/postHeader.json';
import commentsData from '../_SAMPLE_DATA/comments.json';
import threadPostData from '../_SAMPLE_DATA/threadPost.json';

const PostContent = ({ threadId }) => {
    const { id } = useParams();

    if (!id) {
        return <h1>Sorry! Page was not found!</h1>;
    };

    const relatedQuestionDetails = relatedQuestionsData.relatedQuestions.find(
        (question) => question.id === id
    );

    const widgetDetails = sideBarWidgetData.widgets.find(
        (widget) => widget.questionId === id
    );

    const lsbContent = leftSideBarData.sidebarContent[0];

    const widgetContent = widgetDetails ? {
        title: widgetDetails.title,
        widgetContent: widgetDetails.widgetContent.map((wc) => ({
            text: wc.text
        }))
    } : null;

    const relatedQuestions = relatedQuestionDetails ? {
        questions: relatedQuestionDetails.questions.map((question) => ({
            upvote: question.upvote,
            title: question.title
        }))
    } : null;

    const posts = threadPostData.posts.filter((post) => post.questionId === id);

    if (posts.length === 0) {
        <h1>No thread for this question!</h1>
    }

    const showedPost = new Set();

    return (
        <div className={styles.postContent}>
            <Navbar className={styles.navbar} />
            <PostHeader
                className={styles.postHeader}
                imageUrl={postHeaderData.postHeader.imageUrl}
                altText={postHeaderData.postHeader.altText}
                addAltText={postHeaderData.postHeader.addAltText}
            />

            <div className={styles.wrapper}>
                <div className={styles.leftSidebar}>
                    <LeftSideBar content={lsbContent} />
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.content}>
                        {posts.map((post, index) => {

                            if (showedPost.has(post.questionId)) {
                                return null;
                            }

                            showedPost.add(post.questionId);

                            return (
                                <div key={post.id} className={styles.body}>
                                    {index === 0 ? (
                                        <ThreadPost
                                            asked={post.asked}
                                            modified={post.modified}
                                            viewed={post.viewed}
                                            title={post.title}
                                            body={post.body}
                                            tags={post.tags}
                                        />
                                    ) : (
                                        <ThreadPost body={post.body} />
                                    )}

                                    <Comments comments={commentsData.comments} postId={post.id} />
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.rightSidebar}>
                        {widgetContent && <SideBarWidget widget={widgetContent} />}
                        {relatedQuestions && <Related relatedQuestions={relatedQuestions} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostContent;