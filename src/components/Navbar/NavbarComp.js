import React, { Component } from "react";
import {Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import {CartWidget} from '../Navbar/CartWidget/CartWidget'

export class NavbarComp extends Component {
    render () {
        return (
            <div>
                <Navbar bg="dark" variant={"dark" }expand="lg">
                    <Navbar.Brand href="#home">Valhalla Records</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Local</Nav.Link>
                        <NavDropdown title="Musica" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Vinilos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Bandejas TocaDiscos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Auriculares</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Libros Stephen King</NavDropdown.Item>
                        </NavDropdown>
                        <CartWidget/>
                        </Nav>
                     </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}