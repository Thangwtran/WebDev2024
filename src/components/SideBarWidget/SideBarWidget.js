import React from "react";
import styles from './SideBarWidget.module.scss';
import chatImg from '../../assets/chat.png';


const Widget = ({ widget }) => {

    const { title, widgetContent } = widget;

    return (
        <div className={styles.widget}>
            <div className={styles["title"]}><span>{title}</span></div>
                {widgetContent.map((content, index) => (
                    <div key={index} className={styles["widget-container"]}>
                        <img src={chatImg} className={styles["icon"]} alt="widget-icon"></img>
                        <span className={styles["text"]}>{content.text}</span>
                    </div>
                ))}
        </div>
    );
};

export default Widget;
