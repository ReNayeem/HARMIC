import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);

    return (
        <div>
            <h2>You are about to book: {item.name}</h2>
            <img src={item.img} alt="" />
            <div className='text-center'>
                <Link to={`/checkout/${itemId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;