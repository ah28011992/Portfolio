import { NavLink } from "react-router-dom";

const SideNav = ({ closeNav }) => {
	return (
		<div
			className='side-nav'
			onClick={closeNav}>
			<ul className='side-nav__list'>
				<NavLink className='side-nav__close'>&times;</NavLink>
				<NavLink
					to='/'
					className='side-nav__item'>
					Home
				</NavLink>
				<NavLink
					to='/about'
					className='side-nav__item'>
					About
				</NavLink>
				<NavLink
					to='/projects'
					className='side-nav__item'>
					Projects
				</NavLink>
				<NavLink
					to='/contact'
					className='side-nav__item'>
					Contact
				</NavLink>
			</ul>
		</div>
	);
};

export default SideNav;
