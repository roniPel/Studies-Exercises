import axios from "axios";
import { Coupon } from "../Models/Coupon";
import { couponStore } from "../Redux/store";
import { getAllCompanyCouponsAction } from "../Redux/companyReducer";
import notify from "./notify";
import axiosJWT from "./axiosJWT";

export const getCompanyCouponsFromDB = () => {
    let recivedList:Coupon[] = [];
    // Get coupons from DB
    axiosJWT.get("http://localhost:8080/Company/GetCompanyCoupons")
    .then(result=>{
        //console.log("Axios result: "+result)
    for (let index=0;index<result.data.length;index++){
        recivedList.push(new Coupon(
            result.data[index].id,
            result.data[index].companyId,
            result.data[index].category,
            result.data[index].title,
            result.data[index].description,
            result.data[index].start_date,
            result.data[index].end_date,
            result.data[index].amount,
            result.data[index].price,
            result.data[index].image
        ));
    };            
    couponStore.dispatch(getAllCompanyCouponsAction(recivedList));
    })
    .catch(err=>{
        console.log(err);
        notify.error("There was a problem getting the requested data.");              
    });
}