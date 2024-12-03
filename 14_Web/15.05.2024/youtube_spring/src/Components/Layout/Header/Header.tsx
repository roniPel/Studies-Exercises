import "./Header.css";
import logo from "../../../assests/uri.png";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

export function Header(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Header">
            <div>
                <img src={logo} width={180}/>
            </div>
            <div>
			<h1>Class 169</h1>
            <h2>the best that lecturer can get</h2>
            </div>
            <div className="login">
                Hello Guest <br/>               
                <ButtonGroup variant="contained" fullWidth>
                        <Button type="submit" color="primary" onClick={()=>{navigate("/login")}}>login</Button>
                        <Button color="success" onClick={() => { navigate("/register") }}>register</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
