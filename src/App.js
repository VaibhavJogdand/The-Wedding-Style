import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" Component={HomePage} />
			</Routes>
		</Router>
	);
}

export default App;
