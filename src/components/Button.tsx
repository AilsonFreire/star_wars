import styled from "styled-components";

const ButtonContainer = styled.button`
	background-color: ${({ theme: { colors } }) => colors.PRIMARY.MAIN};
	border: 1px solid ${({ theme: { colors } }) => colors.SECONDARY.LIGHTER};
	border-radius: 4px;
	color: ${({ theme: { colors } }) => colors.SECONDARY.MAIN};
	height: 35px;
	width: 95px;
	cursor: pointer;
`;

type ButtonProps = {
	label: string;
	onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
	return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>;
};
