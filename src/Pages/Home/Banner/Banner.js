import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className='banner'>
                    <div className='banner2 container d-flex'>
                        <div className='first-order'>
                            <h2 className='mb-3 banner-h2'>Natural & Organic</h2>
                            <h1 className='product-name-text'><span className='h1-text-highlight-b1'>Bazaar!</span> <span className='h1-text-highlight-2'>Stock your daily morning market with us.</span></h1>
                            <br />
                            <p className='product-detail'></p>
                            <Link as={Link} to="/AllItems">
                                <button className="banner-button mb-5">
                                    <span className="hover-underline-animation"> Browse here </span>
                                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                        <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <div className='second-order'>
                            <img className='product-image' src="Resources/bn4.png" alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='banner'>
                    <div className='banner2 container d-flex'>
                        <div className='first-order'>
                            <h2 className='mb-3 banner-h2'>Natural & Organic</h2>
                            <h1 className='product-name-text'><span className='h1-text-highlight-b2'>Available?</span> <span className='h1-text-highlight-2'>All kinds of protein, and vitamin ingredients.</span></h1>
                            <br />
                            <p className='product-detail'></p>
                            <Link as={Link} to="/AllItems">
                                <button className="banner-button mb-5">
                                    <span className="hover-underline-animation"> Browse here </span>
                                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                        <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <div className='second-order'>
                            <img className='product-image' src="Resources/bn3.png" alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='banner'>
                    <div className='banner2 container d-flex'>
                        <div className='first-order'>
                            <h2 className='mb-3 banner-h2'>Natural & Organic</h2>
                            <h1 className='product-name-text'><span className='h1-text-highlight-b3'>Fruits!</span> <span className='h1-text-highlight-2'>Nothing can be compared when it comes to fruits.</span></h1>
                            <br />
                            <p className='product-detail'></p>
                            <Link as={Link} to="/AllItems">
                                <button className="banner-button mb-5">
                                    <span className="hover-underline-animation"> Browse here </span>
                                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                        <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <div className='second-order'>
                            <img className='product-image' src="Resources/bn2.png" alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;