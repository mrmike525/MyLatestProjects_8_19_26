import {Link, NavLink} from "react-router-dom";

import styles from "./NavigationBar.module.css";

function NavigationBar ()
{
	return (
		<>
			<nav>
				<Link to={"/"}>Home</Link>
				<Link to={"/spacecrafts"}>Spacecrafts</Link>
				<Link to={"/spacecraft/build"}>Build Spacecraft</Link>
				<Link to={"/spacecraft/:id"}>Spacecraft by ID</Link>
				<Link to={"/planets"}>Planets</Link>
			</nav>
			</>
			);
}

export default NavigationBar;
