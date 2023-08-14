import React from "react";
import Title from "../Components/Title";
import profilePicture from "../assets/profile-image.jpeg";
const About = () => {
	return (
		<section className='home'>
			<Title />
			<p className='home__text'>Hello, I'm Aaron :)</p>
			<picture className='profile-picture'>
				<img
					className='profile-picture__img'
					src={profilePicture}></img>
			</picture>
            
		</section>
	);
};

export default About;
