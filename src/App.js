import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="about" element={<Login />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
