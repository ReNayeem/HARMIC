import React from 'react';

const MyItem = ({ sendMyItem }) => {

    return (
        <div>
            <h1>{sendMyItem.name}</h1>
        </div>
    );
};

export default MyItem;