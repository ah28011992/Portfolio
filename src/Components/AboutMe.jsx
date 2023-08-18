import React from "react";
import image from "../assets/scarborough.jpg";

const AboutMe = () => {
	return (
		<>
			<section className='section-one'>
				<div className='container row'>
					<div className='col'>
						<p className='section-one__text'>
							{" "}
							I'm an innovative junior developer based in the UK with a passion
							for solving real world problems.{" "}
						</p>
						<p className='section-one__text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam
							velit, convallis vitae aliquam a, efficitur ac sapien. Phasellus
							sollicitudin eu nulla vitae volutpat. Integer pellentesque posuere
							tellus sit amet lobortis.{" "}
						</p>
						<p className='section-one__text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam
							velit, convallis vitae aliquam a, efficitur ac sapien. Phasellus
							sollicitudin eu nulla vitae volutpat. Integer pellentesque posuere
							tellus sit amet lobortis.{" "}
						</p>
					</div>
					<div className='col'>
						<img
							loading='lazy'
							src={image}
							alt='scarborough south bay sunset'></img>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutMe;
