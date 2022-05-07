import React from 'react';
import useItems from '../../hooks/useItems';
import Item from '../Home/Item/Item';
import './AllItems.css'

const AllItems = () => {
    const [items, setItems] = useItems()
    return (
        <div id="items" className='container mb-5'>
            <div className="row">
                <div className='my-5 text-center'>
                    <h5 className='item-h5'>All</h5>
                    <h1 className='item-h1'>Items</h1>
                </div>
                <div className="items-container">
                    {
                        items.map(item => <Item
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

export default AllItems;