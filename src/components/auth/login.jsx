import React, { useEffect, useState , useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuth from '../../context/authContext';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('Login Pending...');
    let navigate = useNavigate();
    const [params] = useSearchParams();
    const { login,logout } = useAuth();

    const msg = params.get('message');

    const iRef = useRef()
        useEffect(()=>{
            iRef.current.focus();
        },[])

    useEffect(() => {
        setMessage(msg || 'Login Pending...');
    }, [msg]);


    const isValid =
        username.length >= 5 && password.length >= 5;

    const  handleLogin = async (e) => {
        e.preventDefault();
        const res = login(username, password);

        try{
            const response = await fetch('https://fullstack-backend-production-2e4f.up.railway.app/api/user/login',{
                method:'POST',
                body : JSON.stringify({username,password}),
                credentials : 'include',
                headers : {
                    'Content-type' : 'application/json'
                },
            });
            const data = await response.json();
            console.log(data.time)

           
            // const timeout = setTimeout(() => {
            //     alert('Session Expired')
            //     logout()
            //     clearTimeout(timeout)     
            // }, data.time);
           

            setMessage(data)
        }
        catch(error){
              setMessage(error);
        }

       

        if (res) {
            setMessage('Login Successful');
            navigate('/products');
        } else {
            setMessage('Login Failed'); 
        }
    };

    

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h1>Login</h1>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleLogin}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type='text' value={username} placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} ref={iRef} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='text' value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                {!isValid && (
                                    <p style={{ color: 'red' }}>
                                        Username and password must be at least 5 characters
                                    </p>
                                )}
                                <Button type="submit" disabled={!isValid}>
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {!isValid && (
                    <p style={{ color: 'red' }}>
                        Username and password must be at least 5 characters
                    </p>
                )}

                <button type="submit" disabled={!isValid}>
                    Login
                </button>
            </form> */}

            <h2>{message}</h2>
        </Container>
    );
}

export default Login;
