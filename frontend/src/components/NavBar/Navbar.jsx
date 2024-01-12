import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const menuLinks = [
        { text: "Home", to: "/" },
        { text: "Blogs", to: "/blogs" },
    ]
    return (
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
    )
}