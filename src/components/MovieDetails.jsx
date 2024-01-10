import React, { useState, useEffect } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MovieDetailsSkeleton from "./MovieDetailsSkeleton ";

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

	if (loading) return <MovieDetailsSkeleton />;
	if (error) return <div>Error: {error}</div>;
	if (!movieDetails) return <div>Movie details not found</div>;

	return (
		<Container>
			<Card className="mx-auto text-center card-shad my-auto" style={{ backgroundColor: "#221f1f" }}>
				<Row>
					<Col md={4}>
						<Card.Img variant="top" src={movieDetails.Poster} style={{ maxHeight: "450px", objectFit: "cover" }} />
					</Col>

					<Col md={8}>
						<Card.Body className="d-flex flex-column justify-content-between aling-items-center gap-3">
							<Card.Title className="text-light">{movieDetails.Title}</Card.Title>
							<Card.Text className="text-light">{movieDetails.Plot}</Card.Text>
							<div className="d-flex justify-content-around alig-items-center">
								<Badge className="me-1 my-1">Vote: {movieDetails.imdbRating}</Badge>
								<Badge className="me-1 my-1">{movieDetails.Released}</Badge>
								<Badge className="me-1 my-1">Durata: {movieDetails.Runtime}</Badge>
								<Badge className="me-1 my-1">Regia: {movieDetails.Director}</Badge>
							</div>
							<Link to={"/"} className={"btn btn-dark nav-link text-light px-3 py-1 my-3 my-btn btn-dtls"}>
								Torna alla home
							</Link>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		</Container>
	);
};

export default MovieDetails;
