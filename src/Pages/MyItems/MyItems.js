import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
import './MyItems.css'

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
            <div className='my-5 text-center'>
                <h4 className='item-h5 text-success'>{user.displayName}</h4>
                <h6 className='item-h5'>{user.email}</h6>
                <h1 className='item-h1'>ADDED ITEMS</h1>
            </div>
            {
                myItems.map(sendMyItem => <MyItem key={MyItem._id} sendMyItem={sendMyItem}></MyItem>)
            }
        </div>
    );
};

export default MyItems;