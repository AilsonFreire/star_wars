import React from "react";
import styled, { useTheme } from "styled-components";
import { ReactComponent as MagnifyingIcon } from "../icons/magnifying.svg";

const Container = styled.div`
	align-items: center;
	background-color: ${({ theme: { colors } }) => colors.PRIMARY.MAIN};
	border: 1px solid ${({ theme: { colors } }) => colors.SECONDARY.LIGHTER};
	border-radius: 4px;
	display: flex;
	height: 33px;
	padding: 0px 10px;
	width: 100%;
`;

const InputComponent = styled.input`
	all: unset;
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
	font-family: ${({ theme: { fonts } }) => fonts.PRIMARAY};
	font-size: 14px;
	padding-left: 10px;
	&::placeholder {
		color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHTER};
	}
`;

type InputProps = {
	placeholder: string;
	value?: string;
	onChange: (value: string) => void;
};

export const Input = ({ placeholder, value, onChange }: InputProps) => {
	const {
		colors: {
			PRIMARY: { DARK },
		},
	} = useTheme();
	return (
		<Container>
			<MagnifyingIcon fill={DARK} height={17} />
			<InputComponent
				aria-label="input"
				placeholder={placeholder}
				value={value}
				onChange={(value) => onChange(value.target.value)}
			/>
		</Container>
	);
};
