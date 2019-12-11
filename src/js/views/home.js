import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import People from "../component/people";
import Vehicles from "../component/vehicles";
import Planets from "../component/planets";
//import Footer from "../component/footer";

const Home = () => {
	const { store, actions } = useContext(Context);
	// if (store.people == undefined || store.people == null) return <h1>Loading</h1>;
	// else {
	return (
		<div>
			<h1>Test</h1>
		</div>
	);
};

export default Home;
