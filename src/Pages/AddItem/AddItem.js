import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

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
                toast.success(`Moori kha`, { id: 'success' })
                console.log(result);
            })
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' readOnly value={user?.email} {...register("email")} />
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>

    );
};

export default AddItem;