import React from "react";
import { SelectorCard } from "./SelectorCard";

export default {
	title: "SelectorCard",
	component: SelectorCard,
};

export const Primary = () => (
	<SelectorCard
		title="Sort By"
		options={["Episode", "Year"]}
		onClick={(option) => option}
	/>
);
