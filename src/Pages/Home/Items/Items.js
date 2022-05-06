import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://harmic.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div id="items" className='container'>
            <div className="row">
                <div className='my-5 text-center'>
                    <h5 className='item-h5'>SEE OUR LATEST</h5>
                    <h1 className='item-h1'>ARRIVAL ITEMS</h1>
                </div>
                <div className="items-container">
                    {
                        items.slice(0, 6).map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;