import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="lg" className='py-4'>
                <Container>
                    <Link className='text-white text-decoration-none fw-bolder fs-2' to="/">Master Crackerz</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink  className={`text-white text-decoration-none nav-item-link px-4 fw-bold`} to="/home">Home</NavLink>
                        <NavLink  className={`text-white text-decoration-none nav-item-link px-4 fw-bold`} to="/courses">Courses</NavLink>
                        <NavLink  className={`text-white text-decoration-none nav-item-link px-4 fw-bold`} to="/statics">Statics</NavLink>
                        <NavLink  className={`text-white text-decoration-none nav-item-link px-4 fw-bold`} to="/blog">Blog</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;