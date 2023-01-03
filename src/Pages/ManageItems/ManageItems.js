import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './ManageItems.css'

const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm("Please select 'OK' for delete.");
        if (proceed) {
            const url = `https://harmic-server.vercel.app//items/${id}`;
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
    return (
        <div className='container mb-5 mx-auto'>
            <PageTitle title="Manage Item"></PageTitle>
            <div className='mt-5 item-text-header text-center'>
                <h5 className='item-h5'>Manage</h5>
                <h1 className='item-h1 mb-5'>Your Items</h1>
                <table className='manage-item-table custom-table-container mx-auto'>
                    <tr>
                        <th className='w-50'>Name</th>
                        <th className='w-25'>Price</th>
                        {/* <th>Quantity</th>
                        <th>Supplier</th> */}
                        <th className='w-25 text-center'>Remove</th>
                    </tr>
                </table>
                {
                    items.length === 0 ? (<Loading></Loading>) : ''
                }
            </div>
            {
                items.map(item =>
                    <table className='manage-item-table custom-table-container mx-auto'>
                        <tr>
                            <td className='w-50'><h5>{item.name}</h5></td>
                            <td className='w-25'><h5>৳ {item.price}</h5></td>
                            {/* <td><h5>{item.quantity}</h5></td>
                            <td><h5>{item.supplier}</h5></td> */}
                            <td className='w-25 text-center'><button className='remove-button' onClick={() => handleDelete(item._id)}>X</button></td>
                        </tr>
                    </table>)
            }

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

export default ManageItems;