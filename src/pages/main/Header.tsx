import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header as HeaderWrapper } from "../../components/Header";
import styled from "styled-components";
import { SelectorCard } from "../../components/SelectorCard";

const InputContainer = styled.div`
	margin-left: 10px;
	flex: 1;
	display: flex;
`;

export const Header = () => {
	const [open, setOpenSelectorCard] = useState(false);
	const closeModal = () => setOpenSelectorCard(false);

	return (
		<HeaderWrapper>
			<Button
				label="Sort by..."
				onClick={() => setOpenSelectorCard((open) => !open)}
			/>
			<SelectorCard
				title="Sort By"
				open={open}
				options={["Episode", "Year"]}
				onSelect={(option) => option}
				align={{ top: 60 }}
				onClose={closeModal}
			/>

			<InputContainer>
				<Input placeholder="Type to search..." value="" onChange={() => {}} />
			</InputContainer>
		</HeaderWrapper>
	);
};
