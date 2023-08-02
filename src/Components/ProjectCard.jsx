import React from "react";
import { portfolioObject, colorMapping } from "../data/projectData.js";
import IconGitgub from "./icons/IconGitHub.jsx";
import IconWeb from "./icons/IconWeb.jsx";
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
						<p className='card__name'>{item.name}</p>
						<div className='icons icons-card'>
							<div className='icon__list icon__list--card'>
								<a
									href={item.hostedWebLink}
									target='_blank'
									rel='noopener noreferrer'>
									<button>
										<IconWeb />
									</button>
								</a>
							</div>
							<div className='icon__list icon__list--card'>
								<a
									href={item.gitHubLink}
									target='_blank'
									rel='noopener noreferrer'>
									<button>
										<IconGitgub />
									</button>
								</a>
							</div>
						</div>
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