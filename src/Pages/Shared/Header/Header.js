import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../../src/harmic.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar className='navbar' collapseOnSelect expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbar-link">
                            {/* <Nav.Link href="home">Home</Nav.Link> */}
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/AllItems">Items</Nav.Link>
                            <Nav.Link as={Link} to="Blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className='navbar-link'>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="AddItem">Add</Nav.Link>
                                    <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="MyItems">My Items</Nav.Link>
                                    {/* <Nav.Link as={Link} to="orders">Orders</Nav.Link> */}
                                </>
                            }
                            {
                                user ?
                                    <button className='btn navbar-link btn-link text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;