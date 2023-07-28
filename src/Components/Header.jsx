import React, { useState } from "react";
import Menu from "./Menu";
import "../index.css";
import LogoMenu from "./LogoMenu.jsx";
import SideNav from "./SideNav";

const Header = ({openNav}) => {
	const [isActive, setIsActive] = useState(false);



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
