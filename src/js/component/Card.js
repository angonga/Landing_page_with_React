import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ width: "17rem", margin: "auto" }}>
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title text-center">{props.ctext}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.btext}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	ctext: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string,
	btext: PropTypes.string
};
