import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';
import './ItemDetail.css'

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useItemDetail(itemId);
    const { _id, name, quantity, supplier, img, description, price } = item;

    const handleDeliver = () => {
        let deliver = 1;
        let quantityNumber = parseInt(item.quantity);
        let quantity = quantityNumber - deliver;

        let newQuantity = {
            _id: item._id,
            name: item.name,
            quantity: quantity,
            supplier: item.supplier,
            img: item.img,
            description: item.description,
            price: item.price
        }
        const url = `http://localhost:5000/items/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setItem(newQuantity)
                    console.log('data success', data);

                }
            })
    }
    const newStock = e => {
        e.preventDefault();
        let quantityPrevious = item.quantity;
        let quantityPreviousNum = parseInt(quantityPrevious);
        let taken = parseInt(e.target.number.value);
        let quantity = quantityPreviousNum + taken;

        let newQuantity = {
            _id: item._id,
            name: item.name,
            quantity: quantity,
            supplier: item.supplier,
            img: item.img,
            description: item.description,
            price: item.price
        }
        const url = `http://localhost:5000/items/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setItem(newQuantity)
                    console.log('data success', data);
                    e.target.reset();
                }
            })
    }
    return (
        <div>
            <div className='my-5 item-text-header text-center'>
                <h5 className='item-h5'>Item</h5>
                <h1 className='item-h1'>Details</h1>
            </div>
            <hr className='w-50 mx-auto' />
            <div className='d-flex item-details container justify-content-center align-items-center'>
                <img className='item-detail-image' src={img} alt="" />
                <div className='w-50'>
                    <h3 className='item-name'>{name}</h3>
                    <p className='item-detail'>৳ {price} TK</p>
                    <p className='item-detail'>Quantity: {quantity}</p>
                    <p className='item-description'><small>{description}</small></p>
                    <p>Supplier: {supplier}</p>
                    <div className="col-sm-12 col-md-6">
                        <button
                            onClick={() => { handleDeliver() }}
                            className="deliver-btn me-1"
                        >
                            Deliver
                        </button>
                        <form onSubmit={newStock}>
                            <span className="d-flex">
                                <input type="number" name="number" required /> <br />
                                <input className="btn ms-1" type="submit" value="Restock" />
                            </span>
                        </form>
                    </div>
                </div>
                {/* <div className='text-center'>
                <Link to={`/checkout/${itemId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div> */}
            </div>
        </div>
    );
};

export default ItemDetail;