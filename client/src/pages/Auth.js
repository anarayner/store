import React from 'react';
import {Button, Card, Container, Form,  Row} from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../util/consts';

const Auth = () => {
    // c помощью useLocation можно получить маршрут в строке запроса
    const location = useLocation()
    console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
            <Container
                className='d-flex justify-content-center align-items-center'
                style={{height: window.innerHeight -60}}>
                <Card
                    style={{width: 600}} className='p-5'>
                    <h2 className='m-auto'>
                        {isLogin? 'Sing in' : 'Create an account'}
                    </h2>
                    <Form className='d-flex flex-column'>
                        <Form.Control
                           className='mt-3'
                           placeholder='Enter your email..'
                        />
                        <Form.Control
                            placeholder='Enter your password..'
                            className='mt-3'
                        />
                        <Row  className='d-flex justify-content-end mt-2 p-3'>

                            <Button className='mt-3'>
                                {isLogin? 'Sing in' : 'Sing Up'}

                            </Button>
                            {isLogin?
                            <div className='mt-3'>
                                Don't have an account yet? <NavLink to={REGISTRATION_ROUTE}> Sign Up</NavLink>
                            </div>
                                :
                                <div className='mt-3'>
                                    Already have an account? <NavLink to={LOGIN_ROUTE}> Sign In</NavLink>
                                </div>
                            }
                        </Row>
                    </Form>
                </Card>

            </Container>

    );
};

export default Auth;
