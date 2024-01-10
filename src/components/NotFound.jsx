import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NotFound = (props) => {
	const navigate = useNavigate();

	console.log(navigate);

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 10000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="text-center mt-5" style={{ height: "calc(100vh - 173.39px)" }}>
			<h1 className="display-3 text-primary">404 - Risorsa non trovata!</h1>
			<p className="lead text-light">L'informazione che cercavi non è disponibile.</p>
			<NavLink to="/" className={"nav-link text-light p-2 my-5"}>
				Torna alla home!
			</NavLink>
		</div>
	);
};
export default NotFound;
