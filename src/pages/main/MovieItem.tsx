import React from "react";
import styled from "styled-components";
import { Typography } from "../../components/Typography";
import { mapToRomanNumber } from "../../utils/helpers";
import { Movie } from "../../utils/types";

const Item = styled.a`
	background-color: ${({ theme: { colors } }) => colors.PRIMARY.MAIN};
	border: none;
	border-bottom: 1px solid
		${({ theme: { colors } }) => colors.SECONDARY.LIGHTER};
	display: flex;
	padding: 15px;
	cursor: pointer;
	text-decoration: none !important;
	&:hover {
		background-color: ${({ theme: { colors } }) => colors.PRIMARY.LIGHT};
	}
`;

const WrapperContent = styled.div`
	display: flex;
	flex-wrap: wrap;
  flex-direction: row;
`;

const Episode = styled(Typography)`
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
	margin-right: 20px;
`;

const MovieName = styled(Typography).attrs({ weight: "bold" })`
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
	padding-right: 20px;
`;

const ReleaseDate = styled(Typography)`
	display: flex;
	justify-content: flex-end;
	flex: 1;
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
`;

type MovieItemProps = {
	movie: Movie;
	onSelectedMovie: (movie: Exclude<Movie, 'release_date'>) => void
}

export const MovieItem = ({ movie, onSelectedMovie }: MovieItemProps) => {
	const { episode_id, title, release_date } = movie
	return (
		<Item href="#description" onClick={() => onSelectedMovie(movie)}>
			<WrapperContent>
				<Episode>EPISODE {episode_id}</Episode>
				<MovieName>Episode {mapToRomanNumber[episode_id]} {title}</MovieName>
			</WrapperContent>
			<ReleaseDate>{release_date}</ReleaseDate>
		</Item>
	);
};
