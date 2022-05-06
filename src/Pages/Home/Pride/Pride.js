import React from 'react';
import { Link } from 'react-router-dom';
import './Pride.css'

const Pride = () => {
    return (
        <section className="pride mt-5 p-5" id="about-us">
            <div className="container">
                <div className='mb-5 text-center'>
                    <h5 className='item-h5'>OUR</h5>
                    <h1 className='item-h1'>PRIDE</h1>
                </div>
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 col-md-12 mb-lg-0">
                        <div>
                            <img src="Resources/Fast_food/img-1.png" className="img-fluid pride-image" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-sec">
                        <h2 className="text-success fw-bold text-capitalize">We pride ourselves on supplying real food from the
                            best
                            ingredients.</h2>
                        <p>Common items at supplying organizations include fish and chips, sandwiches, pitas, hamburgers,
                            fried chicken, french fries, onion rings, chicken nuggets, tacos, pizza, hot dogs, and ice
                            cream.</p>
                        <Link as={Link} to="/AllItems">
                            <button className="btn btn-success lh-1g px-4 py-2 mb-3">BROWSE ITEMS</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 order-1 order-md-1">
                        <h2 className="text-success fw-bold text-capitalize">We Deliver everything by trusted partners with the best
                            possible Way.</h2>
                        <p>Harmic's fast food is popular because the food is inexpensive, convenient, and tastes good.
                            Our organizations food made with nutritious ingredients such as lean proteins, whole grains, fresh
                            fruits, and vegetables.</p>
                        <ul className="list-unstyled py-3">
                            <li>Citric Acid: Preservative.</li>
                            <li>High-fructose Corn Syrup: Sweetener.</li>
                            <li>Caramel Color: Color Additive.</li>
                        </ul>
                        <Link as={Link} to="/AllItems">
                            <button className="btn btn-success lh-1g px-4 py-2 mb-3">BROWSE ITEMS</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 order-0 order-lg-2">
                        <div>
                            <img src="Resources/Fast_food/img-2.png" className="img-fluid pride-image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pride;