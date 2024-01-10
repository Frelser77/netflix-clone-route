import { Button, Col, Dropdown, DropdownButton, Form, InputGroup, Row } from "react-bootstrap";

const CustomCheckbox = ({ id, label }) => {
	return (
		<InputGroup className="">
			<InputGroup.Checkbox id={id} className="border-secondary rounded-0" />
			<Form.Label htmlFor={id} className="form-check-label d-flex">
				{label}
			</Form.Label>
		</InputGroup>
	);
};

function EditProfileTop() {
	return (
		<>
			<h1>Edit Profile</h1>
			<Row className="border-top border-1 pb-4 my-4 profile-border" style={{ width: "626px" }}>
				<Col xs={3} className="text-center">
					<img
						src="./assets/img/kids_icon.png"
						alt="Profile kids"
						className="mt-3 pointer"
						style={{ maxWidth: "110px" }}
					/>
				</Col>
				<Col>
					<Row className="border-bottom border-1 pb-4 my-4 profile-border">
						<Col>
							<Button variant="secondary" size="sm" className="rounded-0 pe-5 mb-3 text-start">
								Strive student
							</Button>
							<p className="mb-1 text-secondary">Language:</p>
							<DropdownButton variant="secondary" title="English" className="rounded-0 border border-1">
								<Dropdown.Item href="#">Italian</Dropdown.Item>
								<Dropdown.Item href="#">German</Dropdown.Item>
							</DropdownButton>
						</Col>
					</Row>
					<Row className="border-bottom border-1 pb-4 profile-border">
						<Col>
							<p className="mt-3 text-secondary">Maturity Settings:</p>
							<Button variant="secondary" size="sm" className="rounded-0 pe-5 mb-3 mt-1">
								ALL MATURITY RATINGS
							</Button>
							<p>Show titles of all maturity ratings for this profile</p>
							<Button variant="secondary" className="my-3 border border-1 border-secondary rounded-0">
								EDIT
							</Button>
						</Col>
					</Row>
					<Row>
						<Col xs={9}>
							<p className="mt-4 mb-1 text-secondary">Autoplay controls</p>
							<CustomCheckbox id="autoplay-next" label="Autoplay next episode in a series on all devices." />
							<CustomCheckbox id="autoplay-previews" label="Autoplay previews while browsing on all devices." />
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}

export default EditProfileTop;
