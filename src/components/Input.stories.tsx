import React from "react";
import { Input } from "./Input";

export default {
	title: "Input",
	component: Input,
};

export const Primary = () => (
	<Input placeholder="Type to search..." value="" onChange={(value) => {}} />
);
