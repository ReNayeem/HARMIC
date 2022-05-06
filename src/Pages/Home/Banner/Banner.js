import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className='first-section'>
                    <div className='home-first-section container d-flex'>
                        <div className='first-order'>
                            <h1 className='product-name-text'><span className='h1-text-highlight'>SONY - WH-XB900N</span> <span className='h1-text-highlight-2'>Wireless Noise Cancelling Over-the-Ear Headphones - Gray</span></h1>
                            <br />
                            <p className='product-detail'></p>
                            <button className="first-section-button">
                                <span className="hover-underline-animation"> Click here </span>
                                <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                                </svg>
                            </button>
                        </div>
                        <div className='second-order'>
                            <img className='product-image' src="Resources/bn2.png" alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='first-section'>
                    <div className='home-first-section container d-flex'>
                        <div className='first-order'>
                            <h1 className='product-name-text'><span className='h1-text-highlight'>SONY - WH-XB900N</span> <span className='h1-text-highlight-2'>Wireless Noise Cancelling Over-the-Ear Headphones - Gray</span></h1>
                            <br />
                            <p className='product-detail'></p>
                            <button className="first-section-button">
                                <span className="hover-underline-animation"> Click here </span>
                                <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                                </svg>
                            </button>
                        </div>
                        <div className='second-order'>
                            <img className='product-image' src="Resources/bn3.png" alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='first-section'>
                    <div className='home-first-section container d-flex'>
                        <div className='first-order'>
                            <h1 className='product-name-text'><span className='h1-text-highlight'>SONY - WH-XB900N</span> <span className='h1-text-highlight-2'>Wireless Noise Cancelling Over-the-Ear Headphones - Gray</span></h1>
                            <br />
                            <p className='product-detail'></p>
                            <button className="first-section-button">
                                <span className="hover-underline-animation"> Click here </span>
                                <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                                </svg>
                            </button>
                        </div>
                        <div className='second-order'>
                            <img className='product-image' src="Resources/bn4.png" alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;