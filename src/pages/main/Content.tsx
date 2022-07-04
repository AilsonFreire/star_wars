import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";
import { Movie } from "../../utils/types";
import { MovieItem } from "./MovieItem";

const Container = styled.div<{ isMobile: boolean }>`
	${({ theme: { colors }, isMobile = false }) => css`
		display: grid;
		gap: 1px;
		padding: 1px 0px 0px;
		background-color: ${colors.SECONDARY.LIGHTER};
		min-height: 100vh;
		${!isMobile && `grid-template-columns: 50% 50%`};
		${isMobile && `grid-template-row: auto`};
	`}
`;

const CardContent = styled.div`
	background-color: ${({ theme: { colors } }) => colors.PRIMARY.MAIN};
`;

type ContentProps = {
	movies: Movie[]
}

export const Content = ({ movies }: ContentProps) => {
	const renderMoviesList = () => movies.map((movie, index) => <MovieItem key={index} movie={movie} />)

	return (
		<Container isMobile={isMobile}>
			<CardContent>
				{renderMoviesList()}
			</CardContent>
			<CardContent></CardContent>
		</Container>
	);
};
