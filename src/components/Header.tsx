import React from "react";
import styled from "styled-components";

const Container = styled.header`
	background-color: ${({ theme: { colors } }) => colors.PRIMARY.LIGHT};
	display: flex;
	flex-direction: row;
	padding: 20px;
`;

type HeaderProps = {
	children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
	return <Container>{children}</Container>;
};
