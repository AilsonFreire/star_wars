import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Header as HeaderWrapper } from "../../components/Header";
import { Input } from "../../components/Input";
import { SelectorCard } from "../../components/SelectorCard";

const InputContainer = styled.div`
	margin-left: 10px;
	flex: 1;
	display: flex;
`;

type HeaderProps = {
	onSelect: (option: string) => void;
	onSearch: (value: string) => void;
}

export const Header = ({ onSelect, onSearch, }: HeaderProps) => {
	const [open, setOpenSelectorCard] = useState(false);
	const [inputValue, setInputValue] = useState("");
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
				onSelect={(option) => {
					closeModal()
					onSelect(option)
				}}
				align={{ top: 60 }}
				onClose={closeModal}
			/>

			<InputContainer>
				<Input
					placeholder="Type to search..."
					value={inputValue}
					onChange={(value) => {
						setInputValue(value);
						onSearch(value);
					}}
				/>
			</InputContainer>
		</HeaderWrapper>
	);
};
