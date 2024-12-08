import { NavLink } from "react-router-dom";
import "../../styles/streaming/SideBoarder.css";

const Trending = () => {
	return (
		<div className="my-10">
			<nav>
				<ul className="flex gap-7 w-max py-2 pl-7 pr-3 rounded-xl relative bg-Primary_Black sideWhiteBoarder">
					<li>
						<NavLink>Trending Now</NavLink>
					</li>
					<li>
						<NavLink>Anime</NavLink>
					</li>
					<li>
						<NavLink>Movies</NavLink>
					</li>
					<li>
						<NavLink>TV Series</NavLink>
					</li>
				</ul>
			</nav>
			<div></div>
		</div>
	);
};

export default Trending;
