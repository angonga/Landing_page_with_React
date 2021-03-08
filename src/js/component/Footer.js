import React from "react";

export function Footer() {
	return (
		<nav className="navbar navbar-light bg-dark">
			<p
				style={{
					color: "white",
					justifyContent: "center",
					alignItems: "center",
					margin: "auto"
				}}>
				Copyright <i className="far fa-copyright"></i> Year Webside 2021
			</p>
		</nav>
	);
}
