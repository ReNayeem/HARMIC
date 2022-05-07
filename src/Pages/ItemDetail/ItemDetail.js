import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);
    const { _id, name, quantity, supplier, img, description, price } = item;

    return (
        <div className='d-flex container justify-content-center align-items-center'>
            <img className='w-25' src={img} alt="" />
            <div className='w-50'>
                <h3 className='item-name'>{name}</h3>
                <p className='item-detail'>৳ {price} TK</p>
                <p className='item-detail'>Quantity: {quantity}</p>
                <p className='item-description'><small>{description}</small></p>
                <p>Supplier: {supplier}</p>
                <button className='btn btn-success'>DELIVERED</button>
            </div>
            {/* <div className='text-center'>
                <Link to={`/checkout/${itemId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div> */}
        </div>
    );
};

export default ItemDetail;