import React from "react";
import styled from "styled-components";
import { Typography } from "../../components/Typography";
import { Movie } from "../../utils/types";

const Item = styled.button`
	background-color: ${({ theme: { colors } }) => colors.PRIMARY.MAIN};
	border: none;
	border-bottom: 1px solid
		${({ theme: { colors } }) => colors.SECONDARY.LIGHTER};
	display: flex;
	padding: 15px;
	width: 100%;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme: { colors } }) => colors.PRIMARY.LIGHT};
	}
`;

const Episode = styled(Typography)`
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
`;

const MovieName = styled(Typography).attrs({ weight: "bold" })`
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
	margin-left: 20px;
`;

const ReleaseDate = styled(Typography)`
	display: flex;
	justify-content: flex-end;
	flex: 1;
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
`;

type MovieItemProps = {
	movie: Movie
}

export const MovieItem: React.FC = () => {
	return (
		<Item>
			<Episode>EPISODE</Episode>
			<MovieName>Empire Strikes</MovieName>
			<ReleaseDate>1989-05-05</ReleaseDate>
		</Item>
	);
};
