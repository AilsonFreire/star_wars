import React from "react";
import { Button } from "./Button";
import { Header } from "./Header";
import { Input } from "./Input";

export default {
	title: "Header",
	component: Header,
};

export const Primary = () => (
	<Header>
		<Button label="Sortby..." onClick={() => {}} />
		<Input placeholder="Search by..." value="" onChange={() => {}} />
	</Header>
);
