import React from "react";
import Logo from "../assets/logo.png";
const LogoMenu = () => {
	return (
		<> <button className="nav__button" type="button"
		onClick={() =>{
			alert('Header logo has been clicked')
		}}>
			
			<img className="nav__logo" src={Logo}/>
		</button>
		</>
	);
};

export default LogoMenu;
