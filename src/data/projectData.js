const d1 = new Date("2023-03-31"); // Back end api
const d2 = new Date("2023-04-21"); // front end boardit
const d3 = new Date("2023-05-10"); // Park n ride
const d4 = new Date("2023-07-31"); // Vanilla calculator
// const d5 = new Date("2023-08-04"); // portfolio
const d6 = new Date("2023-08-31"); // Surf point

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
};

const portfolioObject = [
	{
		name: "BOARDIT",
		type: "Web App",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laborum repellendus cupiditate consequatur ut veniam impedit quaerat eos eveniet debitis eligendi, atque magni optio totam distinctio velit fugit recusandae voluptates!",
		techStack: [
			"React.js|React.js",
			"JSX|JSX",
			"CSS|CSS",
			"NPM|NPM",
			"Netlify|Netfliy",
			"Elephant|Elephant",
			"Excalidraw|Excalidraw",
		],
		img: `https://fakeimg.pl/250x250/cccccc/909090?text=Card+image`,
		gitHubLink: "This is a link",
		codePen: "Hosted Front - end information",
		date: d1,
	},
	{
		name: "BOARDIT API",
		type: "API",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laborum repellendus cupiditate consequatur ut veniam impedit quaerat eos eveniet debitis eligendi, atque magni optio totam distinctio velit fugit recusandae voluptates!",
		techStack: [
			"Node.js|Node.js",
			"Express.js|Express.js",
			"PostgreSQL|PostgreSQL",
			"Jest|Jest",
			"Renderer|Renderer",
		],
		img: `https://fakeimg.pl/250x250/cccccc/909090?text=Card+image`,
		gitHubLink: "This is a link",
		codePen: "Hosted Back - end information",
		date: d2,
	},
	{
		name: "Park, Find 'n' Remind",
		type: "Mobile App",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laborum repellendus cupiditate consequatur ut veniam impedit quaerat eos eveniet debitis eligendi, atque magni optio totam distinctio velit fugit recusandae voluptates!",
		techStack: [
			"React-Native|React-Native",
			"TomTom API|TomTom API",
			"Node.js|Node.js",
			"Google Firebase|Google Firebase",
		],
		img: `https://fakeimg.pl/250x250/cccccc/909090?text=Card+image`,
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
			"Next.JS|Next.JS",
			"TailWind CSS|TailWind CSS",
			"Framer|Framer",
			"Three.js|Three.js",
			"Node.js|Node.js",
			"Supabase|Supabase",
		],
		img: `https://fakeimg.pl/250x250/cccccc/909090?text=Card+image`,
		gitHubLink: "This is a link",
		codePen: "Hosted Back - end information",
		date: d6,
	},
	{
		name: "Vanilla Calculator",
		type: "Web App",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laborum repellendus cupiditate consequatur ut veniam impedit quaerat eos eveniet debitis eligendi, atque magni optio totam distinctio velit fugit recusandae voluptates!",
		techStack: [
			// Include security and API
			"Vanilla JS|Vanilla JS",
			"Typescript|Typescript",
			"CSS : BEM|CSS : BEM",
			"WebPack|WebPack",
			"Node.js|Node.js",
			"PostgreSQL|PostgreSQL",
		],
		img: `https://fakeimg.pl/250x250/cccccc/909090?text=Card+image`,
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

export { portfolioObject, colorMapping };
