import React from 'react';
import './Supplier.css'

const Supplier = () => {
    return (
        <div>
            <section id="supplier">
                <div className="wrapper supplier-section">
                    <div className="container text-center">
                        <div className='mb-5 text-center'>
                            <h5 className='item-h5'>OUR TRUSTED</h5>
                            <h1 className='item-h1'>SUPPLIERS</h1>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-10 offset-lg-1">
                                <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                            className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                            aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                            aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="carousel-caption">
                                                <img src="Resources/Suppliers/person1.png" alt="" />
                                                <p>Our attendees know what to expect when they set foot on the show floor.
                                                </p>
                                                <h5>Randy Vice</h5>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="carousel-caption">
                                                <img src="Resources/Suppliers/person2.png" alt="" />
                                                <p>Jadu Convention Center has thousands of glass walls to let
                                                    that priceless experience.
                                                </p>
                                                <h5>Suresh Goolcharan</h5>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="carousel-caption">
                                                <img src="Resources/Suppliers/person3.png" alt="" />
                                                <p>You can't put words or price tag on that!</p>
                                                <h5>Randy Vice</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Supplier;