import React, { useState } from "react";

const Filter = () => {
	const [showContent, setShowContent] = useState(false);

	const handleClick = () => {
		setShowContent(!showContent);
	};

	return (
		<section className='fitler-buttons'>
			<button className='filter__btn'>All</button>
			<button className='filter__btn'>Newest</button>
			<button className='filter__btn'>Oldest</button>
			<div className='dropdown'>
				<button
					className='filter__btn'
					onClick={handleClick}>
					Type &#9662;
				</button>
				<div className={`dropdown-content ${showContent ? "show" : "hide"}`}>
					<a
						href='#'
						className='dropdown__item'>
						Web App
					</a>

					<a
						href='#'
						className='dropdown__item'>
						Mobile App
					</a>
					<a
						href='#'
						className='dropdown__item'>
						API
					</a>
					
				</div>
			</div>
		</section>
	);
};

export default Filter;
