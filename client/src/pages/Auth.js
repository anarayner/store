import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form,  Row} from 'react-bootstrap';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../util/consts';
import {login, registration} from '../http/userAPI';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';

const Auth = observer(() => {
    const {user} = useContext(Context)
    // c помощью useLocation можно получить маршрут в строке запроса
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    console.log(isLogin)

    const click = async() => {
        try {
            let data
            if (isLogin) {
                data = await login (email, password)

            } else {
                data = await registration (email, password)
            }
            user.setUser (user)
            user.setIsAuth (true)
            navigate(SHOP_ROUTE)
        }catch (e){
            alert(e.response.data.message)
        }

    }

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
                            value={email}
                            onChange={e=> setEmail(e.target.value)}
                           className='mt-3'
                           placeholder='Enter your email..'
                        />
                        <Form.Control
                            value={password}
                            onChange={e=> setPassword(e.target.value)}
                            placeholder='Enter your password..'
                            className='mt-3'
                            type='password'
                        />
                        <Row  className='d-flex justify-content-end mt-2 p-3'>

                            <Button className='mt-3' onClick={click}>
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
});

export default Auth;
