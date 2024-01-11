import { NavLink, Link } from 'react-router-dom'
import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Buttons/Button';
import ThemeSwitch from '../../components/ThemeSwitch/themeSwitch';
import NavBar from '../../components/NavBar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="headerLine"></div>
            <header className="site_header">
                <div className="container">
                    <div className="wrapper">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <NavBar />
                        <Button
                            text="Get Started"
                            link="/"
                            className="btn primary_btn"
                        />
                        <ThemeSwitch />
                    </div>
                </div>
            </header >
        </>

    )
}

export default Header