import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, quantity, img, description, price } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='item d-flex flex-column  align-items-center'>
            <img className='w-75' src={img} alt="" />
            <h3 className='item-name'>{name}</h3>
            <p className='item-detail'>৳ {price} TK</p>
            <p className='item-detail'>Quantity: {quantity}</p>
            <p className='item-description'><small>{description}</small></p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn manage-button btn-success'>Manage Stock</button>
        </div>
    );
};

export default Item;