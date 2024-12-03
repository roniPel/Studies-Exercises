import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/add">Add Donation </NavLink>
            | 
            <NavLink to="/higher"> Large Donation </NavLink>
            | 
            <NavLink to="/lower"> Small Donation </NavLink>
            | 
            <NavLink to="/all"> All Donations </NavLink>
            | 
            <NavLink to="/byName"> Donation By Name </NavLink>
        </div>
    );
}
