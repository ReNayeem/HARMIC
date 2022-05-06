import React from 'react';
import useItems from '../../hooks/useItems';
import Item from '../Home/Item/Item';

const AllItems = () => {
    const [items, setItems] = useItems()
    return (
        <div id="items" className='container'>
            <div className="row">
                <h1 className='text-primary text-center my-5'>All items</h1>
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