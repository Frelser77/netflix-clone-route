import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Nav";
import TVShowsHeader from "./components/ActionBar";
import FilmGrid from "./components/Gallery";
import Footer from "./Footer";
import EditProfilePage from "./components/EditProfile";
import { useState } from "react";

function App() {
	const [showEditProfile, setShowEditProfile] = useState(false);

	const toggleEditProfile = () => setShowEditProfile(!showEditProfile);

	return (
		<div className="App">
			<MyNavbar onProfileClick={toggleEditProfile} />
			{showEditProfile ? (
				<EditProfilePage />
			) : (
				<>
					{/* SULLA NAVBAR CLICCARE LÍCONA DEL PROFILO IN ALTO A DESTRA PER CAMBIARE VISUALIZZAZIONE */}
					<TVShowsHeader />
					<FilmGrid sectionTitle={"Trending Now"} searchQuery={"Harry Potter"} />
					<FilmGrid sectionTitle={"Watch it Again"} searchQuery={"Lord Of Rings"} />
					<FilmGrid sectionTitle={"New Releases"} searchQuery={"Spider Man"} />
					<FilmGrid sectionTitle={"For You"} searchQuery={"Avengers"} />
					<FilmGrid sectionTitle={"Old Movies"} searchQuery={"Disney"} />
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
