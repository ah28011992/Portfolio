import React from "react";
import { images } from "../stack-images";
import Ball from "./Ball";

const TechStack = () => {
	return (
		<section className='techStack'>
			{images.map((img) => {
				return (
					<>
						<p>{img.name}</p>
						<Ball
							key={img.name}
							icon={img.img}
						/>
					</>
				);
			})}
		</section>
	);
};

export default TechStack;
