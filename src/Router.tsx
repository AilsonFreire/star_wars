import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/main";

export const Router = () => (
	<BrowserRouter>
		<Route path="/">
			<Main />
		</Route>
	</BrowserRouter>
);
