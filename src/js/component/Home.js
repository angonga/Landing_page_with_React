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
					<Card
						ctext="Card 1"
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
						img="https://placehold.it/500x325"
						btext="Find out more!"
					/>
					<Card
						ctext="Card 2"
						text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has ..."
						img="https://placehold.it/500x325"
						btext="Find out more!"
					/>

					<Card
						ctext="Card 3"
						text="It is a long established fact that a reader will be distracted by the ..."
						img="https://placehold.it/500x325"
						btext="Find out more!"
					/>

					<Card
						ctext="Card 4"
						text="There are many variations of passages of Lorem Ipsum available, but ..."
						img="https://placehold.it/500x325"
						btext="Find out more!"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
