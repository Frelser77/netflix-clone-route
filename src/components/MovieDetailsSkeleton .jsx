import { Card, Col, Container, Row } from "react-bootstrap";

const MovieDetailsSkeleton = () => (
	<Container>
		<Card className="mx-auto text-center card-shad my-auto" style={{ backgroundColor: "#221f1f" }}>
			{/* ... altri elementi dello scheletro ... */}
			<Row>
				<Col md={4}>
					<div style={{ maxHeight: "450px", background: "grey" }} />
				</Col>
				<Col md={8}>
					<Card.Body
						className="d-flex flex-column justify-content-between align-items-center gap-3"
						style={{ maxHeight: "450px", background: "grey" }}
					>
						<div style={{ backgroundColor: "#221f1f", height: "2rem", width: "70%" }}></div>
						<div style={{ backgroundColor: "#221f1f", height: "10rem", width: "90%" }}></div>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	</Container>
);

export default MovieDetailsSkeleton;
