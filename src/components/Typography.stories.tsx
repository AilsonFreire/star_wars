import React from "react";
import { Typography } from "./Typography";

export default {
	title: "Typography",
	component: Typography,
};

export const Regular = () => (
	<Typography>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
		praesentium aut optio odit labore aliquam dignissimos, fugiat at minima,
		maiores cum perferendis porro nam ea consequatur molestias! Doloribus,
		id!
	</Typography>
);

export const Bold = () => (
	<Typography weight="bold">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
		praesentium aut optio odit labore aliquam dignissimos, fugiat at minima,
		maiores cum perferendis porro nam ea consequatur molestias! Doloribus,
		id!
	</Typography>
);
