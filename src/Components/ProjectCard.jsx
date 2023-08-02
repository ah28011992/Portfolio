import React from "react";
import { portfolioObject, colorMapping } from "../data/projectData.js";

const ProjectCard = () => {
	return (
		<section className='card'>
			{portfolioObject.map((item, index) => (
				<div
					className='card-content'
					key={index}>
					<div className='card__item'>
						<img
							className='card__img'
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
					<div className='card__item'>
						{item.techStack.map((stackItem, index) => {
							const [technology, colorKey] = stackItem.split("|");

							const backgroundColor = colorMapping[colorKey] || "lightgrey";

							return (
								<div
									key={index}
									className='card__stack'
									style={{ backgroundColor }}>
									<ul>
										<li>{technology}</li>
									</ul>
								</div>
							);
						})}
					</div>
				</div>
			))}
		</section>
	);
};

export default ProjectCard;
