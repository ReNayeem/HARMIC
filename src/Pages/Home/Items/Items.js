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
                <h1 className='text-primary text-center my-5'> Our items</h1>
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