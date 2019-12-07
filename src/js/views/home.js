import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	if (store.people == undefined || store.people == null) return <h1>Loading</h1>;
	else {
		return (
			<div className="text-center mt-5">
				{store.people.map((item, index) => (
					<h1 key={index}>{item.name}</h1>
				))}
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button, bootstrap is working
				</a>
			</div>
		);
	}
};
