import { Typography } from "@mui/material";
import { logo } from "../../../Assets/uri.png"
import "./Header.css";

export function Header(): JSX.Element {
    return (
        <div className="Header">
            <div>
                <img src={logo} width={150}/>
            </div>
            <div>
                <Typography variant="h2" className="MainHeadLine">Donations System</Typography>
            </div>
        </div>
    );
}
