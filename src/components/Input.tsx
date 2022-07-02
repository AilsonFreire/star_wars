import React from "react";
import styled from "styled-components";

const Container = styled.div`
	border: 1px solid ${({ theme: { colors } }) => colors.SECONDARY.LIGHTER};
	border-radius: 4px;
	display: flex;
	align-items: center;
	height: 35px;
	width: 100%;
`;

const InputComponent = styled.input`
	all: unset;
	color: ${({ theme: { colors } }) => colors.SECONDARY.LIGHT};
	font-family: ${({ theme: { fonts } }) => fonts.PRIMARAY};
	font-size: 14px;
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
	return (
		<Container>
			<InputComponent
				placeholder={placeholder}
				value={value}
				onChange={(value) => onChange(value.target.value)}
			/>
		</Container>
	);
};
