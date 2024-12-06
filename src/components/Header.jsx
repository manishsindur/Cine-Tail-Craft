import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();
	const isWelcomePage = location.pathname === "/";
	return (
		<header className="m-6 flex items-center justify-between">
			<div className="font-mono text-md">Cine Tail Craft</div>
			{!isWelcomePage && (
				<nav>
					<ul className="flex gap-5">
						<li>
							<NavLink
								to="/home"
								className={({ isActive, isPending }) =>
									`${isPending ? "opacity-50" : ""}${
										isActive ? "text-rose-300" : ""
									}`
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/anime"
								className={({ isActive, isPending }) =>
									`${isPending ? "opacity-50" : ""}${
										isActive ? "text-rose-300" : ""
									}`
								}
							>
								Anime
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/movies"
								className={({ isActive, isPending }) =>
									`${isPending ? "opacity-50" : ""}${
										isActive ? "text-rose-300" : ""
									}`
								}
							>
								Movies
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/tvSeries"
								className={({ isActive, isPending }) =>
									`${isPending ? "opacity-50" : ""}${
										isActive ? "text-rose-300" : ""
									}`
								}
							>
								TV Series
							</NavLink>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
