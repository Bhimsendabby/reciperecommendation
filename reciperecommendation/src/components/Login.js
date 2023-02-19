import React, {useRef, useState} from 'react'
import {Card, Form, Button, FormGroup, Alert, Container} from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import { useAuth, currentUser } from '../contexts/AuthContext'
import {Link, useNavigate} from 'react-router-dom';
import '../assets/layout.css';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()

    const[error, setError] = useState('')
    const[loading, setLoading] = useState('')
    const navigate = useNavigate()
    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        }
        catch(e) {
            console.log(e)
            setError('Failed to Log In')
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
                    Log In
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
                    <Button disabled={loading} className='w-100' type="submit" style={{marginTop:"15px"}}>Log In</Button>
                </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2 '>
                Need an account? <Link to='/signup'>Sign Up</Link>
                <p></p>
                <footer>&copy; Copyright 2022-2023 by Recipe Recommendation. All Rights Reserved.</footer>
            </div>
            </div>
            </Container>
          </div>
      </div>

    </>
  )
}
