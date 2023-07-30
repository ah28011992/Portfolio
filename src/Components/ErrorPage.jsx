import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<section className='error'>
			<div className='error-content'>
				<h1>
					{error.status} {error.statusText}
				</h1>
				<p className='error__text'>Something went wrong!</p>
			</div>
		</section>
	);
};

export default ErrorPage;
