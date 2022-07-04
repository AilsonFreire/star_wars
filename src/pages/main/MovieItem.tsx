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

const mapToRomanNumber: Record<number, string> = {
	1: 'I',
	2: 'II',
	3: 'III',
	4: 'IV',
	5: 'V',
	6: 'VI'
}

type MovieItemProps = {
	movie: Movie
}

export const MovieItem = ({ movie: { episode_id, title, release_date } }: MovieItemProps) => {
	return (
		<Item>
			<WrapperContent>
				<Episode>EPISODE {episode_id} </Episode>
				<MovieName>Episode {mapToRomanNumber[episode_id]} {title}</MovieName>
			</WrapperContent>
			<ReleaseDate>{release_date}</ReleaseDate>
		</Item>
	);
};
