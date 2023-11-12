// Import necessary dependencies
import React, { useState } from 'react';

// Navbar component
const Navbar = () => {
    // State to manage dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
            {/* Left side of the Navbar */}
            <div className="navbar-left">
                {/* Apple logo */}
                <a href='/' style={{display: "flex", alignItems: "center"}}>
                    <img src='/logo.png' width={28} /> <strong style={{marginLeft: 10, marginRight: 10, fontSize: 20}}>PipeGen AI</strong>
                </a>
                <a className='link' href="#features">Features</a>
                <a className='link' href="/dashboard">Dashboard</a>
                <a className='link' href="/pricing">Pricing</a>
            </div>

            {/* Right side of the Navbar */}
            <div className="navbar-right">
                {/* Authentication components go here */}
                {/* For example: */}
                <a href='/login'><button className='btn-login'>Login</button></a>
                <a href='/signup'><button className='btn-signup'>Create your account</button></a>
            </div>
        </nav>
    );
};

export default Navbar;
