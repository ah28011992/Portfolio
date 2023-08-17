import React from "react";
import { images } from "../stack-images";
import Ball from "./Ball";

const TechStack = () => {
	return (
		<section className='tech-stack'>
			{images.map((img) => {
				return (
					<section
						className='tech-stack__content'
						key={img.name}>
						<div>
							<h3 className='tech-stack__text'>{img.name}</h3>
							<Ball icon={img.img} />
						</div>
					</section>
				);
			})}
		</section>
	);
};

export default TechStack;
