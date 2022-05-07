import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
    }

    return (
        <div className='register-form container custom-input-container'>
            <PageTitle title="Register"></PageTitle>
            <div className='my-5 text-center'>
                <h5 className='item-h5'>Please</h5>
                <h1 className='item-h1'>Register</h1>
            </div>
            <form onSubmit={handleRegister}>
                <input className='add-item-input' type="text" name="name" id="" placeholder='Your Name' />

                <input className='add-item-input' type="email" name="email" id="" placeholder='Email Address' required />

                <input className='add-item-input' type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept <span className='text-success'>HARMIC</span>'s Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='mx-auto add-item-button mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='login-text text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;