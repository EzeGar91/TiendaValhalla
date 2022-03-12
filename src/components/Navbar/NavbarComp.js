import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import {CartWidget} from './CartWidget'
import { Link } from 'react-router-dom'

const NavbarComp = () =>{
    return(
        <div>
            <Navbar bg="dark" variant="dark"
            sticky='top' expand='lg'>
                <CartWidget/>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav style={{alignItems:'center'}}>

                        <Link style={{textDecoration:'none', color:'white', fontSize:20, padding:5}} to="/">Home</Link>

                        <Link style={{textDecoration:'none', color:'white', fontSize:20, padding:5}} to="/category/MLA1051/Categoria1">Vinilos Nuevos</Link>

                        <Link style={{textDecoration:'none', color:'white', fontSize:20, padding:5}} to="/category/MLA1576/Categoria2">Vinilos Usados</Link>

                        <Link style={{textDecoration:'none', color:'white', fontSize:20, padding:5}} to="/category/MLA1577/Categoria3">Libros</Link> 
 

                        {/* <Link to="/cart">Carrito</Link> */}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;