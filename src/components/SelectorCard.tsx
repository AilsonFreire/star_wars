import React from "react";
import styled, { css, useTheme } from "styled-components";
import { Typography } from "./Typography";
import { ReactComponent as XIcon } from "../icons/x.svg";

type Align = {
	top?: number;
	left?: number;
	bottom?: number;
	right?: number;
};

const Container = styled.div<{ open: boolean; align: Align }>`
	${({ theme: { colors }, align: { top, left, bottom, right }, open }) => css`
		background-color: ${colors.PRIMARY.MAIN};
		border: 1px solid ${colors.SECONDARY.LIGHTER};
		border-radius: 4px;
		width: 200px;
		min-height: 210px;
		position: absolute;
		top: ${top}px;
		left: ${left}px;
		bottom: ${bottom}px;
		right: ${right}px;
		${!open && "display: none"}
	`}
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
	open: boolean;
	options: string[];
	align?: Align;
	onSelect: (selectedOption: string) => void;
	onClose: () => void;
};

export const SelectorCard = ({
	title,
	options,
	open,
	align,
	onSelect,
	onClose,
}: SelectorCardProps) => {
	const {
		colors: {
			PRIMARY: { DARK },
		},
	} = useTheme();

	const renderOptions = () =>
		options.map((option, index) => (
			<div key={index}>
				<Option onClick={() => onSelect(option)}>{option}</Option>
				<Line />
			</div>
		));

	return (
		<Container open={open} align={{ ...align }}>
			<Header>
				<Title>{title}</Title>
				<XIcon
					fill={DARK}
					height={10}
					onClick={onClose}
					style={{ cursor: "pointer" }}
				/>
			</Header>
			{renderOptions()}
		</Container>
	);
};
