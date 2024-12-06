import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="flex justify-center items-center h-16">
			<nav aria-label="Footer Navigation">
				<ul className="flex justify-center gap-32">
					<li className="opacity-50 hover:opacity-100 cursor-pointer">
						<Link to="/about" className="no-underline text-inherit">
							About Us
						</Link>
					</li>
					<li className="opacity-50 hover:opacity-100 cursor-pointer">
						<Link to="/terms" className="no-underline text-inherit">
							Terms of Use
						</Link>
					</li>
					<li className="opacity-50 hover:opacity-100 cursor-pointer">
						<Link to="/privacy" className="no-underline text-inherit">
							Privacy Policy
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
