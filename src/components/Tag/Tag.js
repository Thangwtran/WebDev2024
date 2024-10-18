import React from "react";
import styles from './Tag.module.scss';

const Tag = ({nameTag}) => {
    return (
        <div className={styles["name-tag"]}>
            {nameTag}
        </div>
    );
};
export default Tag;