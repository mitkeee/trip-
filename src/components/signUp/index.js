import React ,{useRef}from 'react'
import {Form,Card,Button} from 'react-bootstrap'

export default function Signup (){
    const emailRef = useRef()
    const passwordRef = useRef ()
    const confirmRef = useRef () 

  return (
    <div>
        <Card>
            <Card.Body>
            <h2 className='text-center mb-4'>Sign up</h2>
            <Form>
                <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id='confirm'>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="confirm" ref={confirmRef} required />
                </Form.Group>
                <Button className="w-100"type='submit'>Sign Up</Button>
            </Form>
         </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account? Login
        </div>
    </div>
  )
}