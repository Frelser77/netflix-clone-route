import React from "react";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

const TVShowsHeader = () => {
	return (
		<Container fluid className="my-bg">
			<div className="d-flex justify-content-between">
				<div className="d-flex">
					<h2 className="mb-3 text-light">TV Shows</h2>
					<DropdownButton as="div" className="ms-4 mt-1 text-light my-btn" title="Genres" size="sm">
						<Dropdown.Item href="#">Comedy</Dropdown.Item>
						<Dropdown.Item href="#">Drama</Dropdown.Item>
						<Dropdown.Item href="#">Thriller</Dropdown.Item>
					</DropdownButton>
				</div>
				<div className="text-light d-flex align-item-center justify-content-between  d-none d-md-inline-block">
					<Grid className="icons pointer me-2" style={{ fontSize: "1.5rem" }} />
					<Grid3x3 className="icons pointer" style={{ fontSize: "1.5rem" }} />
				</div>
			</div>
		</Container>
	);
};

export default TVShowsHeader;
