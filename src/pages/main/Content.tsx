import { useState } from "react";
import { isMobile } from "react-device-detect";
import SkewLoader from "react-spinners/SkewLoader";
import styled, { css, useTheme } from "styled-components";
import { Typography } from "../../components/Typography";
import { mapToRomanNumber } from "../../utils/helpers";
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

const NoMovieSelected = styled(Typography).attrs({ weight: "bold" })`
	align-items: center;
	height: 100%;
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
  display: flex;
	justify-content: center;
`;

const MovieDescriptionTitle = styled(Typography).attrs({ weight: "bold", size: 22 })`
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
	padding: 26px 20px 10px;
`
const MovieDescriptionContent = styled(Typography)`
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
	padding: 10px 20px 10px;
`;

const AlignLoading = styled.div`
	align-items: center;
  display: flex;
	height: 100%;
	justify-content: center;
`;

type ContentProps = {
	movies: Movie[]
}

export const Content = ({ movies }: ContentProps) => {
	const { colors: { SECONDARY } } = useTheme()
	const [selectedMovie, setSelectedMovie] = useState<Exclude<Movie, 'release_date'>>();

	const renderMoviesList = () => movies.map((movie, index) =>
		<MovieItem key={index} movie={movie} onSelectedMovie={setSelectedMovie} />)

	const renderContent = () =>
		!selectedMovie ?
			<NoMovieSelected>No movie selected</NoMovieSelected> :
			<>
				<MovieDescriptionTitle>
					Episode {mapToRomanNumber[selectedMovie.episode_id]}
					{" "}- {selectedMovie.title}
				</MovieDescriptionTitle>
				<MovieDescriptionContent>
					{selectedMovie.opening_crawl}
				</MovieDescriptionContent>
				<MovieDescriptionContent>
					Directy by: {selectedMovie.director}
				</MovieDescriptionContent>
			</>

	return (
		<Container isMobile={isMobile}>
			<CardContent>
				{
					movies.length > 0 ? renderMoviesList() :
						<AlignLoading>
							<SkewLoader color={SECONDARY.LIGHT} size={25} />
						</AlignLoading>
				}
			</CardContent>
			<CardContent id="description">
				{renderContent()}
			</CardContent>
		</Container>
	);
};
