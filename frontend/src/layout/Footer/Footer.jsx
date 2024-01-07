import { NavLink } from 'react-router-dom'

export default function Footer() {
    const menuLinks = [
        { text: "Home", to: "/" },
        { text: "Contact", to: "/contact" },
        { text: "About", to: "/about" },
    ]
    return (
        <div className="siteFooter">
            <div className="container">
                <h1>Footer</h1>
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
            </div>
        </div>
    )
}