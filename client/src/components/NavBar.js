import React, {useContext} from 'react';
import {Context} from '../index';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../util/consts';
import {observer} from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';

const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav.Link to={SHOP_ROUTE}>SUPERSTORE</Nav.Link>
                {user.isAuth?
                    <Nav className="py-1">
                        <Button
                            variant="outline-light"
                            onClick={()=> navigate(ADMIN_ROUTE)}
                            >
                            Admin panel
                        </Button>
                        <Button
                            onClick={()=> navigate(LOGIN_ROUTE)}
                            // onClick={()=> user.SetIsAuth(false)}>

                            className="mx-3"
                            variant="outline-light">
                            Sing out
                        </Button>
                    </Nav>
                    :
                    <Nav className="py-1">
                        <Button variant="outline-light"
                                className="mx-3"
                                onClick={()=> user.SetIsAuth(true)}>Sing in</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
