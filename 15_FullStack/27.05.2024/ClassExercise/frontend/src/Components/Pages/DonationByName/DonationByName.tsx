import { useState } from "react";
import "./DonationByName.css";
import { Donation } from "../../Model/Donation";
import axios
 from "axios";
import { SingleDonation } from "../SingleDonation/SingleDonation";
export function DonationByName(): JSX.Element {
    const [name,setName] = useState("");
    const [donations,setDonatins] = useState<Donation[]>([]);
    
    const getData = ()=>{
        //axios
        axios.get(`http://localhost:8080/api/v1/donation/byName/${name}`).then(res=>{
            //console.log(res.data);           
            let returnDonation = [];
            for (let index=0;index<res.data.length;index++){
                returnDonation.push(res.data[index]);
            }
            setDonatins(returnDonation);
        })
    }

    return (
        <div className="DonationByName">
			<div className="Box">
                <input type="text" placeholder="Enter amount" onChange={(args)=>setName(args.target.value)}/>
                <input type="button" value="Search" onClick={getData}/>
            </div>
            <hr/>
            {donations.map(item=><SingleDonation key={item.id} name={item.name} donationAmount={item.donationAmount} blessing={item.blessing} id={item.id}/>)}
        </div>
    );
}
