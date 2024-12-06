import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App></App>
	</React.StrictMode>
);
