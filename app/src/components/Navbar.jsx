import React, { useState } from 'react';

// Navbar component
const Navbar = () => {
    // State to manage dark mode
    const [darkMode, setDarkMode] = useState(false);

    const [isLoggedIn, setLoggedIn] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleLogout = () => {
        // TODO
        setLoggedIn(false);
    };

    return (
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
            {/* Left side of the Navbar */}
            <div className="navbar-left">
                {/* Apple logo */}
                <a href='/' style={{display: "flex", alignItems: "center"}}>
                    <img src='/logo.png' width={28} /> <strong style={{marginLeft: 10, marginRight: 10, fontSize: 20}}>PipeGen AI</strong>
                </a>
                {isLoggedIn ? (
                    <a className='link' href="/dashboard">Dashboard</a>
                ) : (
                    <>
                        <a className='link' href="#features">Features</a>
                        <a className='link' href="/pricing">Pricing</a>
                    </>
                )}
            </div>

            {/* Right side of the Navbar */}
            <div className="navbar-right">
                {isLoggedIn ? (
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg border border-gray-300 shadow-md' onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <a href='/login'><button className='btn-login'>Login</button></a>
                        <a href='/signup'><button className='btn-signup'>Create your account</button></a>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
