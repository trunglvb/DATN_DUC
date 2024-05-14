import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/globals.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./App";
import CCCDTab from "./pages/CCCD/index.tsx";
import BHYT from "./pages/BHYT/index.tsx";
import CCCDCTab from "./pages/CCCDC/index.tsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Layout>
				<CCCDTab />
			</Layout>
		),
	},
	{
		path: "/bhyt",
		element: (
			<Layout>
				<BHYT />
			</Layout>
		),
	},
	{
		path: "/cccdc",
		element: (
			<Layout>
				<CCCDCTab />
			</Layout>
		),
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
