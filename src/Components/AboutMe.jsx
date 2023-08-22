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
							for solving real world problems{" "}
						</p>
						<p className='section-one__text'>
							In 2022, I took a bold step by switching careers from managing my
							own healthcare business to retraining as a junior software
							developer. Why? Well, my analytical and curious mindset finally
							aligned with my creative side. Now, I'm able to bring both aspects
							of my thinking together to create meaningful solutions{" "}
						</p>
						<p className='section-one__text'>
							In my spare time you'll find me catching the sunset or sunrise
							surf, cooking up a storm in the kitchen or procrastinting over my
							next venture{" "}
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
