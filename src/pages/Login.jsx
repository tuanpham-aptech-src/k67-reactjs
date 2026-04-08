import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginPage({handleLogin}) {

    // đăng nhập với username = admin | password = 123456
    // sau khi đăng nhập thành công thì chuyển trang về home page

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginFormSubmit = (ev)=>{
        ev.preventDefault();
        handleLogin({username, password})
    }

    return <>

    <div style={{backgroundColor: '#4f46e5', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Form onSubmit={handleLoginFormSubmit} style={{backgroundColor: '#fff', width:'520px', padding: '24px' , borderRadius: '8px' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email"  onChange={(ev)=>{setUsername(ev.target.value)}} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(ev)=>{setPassword(ev.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
   
    </>
}