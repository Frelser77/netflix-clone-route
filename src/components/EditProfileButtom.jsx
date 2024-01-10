import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

function EditProfileButtom() {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);
	return (
		<>
			<Row className="border-top border-1 pb-4 mt-3 profile-border" style={{ width: "626px" }}>
				<Col>
					<Button variant="light" className="fw-semibold my-3 border border-1 border-secondary rounded-0 flex-grow-1">
						SAVE
					</Button>
				</Col>
				<Col>
					<Button
						variant="secondary"
						className="fw-semibold my-3 border border-1 border-secondary rounded-0 flex-grow-1"
					>
						CANCEL
					</Button>
				</Col>
				<Col>
					<Button
						variant="secondary"
						className="fw-semibold my-3 border border-1 border-secondary rounded-0 flex-grow-1"
						onClick={handleShowModal}
					>
						DELETE PROFILE
					</Button>
				</Col>
			</Row>

			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton className="my-bg-modal">
					<Modal.Title className="text-light">CANCEL</Modal.Title>
				</Modal.Header>
				<Modal.Body className="my-bg-modal fs-3 fw-bold text-light">Are you sure to delete?</Modal.Body>
				<Modal.Footer className="my-bg-modal">
					<Button variant="secondary" onClick={onclose}>
						Close Edit Profile
					</Button>
					<Button variant="danger">CANCEL</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default EditProfileButtom;
