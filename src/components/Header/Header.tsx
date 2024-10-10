import "./styles.css";

function Header() {
	return (
		<header className={"header-container"}>
			<nav>
				<ul className="nav-container">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
