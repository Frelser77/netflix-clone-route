import { Col, Container, Row } from "react-bootstrap";

const CarouselSkeleton = () => {
	const placeholderItems = [...Array(6)];

	return (
		<Container>
			<Row className="g-1">
				{placeholderItems.map((_, index) => (
					<Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="text-center px-1 position-relative">
						<div className="d-block w-100" style={{ height: "100px my-2", backgroundColor: "grey" }}></div>
						<div className="d-block w-100" style={{ height: "100px my-2", backgroundColor: "grey" }}></div>
						<div className="d-block w-100" style={{ height: "100px my-2", backgroundColor: "grey" }}></div>
						<div className="d-block w-100" style={{ height: "100px my-2", backgroundColor: "grey" }}></div>
						<div className="d-block w-100" style={{ height: "100px my-2", backgroundColor: "grey" }}></div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default CarouselSkeleton;
