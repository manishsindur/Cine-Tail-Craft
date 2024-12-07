import { NavLink } from "react-router-dom";

const Trending = () => {
	return (
		<div className="my-10">
			<nav>
				<ul className="flex gap-6">
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
