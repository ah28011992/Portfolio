const d1 = new Date("2023-03-31"); // Back end api
const d2 = new Date("2023-04-21"); // front end boardit
const d3 = new Date("2023-05-10"); // Park n ride
const d4 = new Date("2023-07-31"); // Vanilla calculator
const d5 = new Date("2023-08-04"); // portfolio
const d6 = new Date("2023-08-31"); // Surf point

const portfolioObject = [
	{
		name: "BOARDIT",
		type: "Web App",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laborum repellendus cupiditate consequatur ut veniam impedit quaerat eos eveniet debitis eligendi, atque magni optio totam distinctio velit fugit recusandae voluptates!",
		techStack: ["React.js, JSX, CSS, NPM, Netlify, Elephant, Excalidraw"],
		img: `./download.jpeg`,
		gitHubLink: "This is a link",
		codePen: "Hosted Front - end information",
		date: d1,
	},
	{
		name: "BOARDIT API",
		type: "API",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laborum repellendus cupiditate consequatur ut veniam impedit quaerat eos eveniet debitis eligendi, atque magni optio totam distinctio velit fugit recusandae voluptates!",
		techStack: ["Node.js, Express.js, CORS, PostgreSQL, Jest, Renderer"],
		img: "img url",
		gitHubLink: "This is a link",
		codePen: "Hosted Back - end information",
		date: d2,
	},
	{
		name: "Park 'n' Find",
		type: "Mobile App",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laborum repellendus cupiditate consequatur ut veniam impedit quaerat eos eveniet debitis eligendi, atque magni optio totam distinctio velit fugit recusandae voluptates!",
		techStack: ["React-Native", "TomTom API", "Node.js, Google Firebase"],
		gitHubLink: "This is a link",
		codePen: "Hosted Back - end information",
		date: d3,
	},
	{
		name: "Surf point",
		type: "Web App",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laborum repellendus cupiditate consequatur ut veniam impedit quaerat eos eveniet debitis eligendi, atque magni optio totam distinctio velit fugit recusandae voluptates!",
		techStack: [
			// Include security and Weather API
			"Next.JS",
			"TailWind CSS",
			"Framer",
			"Three.js",
			"Node.js",
			"Supabase",
		],
		gitHubLink: "This is a link",
		codePen: "Hosted Back - end information",
		date: d6,
	},
	{
		name: "Vanilla Calculator (with Ice Cream Emoji",
		type: "Web App",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laborum repellendus cupiditate consequatur ut veniam impedit quaerat eos eveniet debitis eligendi, atque magni optio totam distinctio velit fugit recusandae voluptates!",
		techStack: [
			// Include security and API
			"Vanilla JS",
			"Typescript",
			"CSS : BEM",
			"WebPack",
			"",
			"Node.js",
			"Supabase",
		],
		gitHubLink: "This is a link",
		codePen: "Hosted Back - end information",
		date: d4,
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
	// 	codePen: "Hosted Back - end information",
	// },
];

const filteredProjectData = portfolioObject.map((data) => {
	if (data.type === "Web App") {
		console.log(data );
	}
});
