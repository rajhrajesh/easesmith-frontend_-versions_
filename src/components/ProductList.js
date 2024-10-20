import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';
import products from '../data/products'; // Ensure this is the correct path to your products data

const ProductList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products); // Display all products initially

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        // Clear all filters
        setFilteredProducts(products);
    };

    const handleFilterClick = (filter) => {
        const filtered = products.filter(product => product.type === filter);
        setFilteredProducts(filtered);
    };

    const handleSort = (order) => {
        let sortedProducts;
        if (order === 'High-Low') {
            sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
        } else if (order === 'Low-High') {
            sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
        } else if (order === 'Popular') {
            sortedProducts = [...filteredProducts].sort((a, b) => b.popularity - a.popularity);
        }
        setFilteredProducts(sortedProducts);
        setIsOpen(false); // Close menu after selecting sort
    };

    const handleAddToCart = (product) => {
        console.log(`${product.name} added to cart`);
        // Add your custom logic here
    };

    const handleBuyOnRent = (product) => {
        console.log(`Rent option selected for ${product.name}`);
        // Add your custom logic here
    };

    return (
        <div className='container mx-auto p-4'>
            <div className='flex flex-col md:flex-row md:space-x-4'>
                {/* Filters */}
                <div className='flex flex-col bg-gray-100 text-slate-700 p-3 rounded-lg shadow-md w-full md:w-1/4'>
                    <div className='pb-2 flex justify-between border-b border-gray-300 mb-2'>
                        <p className="font-semibold">Filters</p>
                        <a href='/' onClick={handleLinkClick} className='font-semibold text-blue-500 hover:underline'>CLEAR ALL</a>
                    </div>
                    {/* Example filter options */}
                    {['Indoor', 'Outdoor', 'Low Maintenance', 'High Maintenance'].map(filter => (
                        <div key={filter} className='pb-2 flex justify-between mb-2 border-b border-gray-300 text-xs sm:text-base'>
                            <p className="font-semibold">{filter}</p>
                            <button onClick={() => handleFilterClick(filter)} className='text-blue-500'>
                                <FontAwesomeIcon icon={faPlus} className="text-md" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className='flex-grow'>
                    <div className='ml-3 flex items-baseline mt-3'>
                        <p className='text-sm mr-3 sm:text-lg font-semibold'>{filteredProducts.length} Products</p>
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    id="menu-button"
                                    aria-expanded={isOpen}
                                    aria-haspopup="true"
                                    onClick={toggleMenu}
                                >
                                    Sort By
                                    <FontAwesomeIcon icon={faChevronDown} size="1x" className='items-center' />
                                </button>
                            </div>

                            {isOpen && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                >
                                    <div className="py-1" role="none">
                                        {['High-Low', 'Low-High', 'Popular'].map(order => (
                                            <a
                                                key={order}
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                                tabIndex="0"
                                                onClick={() => handleSort(order)}
                                            >
                                                {order}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className='mt-4 grid grid-cols-2 sm:grid-cols-3 gap-6'>
                        {filteredProducts.map(product => (
                            <div key={product.id} className='p-4 border rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105'>
                                <img src={product.image} alt={product.name} className='w-full h-48 object-cover mb-2 rounded-md' />
                                <h3 className='font-semibold text-lg'>{product.name}</h3>
                                <div className="flex items-center mb-2">
                                    {/* Star Rating */}
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon 
                                            key={index} 
                                            icon={faStar} 
                                            className={`text-yellow-500 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                                        />
                                    ))}
                                </div>
                                <p className='text-gray-600'>Price: <span className='font-bold'>₹{product.price}</span></p>
                                {product.offerPrice && (
                                    <p className='text-red-500 line-through'>Offer Price: ₹{product.offerPrice}</p>
                                )}
                                <div className="mt-2 flex flex-col space-y-2">
                                    <button 
                                        onClick={() => handleAddToCart(product)} 
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                    <button 
                                        onClick={() => handleBuyOnRent(product)} 
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                                    >
                                        Buy or Rent
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
