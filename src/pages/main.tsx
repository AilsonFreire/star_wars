import React from "react";
import { Button } from "../components/Button";

const Main: React.FC = () => {
	return (
		<div>
			<Button
				label={"ASDAD"}
				onClick={function (): void {
					throw new Error("Function not implemented.");
				}}
			/>
		</div>
	);
};

export default Main;
