import { Donation } from "../../Model/Donation";
import "./SingleDonation.css";

export function SingleDonation(props:Donation): JSX.Element {
    return (
        <div className="SingleDonation Box">
			<h1>{props.donationAmount}</h1><hr/>
            {props.blessing}<hr/>
            <h5>{props.name}</h5>
        </div>
    );
}
