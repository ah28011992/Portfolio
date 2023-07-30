import React, { useState } from "react";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
	const [isActive, setIsActive] = useState(false);

	const openNav = () => {
		setIsActive(true);
	};

	const closeNav = () => {
		setIsActive(false);
	};

	return (
		<div className='root-layout'>
			{!isActive ? (
				<>
					<div>
						<Header openNav={openNav} />
						<main className='main'>
							<Outlet />
						</main>
					</div>
					<footer className='footer'>
						<Footer />
					</footer>
				</>
			) : (
				<SideNav closeNav={closeNav} />
			)}
		</div>
	);
};

export default Layout;
