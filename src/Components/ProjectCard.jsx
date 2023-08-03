import React from "react";
import { colorMapping } from "../data/projectData.js";
import IconGitgub from "./icons/IconGitHub.jsx";
import IconWeb from "./icons/IconWeb.jsx";
const ProjectCard = ({ portfolioOrder, dropDownFilter }) => {
	return (
		<section className='card'>
			{dropDownFilter.map((project, index) => (
				<div
					className='card-content'
					key={index}>
					<div className='card__item'>
						<img
							className='card__img'
							src={project.img}
							alt='project'
						/>
					</div>
					<div className='card__item'>
						<p className='card__name'>{project.name}</p>
						<div className='icons icons-card'>
							<div className='icon__list icon__list--card'>
								<a
									href={project.hostedWebLink}
									target='_blank'
									rel='noopener noreferrer'>
									<button>
										<IconWeb />
									</button>
								</a>
							</div>
							<div className='icon__list icon__list--card'>
								<a
									href={project.gitHubLink}
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
						<p>{project.description}</p>
					</div>
					<div className='card__item'>
						{project.techStack.map((stackItem, index) => {
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
