import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

const Planets = () => {
	const { store, actions } = useContext(Context);
	if (store.planets == undefined || store.planets == null) return <h1>Loading</h1>;
	else {
		return (
			<div className="text-center mt-5" style={{ position: "absolute", left: "0", width: "33%" }}>
				{store.planets.map((item, index) => (
					<h1 key={index}>{item.name}</h1>
				))}

				<a href="#" className="btn btn-success">
					If you see this green button, bootstrap is working
				</a>
			</div>
		);
	}
};
export default Planets;
