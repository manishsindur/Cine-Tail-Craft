import { useNavigate } from "react-router-dom";
import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Welcome() {
	const navigate = useNavigate();
	return (
		<div className="h-screen flex flex-col justify-between px-10 py-5">
			<Header />
			<div className="flex flex-col justify-center items-center gap-4">
				<h1 className="text-4xl">Welcome to Cine Tail Craft</h1>
				<p className="text-center w-2/3">
					Your one-stop destination for exploring and tracking movies, series,
					and anime. Find where to watch, check user ratings, and create a
					personalized watch list with our bookmark feature. Start exploring
					today and make your entertainment journey effortless!
				</p>
				<button
					onClick={() => navigate("/home")}
					className="border-2 rounded-lg pr-4 pl-2 text-xl opacity-50 hover:opacity-100 mt-5 flex items-center gap-1"
				>
					<img src="/src/assets/Welcome/dicoverIcon.svg" alt="Discover Icon" />
					Discover
				</button>
			</div>
			<Footer />
		</div>
	);
}

export default Welcome;
