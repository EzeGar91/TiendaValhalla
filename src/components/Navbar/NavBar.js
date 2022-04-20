import ValhallaLogo from '../../assets/logo1.jpeg'
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { CartWidget } from '../../components/NavBar/CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavbarComp = () => {

    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark"
                    sticky='top' expand='lg'>
                    <Navbar.Brand>
                        <img src={ValhallaLogo} style={{ height: '90px', width: '150px' }} className="ValhallaImg" />
                    </Navbar.Brand>
                    <CartWidget />
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav style={{ textAlign: 'center' }}>
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/">Home</Link>
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/category/Vinilos">Vinilos</Link>
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/category/Libros">Libros</Link>
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/cart">Carrito</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default NavbarComp;