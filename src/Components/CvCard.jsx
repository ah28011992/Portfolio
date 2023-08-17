import React from "react";
import { experienceObj } from "../data/experienceData";

const CvCard = () => {
	return (
		<section className='cv-card-container'>
			{experienceObj.map((data, index) => {
				return (
					<section
						className='cv-card'
						key={index}>
						<p className='cv-card__date'>{data.date}</p>
						<section className='cv-content'>
							<p className='cv-card__workplace'>{data.placeOfExperience}</p>
							<p className='cv-card__title'>{data.position}</p>
							<p className='cv-card__description'>{data.description}</p>
							{data.points.map((data, index) => {
								return (
									<ul
										key={index}
										className='bullet-list'>
										<li>{data}</li>
									</ul>
								);
							})}
						</section>
					</section>
				);
			})}
		</section>
	);
};

export default CvCard;
