import React, { useState, useEffect } from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";

const Loader = () => <div className="loader-style"></div>;

const MoviesSection = ({ sectionTitle, searchQuery }) => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://www.omdbapi.com/?apikey=aab3a59e&s=${searchQuery}`);
				const data = await response.json();
				if (data.Response === "True") {
					setMovies(data.Search);
				} else {
					setError(data.Error);
				}
			} catch (error) {
				setError("Failed to fetch movies");
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [searchQuery]);

	if (error) return <p>Error: {error}</p>;

	return (
		<div className="my-bg">
			<Container fluid>
				<h2 className="text-light">{sectionTitle}</h2>
				<Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 my-2 flex-nowrap overFlow movie-section-container">
					{isLoading
						? Array.from({ length: 6 }, (_, idx) => (
								<Col key={idx} xs={12} sm={6} md={4} lg={3} xl={2} className="my-1 text-center px-1">
									<Loader />
								</Col>
						  ))
						: movies.map((movie) => (
								<Col
									key={movie.imdbID}
									xs={12}
									sm={6}
									md={4}
									lg={3}
									xl={2}
									className="text-center px-1 position-relative"
								>
									<img
										className="img-fluid my-movie"
										src={movie.Poster}
										alt={movie.Title}
										style={{ width: "100%", height: "150px", objectFit: "cover" }}
									/>
									<Badge bg="danger" className="movie-badge">
										{movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
									</Badge>
								</Col>
						  ))}
				</Row>
			</Container>
		</div>
	);
};

export default MoviesSection;
