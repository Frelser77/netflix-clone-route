import { Container } from "react-bootstrap";
import EditProfileTop from "./EditProfilTop";
import EditProfileButtom from "./EditProfileButtom";

const EditProfilePage = () => {
	return (
		<Container className="text-light">
			<div className="d-flex flex-column justify-content-center align-items-center my-container my-auto">
				<EditProfileTop />
				<EditProfileButtom />
			</div>
		</Container>
	);
};

export default EditProfilePage;
