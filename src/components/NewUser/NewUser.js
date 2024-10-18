import React from "react";
import styles from './NewUser.module.scss';

function NewUser() {
    return (
        <div className = {styles["newuser-container"]}>
            <h2 className={styles["newuser-title"]}>Find a question to answer, or ask your own</h2>
            <div className={styles["huge-button"]}>
                <button>
                    <a className = {styles["user-button"]} href="/">Browse hot questions</a>
                </button>
                <button>
                    <a className = {styles["user-button"]} href="/">See all sites</a>
                </button>
            </div>
        </div>
    );
}

export default NewUser;