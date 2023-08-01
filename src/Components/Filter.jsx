import React from "react";

const Filter = () => {
	return (
		<section className='fitler-buttons'>
			<button className='filter__btn'>All</button>
			<button className='filter__btn'>Newest</button>
			<button className='filter__btn'>Oldest</button>
			<div className='dropdown'>
				<button className='filter__btn'>Type &#9662;</button>
				<div className='dropdown-content'>
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
