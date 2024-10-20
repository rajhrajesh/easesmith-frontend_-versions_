import React from 'react';
import flower1 from '../assets/images/flower1.jpeg';
import flower2 from '../assets/images/flower2.jpeg';
import flower3 from '../assets/images/flower3.jpeg';
import flower4 from '../assets/images/flower4.jpeg';
import flower5 from '../assets/images/flower5.jpeg';
import flower6 from '../assets/images/flower6.jpeg';
import flower7 from '../assets/images/flower7.jpeg';
import flower8 from '../assets/images/flower8.jpeg';
import flower9 from '../assets/images/flower9.jpeg';
import flower10 from '../assets/images/flower10.jpeg';

const Home = () => {
    return (
        <div className="bg-white h-screen pt-4">
            {/* Button and Description */}
            <div className='mb-4'>
                <div className="mb-4">
                    <button className="mx-4 w-16 h-7 text-base sm:text-lg sm:w-24 sm:h-8 border-none border-black shadow-black shadow-md bg-green text-white hover:bg-gray-200 transition duration-300">
                        Plants
                    </button>
                    <button className="mx-4 w-16 h-7 text-base sm:text-lg sm:w-24 sm:h-8 border-none border-black shadow-black shadow-sm  hover:bg-gray-200 transition duration-300">
                        Pots
                    </button>
                </div>
                <p className="mx-4 text-base sm:text-lg sm:font-semibold">
                    Discover our exquisite collection of modern plants, thoughtfully curated to enhance any living space or garden. Our e-commerce platform provides a seamless shopping experience, showcasing a variety of trendy indoor plants, stylish pots, and essential care accessories. Transform your environment effortlessly and embrace the beauty of nature with just a few clicks.
                </p>
            </div>

            <h3 className='mx-4 text-base font-semibold sm:text-lg sm:font-bold'>Nursery</h3>

            {/* Add additional container class to enable horizontal scrolling */}
            <div className=''>
                <div className='my-3 flex flex-grow overflow-auto mx-auto'>
                    {[
                        { src: flower1, desc: "A beautiful bloom that adds elegance to any garden, offering a delightful fragrance and vibrant colors." },
                        { src: flower2, desc: "This hardy flower thrives in various conditions, making it a perfect choice for beginners and experts alike." },
                        { src: flower3, desc: "With its stunning petals and rich hues, this flower is sure to brighten any space and uplift spirits." },
                        { src: flower4, desc: "A classic choice for any arrangement, its timeless beauty and charm make it a favorite among flower lovers." },
                        { src: flower5, desc: "Known for its resilience, this flower can withstand the elements, offering lasting beauty throughout the seasons." },
                        { src: flower6, desc: "Its unique structure and captivating colors make this flower a stunning centerpiece in any floral arrangement." },
                        { src: flower7, desc: "Bursting with life, this flower attracts pollinators and brings a sense of joy and vibrancy to any garden." },
                        { src: flower8, desc: "A symbol of love and beauty, this flower is perfect for gifting or as a stunning addition to your home decor." },
                        { src: flower9, desc: "Its gentle hues and delicate petals create a calming atmosphere, making it ideal for relaxation spaces." },
                        { src: flower10, desc: "With a captivating scent and lush appearance, this flower adds a touch of elegance to any occasion." },
                    ].map((flower, index) => (
                        <div key={index} className='ml-3 mr-3 flex flex-col items-center max-w-sm sm:max-w-lg space-x-2 space-y-2'>
                            <img
                                src={flower.src}
                                alt={`flower_${index + 1}`}
                                className='block shrink-0 sm:shrink-0 size-16 rounded-full sm:size-24 transition-transform transform hover:scale-105 object-cover'
                            />
                            <div className='text-center'>
                                <p className='text-sm sm:text-base sm:font-semibold '>
                                    {flower.desc}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </div>

        
    );
};

export default Home;
