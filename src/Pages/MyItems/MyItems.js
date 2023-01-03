import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../../hooks/useItems';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm("Please select 'OK' for delete.");
        if (proceed) {
            const url = `https://harmic-server.up.railway.app/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }

    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        const myItemsHandle = async () => {
            const email = user.email
            const url = `https://harmic-server.up.railway.app/AddItem?email=${email}`;
            const { data } = await axios.get(url)
            setMyItems(data)
        }
        myItemsHandle()
    }, [user.email, items])
    return (
        <div className='mb-5 mx-3'>
            <PageTitle title="My Items"></PageTitle>
            <div>
                <div className='my-5 text-center'>
                    <h4 className='item-h5 text-success'>{user.displayName}</h4>
                    <h6 className='item-h5'>{user.email}</h6>
                    <h1 className='item-h1'>ADDED ITEMS</h1>
                </div>
                <table className='manage-item-table custom-table-container mx-auto container'>
                    <tr>
                        <th className='w-50'>Name</th>
                        <th className='w-25'>Price</th>
                        <th className='w-25 text-center'>Remove</th>
                    </tr>
                </table>
                {
                    items.length === 0 ? (<Loading></Loading>) : ''
                }
            </div>
            {
                myItems.map(sendMyItem =>
                    <table className='manage-item-table custom-table-container mx-auto container'>
                        <tr>
                            <td className='w-50'><h5>{sendMyItem.name}</h5></td>
                            <td className='w-25'><h5>৳ {sendMyItem.price}</h5></td>
                            <td className='w-25 text-center'><button className='remove-button' onClick={() => handleDelete(sendMyItem._id)}>X</button></td>
                        </tr>
                    </table>)
            }
        </div>
    );
};

export default MyItems;