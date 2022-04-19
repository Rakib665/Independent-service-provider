import google from '../../images/google.png'
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    const navigate = useNavigate()
    let errorElement;
    const handleGoogleSignIn = event => {
        signInWithGoogle()
    }
    if (error) {

        errorElement = <div className='mx-auto text-center'>
            <p className='text-danger'>Error: {error?.message} </p>
        </div>

    }
    if (loading) {
        return <p className='text-center'>Loading...</p>;
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center '>
                <div style={{ height: '1px' }} className='bg-info w-25 '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-info w-25 '></div>
            </div>
            <div>
                {errorElement}
                <button
                    onClick={handleGoogleSignIn}
                    className='btn btn-info w-25 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;