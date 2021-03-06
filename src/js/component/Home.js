import React from "react";

import { Card } from "./Card";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />

				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
}
