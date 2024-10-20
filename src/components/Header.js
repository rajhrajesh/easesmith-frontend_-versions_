import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.jpg';
import search from '../assets/images/search.png';
import leaf from '../assets/images/leaf.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState("/plants");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (path) => {
        setActiveNavItem(path);
    };

    return (
        <header  className='bg-white'>
            {/* Top Bar */}
            <div className="hidden bg-green sm:flex justify-around py-2 text-white">
                <h3 className="text-base">Free Shipping on orders above 999/-</h3>
                <h3 className="text-base">Call us on: +91 98768 05120</h3>
            </div>

            {/* Main Header */}
            <div className=" flex items-center justify-between p-2 sm:p-3 shadow-md"> {/* Reduced padding */}
                {/* Logo and Brand */}
                <div className="flex items-center">
                    <img className="w-8 h-8 sm:w-16 sm:h-16" src={logo} alt="Chaperone logo" /> {/* Reduced size */}
                    <h3 className="hidden sm:block sm:ml-3 text-lg sm:text-base sm:font-semibold text-[#165314]">Chaperone</h3>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden sm:flex flex-grow justify-center items-center space-x-6 text-pretty">
                    {[
                        { path: "/home", label: "Home" },
                        { path: "/plants", label: "Plants & Pots" },
                        { path: "/tools", label: "Tools" },
                        { path: "/services", label: "Our Services" },
                        { path: "/blog", label: "Blog" },
                        { path: "/our-story", label: "Our Story" },
                        { path: "/faqs", label: "FAQs" }
                    ].map((navItem) => (
                        <a
                            key={navItem.path}
                            href={navItem.path}
                            className={`font-semibold hover:text-orange ${activeNavItem === navItem.path ? 'border-b-2 border-orange' : ''}`}
                            onClick={() => handleNavClick(navItem.path)}
                        >
                            {navItem.label}
                        </a>
                    ))}
                </nav>

                {/* User, Cart, and Mobile Menu Icons */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    {/* Hamburger Icon for Mobile */}
                    <button
                        className="sm:hidden text-center cursor-pointer"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        onClick={toggleMobileMenu}
                    >
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="1x" />
                    </button>

                    {/* User Icon */}
                    <div className="text-center" aria-label="User profile">
                        <FontAwesomeIcon icon={faUser} size="1x" />
                        <p className="hidden sm:block text-xs font-semibold">My Profile</p>
                    </div>

                    {/* Cart Icon */}
                    <div className="relative text-center" aria-label="Shopping cart">
                        <FontAwesomeIcon icon={faCartShopping} size="1x" />
                        <span className="absolute -top-2 -right-3 bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
                        <p className="hidden sm:block text-xs font-semibold">Cart</p>
                    </div>
                </div>
            </div>

            {/* Search Bar Below the Main Header */}
            <div className="flex items-center justify-center py-4">
                <div className="flex items-center max-w-sm w-full sm:border-b-2 border-slate-900">
                    <img src={search} alt="Search icon" className="w-5 h-5 sm:w-7 sm:h-7 p-1" />
                    <input
                        type="search"
                        placeholder="Search plant?"
                        name="search"
                        className="w-full px-3 py-2 text-sm sm:text-base"
                    />
                    <img src={leaf} alt="Leaf icon" className="w-5 h-5 sm:w-7 sm:h-7 p-1" />
                </div>
            </div>



            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav className="sm:hidden bg-white shadow-md p-4">
                    <ul className="flex flex-col space-y-4 text-pretty">
                        {[
                            { path: "/home", label: "Home" },
                            { path: "/plants", label: "Plants & Pots" },
                            { path: "/tools", label: "Tools" },
                            { path: "/services", label: "Our Services" },
                            { path: "/blog", label: "Blog" },
                            { path: "/our-story", label: "Our Story" },
                            { path: "/faqs", label: "FAQs" }
                        ].map((navItem) => (
                            <li key={navItem.path}>
                                <a
                                    href={navItem.path}
                                    className={`font-semibold hover:text-orange ${activeNavItem === navItem.path ? 'border-b-2 border-green-700' : ''}`}
                                    onClick={() => handleNavClick(navItem.path)}
                                >
                                    {navItem.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}


        </header>
    );
};

export default Header;
