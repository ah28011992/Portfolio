import React, { useState, useEffect } from "react";

const Filter = ({ portfolioOrder, setPortfolioOrder, setSelelctedType }) => {
	const [showContent, setShowContent] = useState(false);
	const [newestDate, setNewestDate] = useState("oldest");

	useEffect(() => {
		if (newestDate === "newest") {
			const sortedNewest = [...portfolioOrder].sort((a, b) => b.date - a.date);
			setPortfolioOrder(sortedNewest);
		} else if (newestDate === "oldest") {
			const sortedOldest = [...portfolioOrder].sort((a, b) => a.date - b.date);
			setPortfolioOrder(sortedOldest);
		}
	}, [newestDate]);

	const handleDropDownClick = () => {
		setShowContent(!showContent);
	};

	const handleSelect = (type) => {
		setSelelctedType(type);
		setShowContent(false);
	};

	const handleClick = (e, value) => {
		e.preventDefault();
		handleSelect(value);
	};

	return (
		<section className='fitler-buttons'>
			<button
				onClick={() => setNewestDate("all")}
				className='filter__btn'>
				All
			</button>
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
						onClick={(e) => handleClick(e, "Web App")}
						className='dropdown__item'>
						Web App
					</a>

					<a
						href='#'
						onClick={(e) => handleClick(e, "Mobile App")}
						className='dropdown__item'>
						Mobile App
					</a>
					<a
						href='#'
						onClick={(e) => handleClick(e, "API")}
						className='dropdown__item'>
						API
					</a>
				</div>
			</div>
		</section>
	);
};

export default Filter;
