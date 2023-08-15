import React from "react";
import { images } from "../stack-images";
import Ball from "./Ball";
import { key } from "localforage";

const TechStack = () => {
	return (
		<section className='tech-stack'>
			{images.map((img) => {
				return (
					<section className='tech-stack__content'>
						<div key={img.name}>
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
