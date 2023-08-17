import React from "react";
import IconGithub from "../Components/icons/IconGitHub";
import IconLinkedin from "../Components/icons/IconLinkedIn";

const Home = () => {
	return (
		<section className='home'>
			<h1 className='home__title'>
				<span className='home__title home__title--highlight'>A</span>ARON
				Hedgecock
			</h1>
			<p className='home__text'>Junior Software Developer</p>
			<p
				id='home__quote'
				className='home__quote'>
				"The true sign of intelligence is not knowledge but imagination." -
				Albert Einstein
			</p>
			<div className='icons'>
				<div className='icon__list'>
					<a href='https://github.com/ah28011992'>
						<IconGithub />
					</a>
				</div>
				<div className='icon__list'>
					<a href='https://www.linkedin.com/in/aaron-h-97756011a/'>
						<IconLinkedin />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Home;
