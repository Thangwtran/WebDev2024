import React, {useState} from 'react';
import Question from '../Question/Question';
import styles from './QuestionList.module.scss'

const QuestionList = ({ questions }) => {
    const [sortBy, setSortBy] = useState('hot');
    const [currentPage, setCurrentPage] = useState(1);
    const [questionsPerPage, setQuestionsPerPage] = useState(15);

    const sortedQuestions = [...questions].sort((a, b) => {
        if (sortBy === 'hot') {
            return b.answer - a.answer;
        } else {
            return new Date(b.created_time) - new Date(a.created_time);
        }
    });

    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = sortedQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);
    const totalPages = Math.ceil(sortedQuestions.length / questionsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
    const handlePerPageChange = (amount) => {
        setQuestionsPerPage(amount);
        setCurrentPage(1);
    };
    
    return (
        <div className={styles.container}>
            <div className={styles["question-tab"]}>
                <div className={styles["tabs"]}>
                    <a 
                        onClick={() => setSortBy('hot')} 
                        className={`${sortBy === 'hot' ? styles.active : ''}`}
                    >
                        hot
                    </a>
                    <a 
                        onClick={() => setSortBy('real-time')} 
                        className={`${sortBy === 'real-time' ? styles.active : ''}`}
                    >
                        real-time
                    </a>
                </div>
            </div>
            
            <div className={styles["list-line"]}></div>

            <ul className={styles["question-list"]}>
                {currentQuestions.map((question, index) => (
                    <li key={index} className={styles["question-list-item"]}>
                        <Question
                            image={question.image}
                            title={question.title}
                            tags={question.tags}
                            answer={question.answer}
                            created_time={question.created_time}
                            author={question.author}
                            field={question.field}
                            link={`/questions/${question.id}`}
                        />
                    </li>
                ))}
            </ul>

            <div className={styles.pagination}>
                <div className={styles.pageNumbers}>

                    {currentPage > 1 && (
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={styles.navBtn}
                        >
                            prev
                        </button>
                    )}

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.active : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    {currentPage < totalPages && (
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={styles.navBtn}
                        >
                            next
                        </button>
                    )}
                </div>

                <div className={styles.perPageOptions}>
                    {[15, 30, 50].map((amount) => (
                        <button
                            key={amount}
                            onClick={() => handlePerPageChange(amount)}
                            className={`${styles.perPageBtn} ${questionsPerPage === amount ? styles.active : ''}`}
                        >
                            {amount}
                        </button>
                    ))}
                    <span className={styles.perPageText}>per page</span>
                </div>
            </div> 
        </div>
    );
};

export default QuestionList;
