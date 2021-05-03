import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	document.title = "404 - Not Found";

	return (
		<div className="error">
			<h1 className="error-tag">404 - Not Found</h1>
			<p className="error-text">Looks like you are lost, lets return to a safe place</p>
			<Link to="/" className="error-button">
				Home
			</Link>
		</div>
	);
};

export default NotFound;
