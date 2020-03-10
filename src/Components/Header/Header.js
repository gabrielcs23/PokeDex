import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <NavLink activeStyle={{fontWeight: "bold"}} to="/">
                    PokéDex
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <NavLink activeStyle={{fontWeight: "bold"}} to="/">
                        <i className="fas fa-home"></i>
                    </NavLink>
                    <NavLink className="pl-2" activeStyle={{fontWeight: "bold"}} to="/sobre">Sobre</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;