import "../index.css";
import "../components/Header";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Trending from "../layouts/trending-now/Trending";
import Streaming from "../layouts/streaming/Streaming";
import Recent from "../layouts/recent-updates/Recent";
function Home() {
	return (
		<div className="px-10 py-5">
			<Header />
			<Trending />
			<Streaming />
			<Recent />
			<Footer />
		</div>
	);
}

export default Home;
