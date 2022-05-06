import React from 'react';
import './Pride.css'

const Pride = () => {
    return (
        <section className="third-section bg-dark p-5" id="about-us">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-7 col-md-12 mb-lg-0">
                        <div className="card border-0">
                            <img src="Resources/Suppliers/person2.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 text-sec">
                        <h2 className="text-success fw-bold text-capitalize">We pride ourselves on making real food from the
                            best
                            ingredients.</h2>
                        <p>Common menu items at fast food outlets include fish and chips, sandwiches, pitas, hamburgers,
                            fried chicken, french fries, onion rings, chicken nuggets, tacos, pizza, hot dogs, and ice
                            cream.</p>
                        <button className="btn btn-warning lh-1g px-4 py-2 mb-3">Learn More</button>
                    </div>
                    <div className="col-lg-5 col-md-12 order-1 order-md-1">
                        <h2 className="text-success fw-bold text-capitalize">We make everything by hand with the best
                            possible ingredients.</h2>
                        <p>Our shops fast food is popular because the food is inexpensive, convenient, and tastes good.
                            Our shops food made with nutritious ingredients such as lean proteins, whole grains, fresh
                            fruits, and vegetables.</p>
                        <ul className="list-unstyled py-3">
                            <li>Citric Acid: Preservative.</li>
                            <li>High-fructose Corn Syrup: Sweetener.</li>
                            <li>Caramel Color: Color Additive.</li>
                        </ul>
                        <button className="btn btn-warning lh-1g px-4 py-2">Learn More</button>
                    </div>
                    <div className="col-lg-7 col-md-12 order-0 order-lg-2">
                        <div className="card border-0">
                            <img src="Resources/Suppliers/person2.png" className="img-fluid third-section-image bg-dark" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pride;