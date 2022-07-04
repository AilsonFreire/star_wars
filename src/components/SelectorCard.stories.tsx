import React from "react";
import { Button } from "./Button";
import { SelectorCard } from "./SelectorCard";

export default {
	title: "SelectorCard",
	component: SelectorCard,
};

export const ShownSelector = () => (
	<div style={{ display: "flex", flex: 1, background: "red", height: 200 }}>
		<Button label="Sort by..." onClick={() => {}} />
		<SelectorCard
			title="Sort By"
			open={true}
			options={["Episode", "Year"]}
			onSelect={(option) => option}
			align={{ top: 60 }}
			onClose={() => {}}
		/>
	</div>
);
