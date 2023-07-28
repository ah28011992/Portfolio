import React, { useState } from "react";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";

const Layout = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

	const openNav = () => {
		setIsActive(true);
	};

	const closeNav = () => {
		setIsActive(false);
	};

	return (
		<>
			{!isActive ? (
				<div>
					{" "}
					<Header openNav={openNav} />
					{children}{" "}
				</div>
			) : (
				<SideNav closeNav={closeNav} />
			)}
		</>
	);
};

export default Layout;
