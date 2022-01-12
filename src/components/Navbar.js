import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';




export default function Menu() {
	return (
	<>
		<Navbar bg="dark" variant="dark" className="menu-bar">
			<Container>
				<Navbar.Brand>
					 <Nav.Link as={Link} to="/">SWAPI</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
					<Nav.Link as={Link} to="/">Home</Nav.Link>
					<Nav.Link as={Link} to="/people">People</Nav.Link>
					<Nav.Link as={Link} to="/planets">Planets</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		<Outlet />
	</> 
	)
}
