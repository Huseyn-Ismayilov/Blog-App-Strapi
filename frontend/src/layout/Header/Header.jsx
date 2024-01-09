import { NavLink, Link } from 'react-router-dom'
import React, { useState } from 'react';
import Logo from './Logo/Logo';
import Button from '../../components/Buttons/Button';
import ThemeSwitch from '../../components/ThemeSwitch/themeSwitch';
import NavBar from './NavBar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="headerLine"></div>
            <header className="site_header">
                <div className="container">
                    <div className="wrapper">
                        <Link to="/">
                            <Logo width="160" />
                        </Link>
                        <NavBar />
                        <Button
                            text="Get Started"
                            link="/"
                            className="btn primary_btn"
                        />
                        <ThemeSwitch className='asd' />
                    </div>
                </div>
            </header >
        </>

    )
}

export default Header