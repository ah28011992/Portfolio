import React, { useEffect } from "react";

const SideNav = ({ closeNav }) => {
	return (
		<div className='side-nav'>
			<ul className='side-nav__list'>
				<a
					onClick={closeNav}
					href='#'
					className='side-nav__close'>
					&times;
				</a>
				<a
					className='side-nav__item'
					href='#'>
					<li>Home</li>
				</a>
				<a
					className='side-nav__item'
					href='#'>
					<li>About</li>
				</a>
				<a
					className='side-nav__item'
					href='#'>
					<li>Projects</li>
				</a>
				<a
					className='side-nav__item'
					href='#'>
					<li>Contact</li>
				</a>
			</ul>
		</div>
	);
};

export default SideNav;
