import React from "react";
import Hamburger from "../assets/hamburger";

const Menu = ({ openNav }) => {
	return (
		<>
			<button
				className='nav__button'
				type='button'
				aria-controls='navigation-drawer'
				aria-expanded='false'
				onClick={openNav}>
				<Hamburger />
			</button>
		</>
	);
};

export default Menu;
