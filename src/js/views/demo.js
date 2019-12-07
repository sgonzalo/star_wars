import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{/* {store.planets.map((item, index) => (
				<ul key={index} className="list-group">
					<li className="list-group-item d-flex justify-content-between">{item.name}</li>
				</ul>
			))} */}
		</div>
	);
};
