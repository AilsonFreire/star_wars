import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";

export const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Main />} />
		</Routes>
	</BrowserRouter>
);
