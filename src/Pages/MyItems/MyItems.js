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
            <h1>My items</h1>
            <p>{user.email}</p>
            {
                myItems.map(sendMyItem => <MyItem key={MyItem._id} sendMyItem={sendMyItem}></MyItem>)
            }
        </div>
    );
};

export default MyItems;