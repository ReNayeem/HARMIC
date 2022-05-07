import React from 'react';

const MyItem = ({ sendMyItem }) => {

    return (
        <div>
            <table className='manage-item-table container'>
                <tr>
                    <th className='w-50'>Name</th>
                    <th className='w-25'>Price</th>
                </tr>
                <tr>
                    <td className='w-50'><h5>{sendMyItem.name}</h5></td>
                    <td className='w-25'><h5>৳ {sendMyItem.price} TK</h5></td>
                </tr>
            </table>
        </div>

    );
};

export default MyItem;