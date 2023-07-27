import React from "react";
import Hamburger from "../assets/hamburger";

const Menu = () => {
	return (
		<>
			<button className="nav__button"
				type='button'
				aria-controls='navigation-drawer'
				aria-expanded='false'
				onClick={() => {
					alert("this button has been clicked");
				}}>
				<Hamburger />
			</button>
		</>
	);
};

export default Menu;



