const d1 = new Date("2023-03-31"); // Back end api
const d2 = new Date("2023-04-21"); // front end boardit
const d3 = new Date("2023-05-10"); // Park n ride
const d4 = new Date("2023-07-31"); // Vanilla calculator
const d5 = new Date("2023-08-22"); // portfolio
const d6 = new Date("2023-08-31"); // Surf point
import porfolioImg from "../assets/card-img/portfolio.png";
import pfrImg from "../assets/card-img/pfr.png";

const colorMapping = {
	"React.js": "blue",
	JSX: "purple",
	CSS: "lightblue",
	NPM: "green",
	Netlify: "orange",
	Elephant: "gray",
	Excalidraw: "pink",
	"Node.js": "green",
	"Express.js": "blue",
	PostgreSQL: "lightblue",
	Jest: "red",
	Renderer: "greenyellow",
	"React-Native": "purple",
	"TomTom API": "orange",
	"Google Firebase": "darkorange",
	"Next.JS": "blue",
	"TailWind CSS": "teal",
	Framer: "pink",
	"Three.js": "purple",
	Supabase: "blue",
	"Vanilla JS": "goldenrod",
	Typescript: "blue",
	"CSS : BEM": "lightblue",
	WebPack: "purple",
	"Mongo DB": "green",
	Mongoose: "yellow",
	Vite: "turquoise",
	"Test Driven Development": "SkyBlue",
	Git: "red",
	GitHub: "black",
};

const portfolioObject = [
	{
		name: "BOARDIT",
		type: "Web App",
		description:
			"BOARDIT is a complete web app for leaving game reviews, designed to function alongside the BOARDIT API. It allows users to view, like, and comment on game reviews, and even provides a dummy user login option. I used React.js to develop this app, aiming to provide a smooth and user-friendly experience for those interested in sharing their reviews",
		techStack: [
			"React.js|React.js",
			"JSX|JSX",
			"CSS|CSS",
			"NPM|NPM",
			"Netlify|Netfliy",
			"Elephant|Elephant",
			"Excalidraw|Excalidraw",
			"Git|Git",
			"GitHub|GitHub",
		],
		img: `https://fakeimg.pl/250x250/cccccc/909090?text=Card+image`,
		gitHubLink: "https://github.com/ah28011992/fe_nc_games_",
		hostedWebLink: "#",
		codePen: "Hosted Front - end information",
		date: d1,
	},
	{
		name: "BOARDIT API",
		status: "In progress...",
		type: "API",
		description:
			"The BOARDIT API works alongside the BOARDIT React app and was created through integration testing. This project showcases my grasp of web protocols, integration testing, and querying a structured database using the MVC pattern. I also had the chance to work with PostgreSQL and Supertest",
		techStack: [
			"Node.js|Node.js",
			"Express.js|Express.js",
			"PostgreSQL|PostgreSQL",
			"Jest|Jest",
			"Renderer|Renderer",
			"Test Driven Development|Test Driven Development",
			"Git|Git",
			"GitHub|GitHub",
		],
		img: `https://fakeimg.pl/250x250/cccccc/909090?text=Card+image`,
		gitHubLink: "https://github.com/ah28011992/nc_games",
		hostedWebLink: "https://nc-games-p7v8.onrender.com/api/categories",
		codePen: "Hosted Back - end information",
		date: d2,
	},
	{
		name: "Park, Find 'n' Remind",
		type: "Mobile App",
		description:
			"Park, Find 'n' Remind  represents a collaborative full stack mobile app developed during my tenure at Northcoders bootcamp. My role focused on the front end, where I skillfully integrated the TomTom API. This experience showcases my ability to create user-centered interfaces while harnessing external tools to enhance functionality.",
		techStack: [
			"React-Native|React-Native",
			"TomTom API|TomTom API",
			"Node.js|Node.js",
			"Google Firebase|Google Firebase",
			"Git|Git",
			"GitHub|GitHub",
		],
		img: pfrImg,
		gitHubLink: "https://github.com/differently-wired/park-finder",
		hostedWebLink: "https://github.com/differently-wired/park-finder",
		codePen: "Hosted Back - end information",
		date: d3,
	},
	{
		name: "Surf point",
		type: "Web App",
		status: "Coming soon...",
		description:
			"Surf Point is a full stack mobile app project that showcases my skills in mobile app development using TypeScript and live API data integration. This app allows users to check real-time surf forecasts, receive pollution notifications, view comments/reviews on surf spots, and even post their own comments. ",
		techStack: [
			// Include security and Weather API
			"React-Native|React-Native",
			"TailWind CSS|TailWind CSS",
			"Typescript|Typescript",
			// "Framer|Framer",
			// "Three.js|Three.js",
			"Node.js|Node.js",
			"Supabase|Supabase",
			"Git|Git",
			"GitHub|GitHub",
		],
		img: `https://fakeimg.pl/250x250/cccccc/909090?text=Card+image`,
		gitHubLink: "disabled",
		hostedWebLink: "disabled",
		codePen: "Hosted Back - end information",
		date: d6,
	},
	{
		name: "Vanilla Calculator",
		type: "Web App",
		status: "In progress...",
		description:
			"I built a practical calculator using vanilla JS and styled it with Tailwind CSS. The main goal was to strengthen my DOM manipulation skills and get more comfortable with Tailwind, a popular CSS framework. This project allowed me to create a working calculator while enhancing my ability to combine functionality with styling",
		techStack: [
			"Vanilla JS|Vanilla JS",
			"TailWind CSS|TailWind CSS",
			"WebPack|WebPack",
			"Git|Git",
			"GitHub|GitHub",
		],
		img: `https://fakeimg.pl/250x250/cccccc/909090?text=Card+image`,
		gitHubLink: "This is a link",
		hostedWebLink: "#",
		codePen: "Hosted Back - end information",
		date: d4,
	},
	{
		name: "Portfolio",
		type: "Web App",
		description:
			"I designed and built a Vite|React web app for showcasing my projects, both ongoing and completed. The main goal was to improve my grasp of vanilla CSS with the BEM methodology, while also enhancing my ability to create responsive designs. By using media queries, I aimed to ensure that the app looks and works well on both mobile and desktop devices. Additionally, I chose to work with vanilla JavaScript to strengthen my fundamental programming skills, resulting in a well-rounded and functional web app.",
		techStack: [
			"Vite|Vite",
			"JSX|JSX",
			"CSS|CSS",
			"NPM|NPM",
			"Netlify|Netfliy",
			"Miro|Miro",
			"Google Firebase|Google Firebase",
			"Three.js|Three.js",
		],
		img: porfolioImg,
		gitHubLink: "https://github.com/ah28011992/portfolio",
		hostedWebLink: "https://aaron-hedgecock.netlify.app/",
		codePen: "Hosted Front - end information",
		date: d5,
	},
	// {
	// 	name: "You & Me",
	// 	type: "Web app",
	// 	description:
	// 		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laborum repellendus cupiditate consequatur ut veniam impedit quaerat eos eveniet debitis eligendi, atque magni optio totam distinctio velit fugit recusandae voluptates!",
	// 	techStack: [
	// 		// Include security and API
	// 		"Vanilla JS",
	// 		"CSS : BEM",
	// 		"WebPack",
	// 		"Node.js",
	// 		"Mongo DB",
	// 		"Mongoose",
	// 	],
	// 	gitHubLink: "This is a link",
	//  hostedWebLink:"#",
	// 	codePen: "Hosted Back - end information",
	// },
];

export { portfolioObject, colorMapping };
