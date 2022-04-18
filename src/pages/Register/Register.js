import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleRegister = event =>{
       const name = nameRef.current.value 
       const email = emailRef.current.value
       const password = passwordRef.current.value

       createUserWithEmailAndPassword(email,password)
    }
    return (
        <div>
            <h2 className='text-center text-info'>PLease Register</h2>
            <Form className='w-50 mx-auto' onClick={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={nameRef} type="text" placeholder="Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center'>New to event-planner / <span as={Link} to='/login' style={{cursor:'pointer'}} className='text-danger'>create an account</span></p>

        </div>
    );
};

export default Register;