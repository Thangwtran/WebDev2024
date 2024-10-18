import React, {useState, useEffect} from "react";
import LoginButton from "../Login/LoginButton";
import styles from './Navbar.module.scss';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    
    const showSearchBar = () => {
        setSearchVisible(!isSearchVisible);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 650) {
                setSearchVisible(false);
            }
        }
    

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles["navbar-logo"]}>
                <img id="colored_logo" src='/USTH-colored-logo.png' alt="colored_logo"></img>
                <a href="/" className={styles["logo-text"]}>USTH<span> Exchange</span></a>
            </div>

            <ul className={styles["nav-links"]}>
                <li><NavLink to="/tour">Tour</NavLink></li>
                <li><NavLink href="/about">About Us</NavLink></li>
                <li><NavLink href="/meta">Meta</NavLink></li>
            </ul>

            <div className={styles["navbar-center"]}>
                <div className={styles["navbar-search"]}>
                    <input type="text" placeholder="Search all sites" ></input>
                </div>
            </div>

            <div className={styles["navbar-logo"]}>
                <img id="logo" src="/USTH-logo.png" alt="logo"></img>
                <img className={styles["search-mobile"]} id="search-icon" onClick={showSearchBar} src='/search_icon.png'></img>
                <LoginButton/>
                <div className={styles["toggle-search-bar"]} style={ {display: isSearchVisible ? "flex" : "none"} }>
                    <input type="text" placeholder="Search all sites" ></input>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;