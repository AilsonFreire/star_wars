import styled from "styled-components";

const ButtonContainer = styled.button``;

type ButtonProps = {
	onClick: () => void;
};

export const Button = ({ onClick }: ButtonProps) => {
	return <ButtonContainer onClick={onClick} />;
};
