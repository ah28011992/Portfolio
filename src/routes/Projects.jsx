import React from "react";
import Title from "../Components/Title";
import Filter from "../Components/Filter";
const Projects = () => {
	return (
		<>
			<section className='home'>
				<Title />
				<p className='home__text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta
					hendrerit leo, nec convallis sem efficitur a. Pellentesque accumsan
					velit sit amet tellus aliquet, non.
				</p>
			</section>
			<section className='filter'>
				<Filter />
			</section>
		</>
	);
};

export default Projects;
