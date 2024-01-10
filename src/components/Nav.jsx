import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
// import {}

function MyNavbar({ onProfileClick }) {
	return (
		<Navbar className="my-bg sticky-top" expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
			<Container fluid>
				<NavLink to="/" className="nav-link">
					<img src="/assets/img/logo.png" alt="Logo" style={{ width: "100px", height: "55px" }} />
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/TvShow" className="nav-link">
							TvShows
						</NavLink>
						<NavLink to="/" className="nav-link">
							Movies
						</NavLink>
						<NavLink to="/" className="nav-link">
							Recently Added
						</NavLink>
						<NavLink to="/" className="nav-link">
							My List
						</NavLink>
					</Nav>
					<Nav className="align-items-center">
						<Search className="text-light me-3 pointer" />
						<div id="kids" className="fw-bold text-light me-3 pointer">
							KIDS
						</div>
						<Bell className="text-light me-3 pointer" />
						<NavLink to="/edit-profile" className="nav-link">
							<PersonCircle className="text-light pointer" onClick={onProfileClick} />
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
