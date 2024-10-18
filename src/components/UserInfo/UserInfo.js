import React from "react";
import styles from './UserInfo.module.scss';
import goldIcon from '../../assets/gold.png';
import silverIcon from '../../assets/silver.png';
import bronzeIcon from '../../assets/bronze.png';

const UserInfo = ({ time, avatar, username, icon, reputation, badges = {} }) => {

    const { gold = 0, silver = 0, bronze = 0 } = badges;

    return (
        <div className={styles.userInfo}>

            <div className={styles.time}>
                <a href="#" className={styles.blueText}>{time}</a>
            </div>

            <div className={styles.userDetails}>
                <img src={avatar} alt={`${username}'s avatar`} className={styles.avatar} />

                <div className={styles.info}>
                    <a href="">{username}</a> <span>{icon}</span>

                    <div className={styles.repuScore}>
                        <p>{reputation}</p>
                        <div className={styles.badges}>
                            {gold > 0 && (
                                <span className={styles.badge}>
                                    <img src={goldIcon} alt="gold badge" />
                                    <p>{badges.gold}</p>
                                </span>
                            )}
                            {silver > 0 && (
                                <span className={styles.badge}>
                                    <img src={silverIcon} alt="silver badge" />
                                    <p>{badges.silver}</p>
                                </span>
                            )}
                            {bronze > 0 && (
                                <span className={styles.badge}>
                                    <img src={bronzeIcon} alt="bronze badge" />
                                    <p>{badges.bronze}</p>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
