import React from "react";
import Menu from "./Menu";
import "../index.css";
import LogoMenu from "./LogoMenu.jsx";

const Header = ({ openNav }) => {
	return (
		<>
			<header className='header'>
				<nav className='nav'>
					<div className='nav__item'>
						<LogoMenu />
					</div>
					<div className='nav__item'>
						<Menu openNav={openNav} />
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
