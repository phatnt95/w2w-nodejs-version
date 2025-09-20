import React from "react";
import navbarLogo from '../assets/logo.png'
// import M from "materialize-css";

const Navbar = () => {

    return (
        <>
            <nav>
                <div className="nav-wrapper blue">
                    {/* Logo bên trái */}
                    <a href="/" className="brand-logo" style={{ marginLeft: "20px" }}>
                        MyLogo<img src={navbarLogo} className="logo" alt="Vite logo" />
                    </a>

                    {/* Menu giữa */}
                    <ul className="center hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                    {/* Avatar bên phải */}
                    <ul className="right hide-on-med-and-down" style={{ marginRight: "20px" }}>
                        <li>
                            <a
                                className="dropdown-trigger"
                                href="#!"
                                data-target="user-dropdown"
                            >
                                <img
                                    src="https://i.pravatar.cc/40"
                                    alt="avatar"
                                    className="circle responsive-img"
                                    style={{ width: "40px", height: "40px", marginTop: "10px" }}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Dropdown menu cho avatar */}
            <ul id="user-dropdown" className="dropdown-content">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/settings">Settings</a></li>
                <li className="divider"></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </>
    );
}


export default Navbar;