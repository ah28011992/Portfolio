import React, { useState } from "react";
import Title from "../Components/Title";
import Filter from "../Components/Filter";
import ProjectCard from "../Components/ProjectCard";
import { portfolioObject } from "../data/projectData";
import CallToAction from "../Components/CallToAction";

const Projects = () => {
	const [portfolioOrder, setPortfolioOrder] = useState(portfolioObject);
	const [selectedType, setSelectedType] = useState(null);

	const dropDownFilter = selectedType
		? portfolioOrder.filter((content) => content.type === selectedType)
		: portfolioOrder;

	return (
		<>
			<section className='home'>
				<Title />
				<p className='home__text'>
					Feel free to check out my latest projects or filter through the ones
					that catch your eye. I'm constantly working on enhancing and updating
					my projects to showcase my evolving skillset
				</p>
			</section>
			<section className='filter'>
				<Filter
					portfolioOrder={portfolioOrder}
					setPortfolioOrder={setPortfolioOrder}
					setSelectedType={setSelectedType}
				/>
			</section>

			<ProjectCard
				portfolioOrder={portfolioOrder}
				dropDownFilter={dropDownFilter}
			/>
			<CallToAction />
		</>
	);
};

export default Projects;
