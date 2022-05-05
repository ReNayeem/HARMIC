import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, quantity, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service d-flex flex-column  align-items-center'>
            <img className='w-75' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price} TK</p>
            <p>Quantity: {quantity}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn manage-button btn-primary'>Manage</button>
        </div>
    );
};

export default Service;