import React from 'react';
import useItems from '../../hooks/useItems';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './ManageItems.css'

const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://harmic.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
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
        </div>
    );
};

export default ManageItems;