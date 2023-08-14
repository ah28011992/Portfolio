import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./routes/Home";
import ErrorPage from "./Components/ErrorPage";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import About from "./routes/About";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			errorElement={<ErrorPage />}
			path='/'
			element={<Layout />}>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path='about'
				element={<About />}
			/>
			<Route
				path='projects'
				element={<Projects />}
			/>
			<Route
				path='contact'
				element={<Contact />}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
