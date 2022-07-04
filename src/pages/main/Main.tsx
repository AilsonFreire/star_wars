import React, { useCallback, useEffect, useState } from "react";
import { getStarWarsMovies } from "../../services/movies";
import { Movie } from "../../utils/types";
import { Content } from "./Content";
import { Header } from "./Header";

const Main: React.FC = () => {
	const [movies, setMovies] = useState<Movie[]>([] as Movie[]);

	useEffect(() => {
		refreshMoviesData()
	}, [])

	const refreshMoviesData = useCallback(async () => {
		const movies = await getStarWarsMovies() as Movie[]
		setMovies(movies)
	}, [setMovies, getStarWarsMovies])

	const sortMoviesBySeletedOption = (option: string) => {
		if (option === "Year") {
			const sortedMovies = movies.sort((a, b) => (parseInt(a.release_date.replaceAll('-', '')) - parseInt(b.release_date.replaceAll('-', ''))))
			setMovies([...sortedMovies])
			return
		}

		const sortedMoviesByName = movies.sort((a, b) => a.title.localeCompare(b.title))
		setMovies([...sortedMoviesByName])
		return
	}

	const filterMovieBySearch = (value: string) => {
		if (!value) {
			refreshMoviesData()
		}
	}

	return (
		<>
			<Header
				onSelect={sortMoviesBySeletedOption}
				onSearch={filterMovieBySearch}
			/>
			<Content movies={movies} />
		</>
	);
};

export default Main;
