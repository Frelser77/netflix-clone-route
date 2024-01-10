import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, NavLink, useParams } from "react-router-dom";

const MovieDetails = () => {
	const { movieId } = useParams();
	const [movieDetails, setMovieDetails] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				setLoading(true);
				const omdbResponse = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=aab3a59e`);
				const omdbData = await omdbResponse.json();
				if (omdbData.Response === "True") {
					setMovieDetails(omdbData);
				} else {
					throw new Error(omdbData.Error);
				}
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchMovieDetails();
	}, [movieId]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<Container>
			<Card className="h-100 w-100" style={{ maxHeight: "200", maxWidth: "300" }}>
				<Card.Img variant="top" src={movieDetails.Poster} />
				<Card.Body>
					<Card.Title>{movieDetails.Title}</Card.Title>
					<Card.Text>{movieDetails.Plot}</Card.Text>
					<Link to={"/"} className={"btn btn-dark nav-link"}></Link>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default MovieDetails;
