import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../SharedPage/Loading/Loading';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if (error ) {
       
        errorElement =  <div className='mx-auto text-center'>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
         
      }
      if (loading || sending ) {
        return <Loading></Loading>
      }
      if (user ) {
        navigate(from, { replace: true });
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email,password)
       
        
    }
    const handleNavigate = (event) =>{
            navigate('/register')
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value

        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='text-center'>New to event-planner / <span onClick={handleNavigate} style={{cursor:'pointer'}} className='text-danger'>create an account</span></p>
            <p className='text-center'>Forget Password / <button className='btn btn-link' onClick={resetPassword} style={{cursor:'pointer'}} >Reset Password</button></p>
            <ToastContainer />

        </div>
    );
};

export default Login;