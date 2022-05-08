import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Item from '../Home/Item/Item';
import PageTitle from '../Shared/PageTitle/PageTitle';

const AllItems = () => {
    const [items] = useItems()

    return (
        <div id="items" className='container mb-5'>
            <PageTitle title="All Items"></PageTitle>
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
            <div className='d-flex mt-3 justify-content-end'>
                <Link as={Link} to="/AddItem">
                    <button className="banner-button">
                        <span className="hover-underline-animation"> Add New Item </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AllItems;