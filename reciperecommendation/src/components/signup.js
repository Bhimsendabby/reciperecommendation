import React, {useRef, useState} from 'react'
import {Card, Form, Button, FormGroup, Alert, Container} from 'react-bootstrap'
import { useAuth, currentUser } from '../contexts/AuthContext'
import {Link, useNavigate} from 'react-router-dom';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()

    const[error, setError] = useState('')
    const[loading, setLoading] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value)
        {
            return setError('Passwords do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        }
        catch(e) {
            console.log(e)
            setError('Failed to create an account')
        }
        setLoading(false)


    }

  return (
    <>
    <div className='row'>
        <div className='column' style={{backgroundColor:"#0d6efd"}}>
          
        </div>
        <div className='column'>
     <Container className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
          <div className='w-100' style={{ maxWidth:"400px"}}>

        <Card>
            <Card.Body>
            <h2 className='text-center mb-4'>
                Sign Up
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <FormGroup id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                </FormGroup>
                <FormGroup id="passowrd">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                </FormGroup>
                <FormGroup id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                </FormGroup>
                <Button disabled={loading} className='w-100' type="submit" style={{marginTop:"15px"}}>Sign Up</Button>
            </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2 '>
        Already have an account <Link to='/login'>Log In</Link>
                <footer>&copy; Copyright 2022-2023 by Recipe Recommendation. All Rights Reserved.</footer>
            </div>
            </div>
            </Container>
          </div>
      </div>
    </>
  )
}
