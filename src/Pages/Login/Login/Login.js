import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import toast from 'react-hot-toast';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import useToken from '../../../hooks/useToken';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Reset password email sent');
        }
        else {
            toast.error('Please enter your email address');
        }
    }

    return (
        <div className='container mx-auto custom-input-container'>
            <PageTitle title="Login"></PageTitle>
            <div className='my-5 text-center'>
                <h5 className='item-h5'>Please</h5>
                <h1 className='item-h1'>Login</h1>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='login-input' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='login-input' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className=" mx-auto d-block login-button mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <div className='d-flex mt-5 flex-wrap align-items-center justify-content-center'>

                <p className='px-2'>New to <span className='text-success'>HARMIC</span>? <Link to="/register" className='login-text text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

                <p className='px-2'>Forget Password? <button className='btn p-0 btn-link login-text text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

            </div>
            <SocialLogin></SocialLogin>

        </div >
    );
};

export default Login;