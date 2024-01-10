import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Nav";
import TVShowsHeader from "./components/ActionBar";
import FilmGrid from "./components/Gallery";
import Footer from "./Footer";
import EditProfilePage from "./components/EditProfile";
import NotFound from "./NotFound";
import MovieDetails from "./components/MovieDetails";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<>
					<MyNavbar />
					<TVShowsHeader />
				</>
				<Routes>
					<Route path="/edit-profile" element={<EditProfilePage />} />
					<Route
						path="/"
						element={
							<>
								<FilmGrid sectionTitle={"Trending Now"} searchQuery={"Harry Potter"} />
								<FilmGrid sectionTitle={"Watch it Again"} searchQuery={"Lord Of Rings"} />
								<FilmGrid sectionTitle={"New Releases"} searchQuery={"Spider Man"} />
								<FilmGrid sectionTitle={"For You"} searchQuery={"Avengers"} />
								<FilmGrid sectionTitle={"Old Movies"} searchQuery={"Disney"} />
								<Footer />
							</>
						}
					/>
					<Route path="/TvShow/:movieId" element={<MovieDetails />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
