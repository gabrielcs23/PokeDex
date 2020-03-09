import React, { Fragment } from 'react';
import './App.css';
import PokeList from './Components/PokeList/PokeList';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">PokéDex</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">
                            <i className="fas fa-home"></i>
                        </Nav.Link>
                        <Nav.Link href="#sobre">Sobre</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container mt-2">
                <PokeList />
            </div>
        </Fragment>
    );
}

export default App;
