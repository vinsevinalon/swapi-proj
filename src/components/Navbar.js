import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <Container>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <Nav.Link as={Link} to="/">
                                STAR WARS API
                            </Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/people">
                                    People
                                </Nav.Link>
                                <Nav.Link as={Link} to="/planets">
                                    Planets
                                </Nav.Link>
                                <Nav.Link as={Link} to="/starships">
                                    Starships
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            <Outlet />
        </>
    );
}
