import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
	return (
		<footer className="mt-5">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={6}>
						<Row>
							<Col className="mb-2 text-start">
								<Facebook className="footer-icon me-2 my-icon-color pointer" />
								<Instagram className="footer-icon me-2 my-icon-color pointer" />
								<Twitter className="footer-icon me-2 my-icon-color pointer" />
								<Youtube className="footer-icon my-icon-color pointer" />
							</Col>
						</Row>
						<Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 mb-4">
							<Col className="footer-links d-flex flex-column">
								<a href="." onClick={(e) => e.preventDefault()}>
									Audio and Subtitles
								</a>
								<a href="." onClick={(e) => e.preventDefault()}>
									Media Center
								</a>
								<a href="." onClick={(e) => e.preventDefault()}>
									Privacy
								</a>
								<a href="." onClick={(e) => e.preventDefault()}>
									Contact us
								</a>
							</Col>
							<Col className="footer-links d-flex flex-column">
								<a href="." onClick={(e) => e.preventDefault()}>
									Audio Description
								</a>
								<a href="." onClick={(e) => e.preventDefault()}>
									Investor Relations
								</a>
								<a href="." onClick={(e) => e.preventDefault()}>
									Legal Notices
								</a>
							</Col>
							<Col className="footer-links d-flex flex-column">
								<a href="." onClick={(e) => e.preventDefault()}>
									Help Center
								</a>
								<a href="." onClick={(e) => e.preventDefault()}>
									Jobs
								</a>
								<a href="." onClick={(e) => e.preventDefault()}>
									Cookie Preferences
								</a>
							</Col>
							<Col className="footer-links d-flex flex-column">
								<a href="." onClick={(e) => e.preventDefault()}>
									Gift Cards
								</a>
								<a href="." onClick={(e) => e.preventDefault()}>
									Terms of Use
								</a>
								<a href="." onClick={(e) => e.preventDefault()}>
									Corporate Information
								</a>
							</Col>
						</Row>
						<Row>
							<Col className="mb-2 text-start">
								<Button size="sm" className="footer-button rounded-0 mt-3 btn my-btn text-secondary">
									Service Code
								</Button>
							</Col>
						</Row>
						<Row>
							<Col className="mb-2 mt-2 text-start copyright my-color" style={{ fontSize: "15" }}>
								© 1997-2023 Netflix, Inc.
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
