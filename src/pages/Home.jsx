import "../index.css";
import "../components/Header";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Trending from "../layouts/trending-now/Trending";
function Home() {
	return (
		<div className="px-10 py-5">
			<Header />
			<Trending />
			<Footer />
		</div>
	);
}

export default Home;
