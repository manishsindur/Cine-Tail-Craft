import { NavLink } from "react-router-dom";

const Trending = () => {
	return (
		<>
			<nav>
				<ul>
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
		</>
	);
};

export default Trending;
