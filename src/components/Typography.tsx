import styled, { css, DefaultTheme, ThemeProps } from "styled-components";

type TypographyProps = {
	color?: string;
	size?: number;
	weight?: "regular" | "bold";
};

export const Typography = styled.p<TypographyProps>`
	${({ theme: { fonts, colors }, color, size, weight }) => css`
		font-family: ${fonts.PRIMARAY};
		color: ${color ? color : colors.PRIMARY.DARK};
		font-size: ${size ? size : 14}px;
		font-weight: ${weight ? weight : "500"};
		margin: 0;
		padding: 0;
	`}
`;
