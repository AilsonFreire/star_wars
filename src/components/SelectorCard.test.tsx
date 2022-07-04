import { fireEvent, render, screen } from "../test-utils";
import React, { useState } from "react";
import { Button } from "./Button";
import { SelectorCard } from "./SelectorCard";

const RenderSelectorCard = () => {
	const [open, setOpenSelectorCard] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const closeModal = () => setOpenSelectorCard(false);

	return (
		<div style={{ display: "flex", flex: 1, background: "red", height: 200 }}>
			<Button
				label="Sort by..."
				onClick={() => setOpenSelectorCard((open) => !open)}
			/>
			<SelectorCard
				title="Sort By"
				open={open}
				options={["Episode", "Year"]}
				onSelect={(option) => setSelectedOption(option)}
				align={{ top: 60 }}
				onClose={closeModal}
			/>
			<p role="textbox" aria-label="selected">
				{selectedOption}
			</p>
		</div>
	);
};

describe("SelectorCard", () => {
	it("Should not show the SelectorCard", async () => {
		//Given
		render(<RenderSelectorCard />);

		//When //Then
		expect(screen.queryByRole("button", { name: /episode/i })).toBeFalsy();
	});

	it("Should show the SelectorCard after pressing the button", async () => {
		//Given
		render(<RenderSelectorCard />);
		const sortButton = screen.getByRole("button", { name: /sort by\.\.\./i });

		//When
		fireEvent.click(sortButton);

		//Then
		expect(screen.queryByRole("button", { name: /episode/i })).toBeTruthy();
	});

	it("Should print the selected option from the SelectorCard", async () => {
		//Given
		render(<RenderSelectorCard />);
		const sortButton = screen.getByRole("button", { name: /sort by\.\.\./i });

		//When
		fireEvent.click(sortButton);
		const selectedOptionButton = screen.getByRole("button", { name: /year/i });
		fireEvent.click(selectedOptionButton);
		const selectedOption = screen.getByRole("textbox", { name: /selected/i });

		//Then
		expect(selectedOption.textContent).toBe("Year");
	});
});
