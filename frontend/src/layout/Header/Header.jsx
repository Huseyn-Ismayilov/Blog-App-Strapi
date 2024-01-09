import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import Logo from './Logo/Logo';
import Button from '../../components/Buttons/Button';
import ThemeSwitch from '../../components/ThemeSwitch/themeSwitch';
import './Header.css'

const Header = () => {
    const menuLinks = [
        { text: "Home", to: "/" },
        { text: "React", to: "/category/react" },
        { text: "Blogs", to: "/blogs" },
        { text: "Contact", to: "/contact" },
        { text: "About", to: "/about" },
    ]

    return (
        <>
            <div className="headerLine"></div>
            <header className="site_header">
                <div className="container">
                    <div className="wrapper">
                        <NavLink to="/">
                            <Logo width="160" />
                        </NavLink>
                        <nav className="navBar">
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
                        <ThemeSwitch className='asd' />
                    </div>
                </div>
            </header >
        </>

    )
}

export default Header