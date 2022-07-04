import React, { useEffect, useState } from "react";
import { getStarWarsMovies } from "../../services/movies";
import { Movie } from "../../utils/types";
import { Content } from "./Content";
import { Header } from "./Header";

const Main: React.FC = () => {
	const [movies, setMovies] = useState<Movie[]>([] as Movie[]);

	useEffect(() => {
		async function fetchMovies() {
			const movies = await getStarWarsMovies() as Movie[]
			setMovies(movies)
		}
		fetchMovies()
	}, [])

	return (
		<div>
			<Header />
			<Content movies={movies} />
		</div>
	);
};

export default Main;
