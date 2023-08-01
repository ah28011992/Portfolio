import React from "react";
import { useLocation } from "react-router-dom";

const Title = () => {
	const location = useLocation();
	const locationPathTitle = location.pathname.slice(1);
	return (<h1 className='home__title'>{locationPathTitle}</h1>
    );
};

export default Title;
