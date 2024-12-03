import { useState } from "react";
import { Donation } from "../../Model/Donation";
import "./LargeDonation.css";
import { SingleDonation } from "../SingleDonation/SingleDonation";
import axios from "axios";

export function LargeDonation(): JSX.Element {
    const [amount,setAmount] = useState(0);
    const [donations,setDonatins] = useState<Donation[]>([]);

    const getData = ()=>{
        axios.get(`http://localhost:8080/api/v1/donation/bigger/${amount}`).then(res=>{
            //console.log(res.data);           
            let returnDonation = [];
            for (let index=0;index<res.data.length;index++){
                returnDonation.push(res.data[index]);
            }
            setDonatins(returnDonation);
        })
    }
    return (
        <div className="LargeDonation">
			<div className="Box">
                <input type="number" placeholder="Enter amount" onChange={(args)=>setAmount(+args.target.value)}/>
                <input type="button" value="Search" onClick={getData}/>
            </div>
            <hr/>
            {donations.map(item=><SingleDonation key={item.id} name={item.name} donationAmount={item.donationAmount} blessing={item.blessing} id={item.id}/>)}
        </div>
    );
}
