import React from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const LogoMenu = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};
	return (
		<>
			{" "}
			<button
				className='nav__button'
				type='button'
				onClick={handleClick}>
				<img
					className='nav__logo'
					src={Logo}
				/>
			</button>
		</>
	);
};

export default LogoMenu;
