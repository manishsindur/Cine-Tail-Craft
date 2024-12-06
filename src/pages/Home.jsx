import "../index.css";
import "../components/Header";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Trending from "../layouts/trending-now/Trending";
function Home() {
	return (
		<>
			<Header />
			<Trending />
			<Footer />
		</>
	);
}

export default Home;
