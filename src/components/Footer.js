import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0 md:w-1/4">
                        <h2 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h2>
                        <p className="text-sm mb-4">Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut Necesbus Enim</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter Your Email Address"
                                className="flex-grow p-2 rounded-l-md focus:outline-none focus:ring focus:ring-blue-500"
                                required
                            />
                            <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition duration-300">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="mb-6 md:mb-0 md:w-1/4">
                        <h2 className="text-lg font-semibold mb-2">About Us</h2>
                        <ul>
                            <li className="mb-1"><a href="/" className="hover:underline">Our Story</a></li>
                            <li className="mb-1"><a href="/" className="hover:underline">Blogs</a></li>
                            <li className="mb-1"><a href="/" className="hover:underline">Careers</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0 md:w-1/4">
                        <h2 className="text-lg font-semibold mb-2">Our Services</h2>
                        <ul>
                            <li className="mb-1"><a href="/" className="hover:underline">Book Maali Plant</a></li>
                            <li className="mb-1"><a href="/" className="hover:underline">Day Care</a></li>
                            <li className="mb-1"><a href="/" className="hover:underline">Rent Plants</a></li>
                            <li className="mb-1"><a href="/" className="hover:underline">Plants & Pots</a></li>
                            <li className="mb-1"><a href="/" className="hover:underline">Gardening Tools</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0 md:w-1/4">
                        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                        <p className="mb-1">Call: <span className="font-semibold">+919958287272</span></p>
                        <p className="mb-1">Email: <span className="font-semibold">care@chaperoneplants.com</span></p>
                        <p className="mb-1">Address: <span className="font-semibold">F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</span></p>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-sm">© {new Date().getFullYear()} Chaperone Plants. All Rights Reserved.</p>
                    <p className="text-sm mt-1">Follow us on:</p>
                    <div className="flex justify-center space-x-6 mt-2">
                        <a href="/" className="hover:text-blue-400">
                            <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
                        </a>
                        <a href="/" className="hover:text-blue-400">
                            <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                        </a>
                        <a href="/" className="hover:text-blue-400">
                            <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
