import { NavLink } from "react-router-dom";

const Recent = () => {
	return (
		<div className="my-10">
			<nav>
				<ul className="flex gap-7 w-max py-2 pl-7 pr-3 rounded-xl relative bg-Primary_Black sideWhiteBoarder">
					<li>
						<NavLink>Streaming</NavLink>
					</li>
					<li>
						<NavLink>Amazon Prime</NavLink>
					</li>
					<li>
						<NavLink>Crunchyroll</NavLink>
					</li>
					<li>
						<NavLink>Disney+Hotstar</NavLink>
					</li>
					<li>
						<NavLink>Netflix</NavLink>
					</li>
				</ul>
			</nav>
			<div></div>
		</div>
	);
};

export default Recent;
