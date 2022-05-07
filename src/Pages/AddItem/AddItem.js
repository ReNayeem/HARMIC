import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import './AddItem.css'
import PageTitle from '../Shared/PageTitle/PageTitle';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = (data, event) => {
        console.log(data);
        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                event.target.reset()
                toast.success(`Successfully Added`, { id: 'success' })
                console.log(result);
            })
    };


    return (
        <div className='container custom-input-container mx-auto'>
            <PageTitle title="Add Item"></PageTitle>
            <div className='my-5 text-center'>
                <h5 className='item-h5'>ADD ITEM</h5>
                <h1 className='item-h1'>HERE</h1>
            </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input required className='mb-2 add-item-input' placeholder='Name' {...register("name")} />
                <input className='mb-2 add-item-input' readOnly value={user?.email} {...register("email")} />
                <input required className='mb-2 add-item-input' placeholder='Price' type="number" {...register("price")} />
                <input required className='mb-2 add-item-input' placeholder='Quantity' type="number" {...register("quantity")} />
                <textarea required className='mb-2 add-item-input' placeholder='Description' {...register("description")} />
                <input required className='mb-2 add-item-input' placeholder='Supplier' {...register("supplier")} />
                <input className='mb-2 add-item-input' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='add-item-button mb-5' type="submit" value="Add Item" />
            </form>
        </div>

    );
};

export default AddItem;