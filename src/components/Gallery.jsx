import React, { useState, useEffect } from "react";
import { Carousel, Container, Badge, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselSkeleton from "./CarouselSkeleton";

// const Loader = () => <div className="loader-style"></div>;

const MoviesSection = ({ sectionTitle, searchQuery }) => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [index, setIndex] = useState(0);

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

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	// Funzione per suddividere i film in gruppi di 6
	const chunkMovies = (movies, size) => {
		// Verifica che movies sia definito e che sia un array con elementi
		if (!Array.isArray(movies) || movies.length === 0) {
			return [];
		}

		const fullChunks = Math.floor(movies.length / size);
		const totalChunks = fullChunks + (movies.length % size === 0 ? 0 : 1);
		const chunks = Array.from({ length: totalChunks }, (_, index) => {
			const start = index * size;
			return movies.slice(start, start + size);
		});

		// Se l'ultimo gruppo non è pieno, aggiungi elementi dall'inizio dell'array per riempirlo
		const lastChunkIndex = totalChunks - 1;
		if (chunks[lastChunkIndex].length < size) {
			chunks[lastChunkIndex] = [...chunks[lastChunkIndex], ...movies.slice(0, size - chunks[lastChunkIndex].length)];
		}

		return chunks;
	};

	const movieChunks = chunkMovies(movies, 6);

	if (error) return <p>Error: {error}</p>;
	if (isLoading) return <CarouselSkeleton />;

	return (
		<div className="my-bg">
			<Container fluid className="my-1">
				<h2 className="text-light">{sectionTitle}</h2>
				<Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
					{movieChunks.map((chunk, chunkIdx) => (
						<Carousel.Item key={chunkIdx}>
							<Row className="g-1">
								{chunk.map((movie) => (
									<Col
										key={movie.imdbID}
										xs={12}
										sm={6}
										md={4}
										lg={3}
										xl={2}
										className="text-center px-1 position-relative"
									>
										<Link to={`/TvShow/${movie.imdbID}`}>
											<img
												className="d-block h-100 w-100 pointer my-movie"
												src={movie.Poster}
												alt={movie.Title}
												style={{ height: "150px", objectFit: "cover" }}
											/>
										</Link>
										<Badge bg="danger" className="movie-badge">
											{movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
										</Badge>
									</Col>
								))}
							</Row>
						</Carousel.Item>
					))}
				</Carousel>
			</Container>
		</div>
	);
};

export default MoviesSection;
