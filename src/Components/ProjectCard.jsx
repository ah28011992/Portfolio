import React from "react";
import portfolioObject from "../data/projectData.js";

const ProjectCard = () => {
	console.log(portfolioObject);
	return (
		<section className='card'>
			{portfolioObject.map((item, index) => (
				<div
					className='card-content'
					key={index}>
					<div className='card__item'>
						<img className="card__img"
							src={item.img}
							alt='project'
						/>
					</div>
					<div className='card__item'>
						<p>{item.name}</p>
					</div>
					<div className='card__item'>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default ProjectCard;
