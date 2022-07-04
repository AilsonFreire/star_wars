import React from "react";
import styled, { useTheme } from "styled-components";
import { Typography } from "./Typography";
import { ReactComponent as XIcon } from "../icons/x.svg";

const Container = styled.div`
	border: 1px solid ${({ theme: { colors } }) => colors.SECONDARY.LIGHTER};
	border-radius: 4px;
	max-width: 200px;
	min-height: 210px;
`;

const Title = styled(Typography)`
	color: ${({ theme: { colors } }) => colors.SECONDARY.MAIN};
	font-family: ${({ theme: { fonts } }) => fonts.PRIMARAY};
`;

const Header = styled.div`
	align-items: center;
	border-bottom: 1px solid
		${({ theme: { colors } }) => colors.SECONDARY.LIGHTER};
	display: flex;
	justify-content: space-between;
	height: 30px;
	padding: 0px 10px;
`;

const Option = styled.button`
	background-color: ${({ theme: { colors } }) => colors.PRIMARY.MAIN};
	border: none;
	color: ${({ theme: { colors } }) => colors.SECONDARY.MAIN};
	font-family: ${({ theme: { fonts } }) => fonts.PRIMARAY};
	height: 25px;
	padding: 0px 0px 0px 20px;
	text-align: left;
	width: 100%;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme: { colors } }) => colors.PRIMARY.LIGHT};
	}
`;

const Line = styled.div`
	align-self: flex-end;
	border-bottom: 1px solid
		${({ theme: { colors } }) => colors.SECONDARY.LIGHTER};
	margin-left: 20px;
`;

type SelectorCardProps = {
	title: string;
	options: string[];
	onClick: (selectedOption: string) => void;
};

export const SelectorCard = ({
	title,
	options,
	onClick,
}: SelectorCardProps) => {
	const {
		colors: {
			PRIMARY: { DARK },
		},
	} = useTheme();

	const renderOptions = () =>
		options.map((option, index) => (
			<div key={index}>
				<Option onClick={() => onClick(option)}>{option}</Option>
				<Line />
			</div>
		));
	return (
		<Container>
			<Header>
				<Title>{title}</Title>
				<XIcon fill={DARK} height={10} />
			</Header>
			{renderOptions()}
		</Container>
	);
};
