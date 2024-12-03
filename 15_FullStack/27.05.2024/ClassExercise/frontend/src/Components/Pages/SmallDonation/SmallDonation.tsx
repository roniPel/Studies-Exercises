import { useState } from "react";
import "./SmallDonation.css";
import { Donation } from "../../Model/Donation";
import { SingleDonation } from "../SingleDonation/SingleDonation";
import axios from "axios";

export function SmallDonation(): JSX.Element {
    const [amount,setAmount] = useState(0);
    const [donations,setDonatins] = useState<Donation[]>([]);

    const getData = ()=>{
        //axios
        axios.get(`http://localhost:8080/api/v1/donation/less/${amount}`).then(res=>{
            //console.log(res.data);           
            let returnDonation = [];
            for (let index=0;index<res.data.length;index++){
                returnDonation.push(res.data[index]);
            }
            setDonatins(returnDonation);
        })
    }
    return (
        <div className="SmallDonation">
			<div className="Box">
                <input type="number" placeholder="Enter amount" onChange={(args)=>setAmount(+args.target.value)}/>
                <input type="button" value="Search" onClick={getData}/>
            </div>
            <hr/>
            {donations.map(item=><SingleDonation key={item.id} name={item.name} donationAmount={item.donationAmount} blessing={item.blessing} id={item.id}/>)}
        </div>
    );
}
