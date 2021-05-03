import React from "react";

const Redirect = () => {
	document.title = "301 - Redirecting...";

	return (
		<div className="redirect">
			<h1 className="redirect-tag">301 - Redirecting</h1>
			<p className="redirect-text">Redirecting you to another page...</p>
		</div>
	);
};

export default Redirect;
