import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex custom-input-container mx-auto align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
            </div>
            {errorElement}
            <div className='mb-5'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='google-login-button d-block mx-auto my-2'>
                    <img style={{ width: '26px' }} src={google} alt="" />
                    <span className='m-2'>Google Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='github-login-button d-flex align-items-center mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='m-2'>GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;