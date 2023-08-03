import React, { useState, useEffect } from "react";

const Filter = ({ portfolioOrder, setPortfolioOrder }) => {
	const [showContent, setShowContent] = useState(false);
	const [newestDate, setNewestDate] = useState("oldest");

	useEffect(() => {
		if (newestDate === "newest") {
			const sortedNewest = [...portfolioOrder].sort((a, b) => b.date - a.date);
			console.log("Sorted Newest:", sortedNewest);
			setPortfolioOrder(sortedNewest);
		} else {
			const sortedOldest = [...portfolioOrder].sort((a, b) => a.date - b.date);
			console.log("Sorted oldest:", sortedOldest);
			setPortfolioOrder(sortedOldest);
		}
	}, [newestDate]);

	const handleDropDownClick = () => {
		setShowContent(!showContent);
	};

	return (
		<section className='fitler-buttons'>
			<button className='filter__btn'>All</button>
			<button
				onClick={() => setNewestDate("newest")}
				className='filter__btn'>
				Newest
			</button>
			<button
				className='filter__btn'
				onClick={() => setNewestDate("oldest")}>
				Oldest
			</button>
			<div className='dropdown'>
				<button
					className='filter__btn'
					onClick={handleDropDownClick}>
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
