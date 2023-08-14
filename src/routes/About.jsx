import React, { useState } from "react";
import Title from "../Components/Title";
import profilePicture from "../assets/profile-image.jpeg";
import AboutMe from "../Components/AboutMe";
import Education from "../Components/Education";
import TechStack from "../Components/TechStack";

const contentObj = [
	{
		name: "About me",
		component: <AboutMe />,
	},
	{
		name: "Education",
		component: <Education />,
	},
	{
		name: "Tech Stack",
		component: <TechStack />,
	},
];

const About = () => {
	const [showContent, setShowContent] = useState(false);
	const [activeComponent, setActiveComponent] = useState(null);

	const handleClick = (e) => {
		const clickedContent = contentObj.find(
			(content) => content.name === e.target.value
		);
		if (clickedContent) {
			setActiveComponent(clickedContent.component);
			setShowContent(true);
		} else {
			setShowContent(false);
		}
	};

	return (
		<section className='home'>
			<Title />
			<p className='home__text'>Hello, I'm Aaron :)</p>
			<picture className='profile-picture'>
				<img
					className='profile-picture__img'
					src={profilePicture}></img>
			</picture>
			<section className='about-navigation'>
				{contentObj.map((content) => (
					<button
						key={content.name}
						value={content.name}
						onClick={handleClick}
						className='about-navigation__btn'>
						{content.name}
					</button>
				))}
			</section>
			{showContent && activeComponent}
		</section>
	);
};

export default About;
