import { useEffect, useState } from "react";
import { Donation } from "../../Model/Donation";
import "./AllDonation.css";
import { SingleDonation } from "../SingleDonation/SingleDonation";
import axios from "axios";

export function AllDonation(): JSX.Element {
    const [donations,setDonations] = useState<Donation[]>([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/donation/list").then(res=>{
            //console.log(res.data);           
            let returnDonation = [];
            for (let index=0;index<res.data.length;index++){
                returnDonation.push(res.data[index]);
            }
            setDonations(returnDonation);
        })
    },[])
    return (
        <div className="AllDonation">
			{donations.map(item=><SingleDonation key={item.id} id={item.id} name={item.name} donationAmount={item.donationAmount} blessing={item.blessing}/>)};
        </div>
    );
}
