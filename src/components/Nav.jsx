import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";
// import {}

function MyNavbar({ onProfileClick }) {
	return (
		<Navbar className="my-bg" expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
			<Container fluid>
				<Navbar.Brand href="#">
					<img src="/assets/img/logo.png" alt="Logo" style={{ width: "100px", height: "55px" }} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#">Home</Nav.Link>
						<Nav.Link href="#">TV Shows</Nav.Link>
						<Nav.Link href="#">Movies</Nav.Link>
						<Nav.Link href="#">Recently Added</Nav.Link>
						<Nav.Link href="#">My List</Nav.Link>
					</Nav>
					<Nav className="align-items-center">
						<Search className="text-light me-3 pointer" />
						<div id="kids" className="fw-bold text-light me-3 pointer">
							KIDS
						</div>
						<Bell className="text-light me-3 pointer" />
						<PersonCircle className="text-light pointer" onClick={onProfileClick} />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
