import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import Logo from './Logo/Logo';
import styles from './Header.module.css'
import Button from '../../components/Buttons/Button';

const Header = () => {
    const menuLinks = [
        { text: "Home", to: "/" },
        { text: "Contact", to: "/contact" },
        { text: "About", to: "/about" },
    ]

    return (
        <>
            <div className={styles.headerLine}></div>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <NavLink to="/">
                            <Logo width="160" />
                        </NavLink>
                        <nav className={styles.navBar}>
                            <ul>
                                {menuLinks.map((item, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={item.to}
                                            className="navLink"
                                        >
                                            {item.text}
                                        </NavLink>
                                    </li>
                                ))}

                            </ul>
                        </nav>
                        <Button text="Get Started" link="/" className="btn primary_btn" />
                        <button
                            type='button'
                            className='switch_btn'
                            // onClick={handleClick}
                        >
                            {/* {
                                isMode ? (
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                )
                            } */}
                        </button>
                    </div>
                </div>
            </header >
        </>

    )
}

export default Header