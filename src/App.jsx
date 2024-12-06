import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Anime from "./pages/Anime";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/anime" element={<Anime />}></Route>
				<Route path="/movies" element={<Movies />}></Route>
				<Route path="/tvseries" element={<TVSeries />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
