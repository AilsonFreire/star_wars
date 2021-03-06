import { useState } from "react";
import { fireEvent, render, screen } from "../test-utils";
import { Input } from "./Input";
import React from 'react';

const RenderInput = () => {
	const [inputValue, setInputValue] = useState("");
	return (
		<Input
			placeholder="testing..."
			value={inputValue}
			onChange={(value) => setInputValue(value)}
		/>
	);
};
describe("Input", () => {
	it("Should get a correct value when typing", async () => {
		//Given
		render(<RenderInput />);
		const input = screen.getByRole("textbox", {
			name: /input/,
		}) as HTMLInputElement;

		//When
		fireEvent.input(input, { target: { value: "23" } });

		//Then
		expect(input.value).toBe("23");
	});
});
