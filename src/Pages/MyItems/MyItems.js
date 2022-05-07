import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        const myItemsHandle = async () => {
            const email = user.email
            const url = `http://localhost:5000/AddItem?email=${email}`;
            const { data } = await axios.get(url)
            setMyItems(data)
        }
        myItemsHandle()
    }, [user.email])
    return (
        <div>
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
                    </tr>
                </table>
            </div>
            {
                myItems.map(sendMyItem =>
                    <table className='manage-item-table custom-table-container mx-auto container'>
                        <tr>
                            <td className='w-50'><h5>{sendMyItem.name}</h5></td>
                            <td className='w-25'><h5>৳ {sendMyItem.price} TK</h5></td>
                        </tr>
                    </table>)
            }
        </div>
    );
};

export default MyItems;