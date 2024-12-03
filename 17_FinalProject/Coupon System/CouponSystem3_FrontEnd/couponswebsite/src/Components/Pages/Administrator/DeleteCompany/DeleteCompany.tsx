import { useNavigate, useParams } from "react-router-dom";
import "./DeleteCompany.css";
import { useEffect, useState } from "react";
import { couponStore } from "../../../../Redux/store";
import { ClientType } from "../../../../Models/ClientType";
import notify from "../../../../Utilities/notify";
import axiosJWT from "../../../../Utilities/axiosJWT";
import { Company } from "../../../../Models/Company";
import { SubmitHandler, useForm } from "react-hook-form";
import { deleteCompanyAction, getOneCompanyAction } from "../../../../Redux/adminReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import  DeleteIcon  from "@mui/icons-material/Delete";
import CancelIcon from '@mui/icons-material/Cancel';

export function DeleteCompany(): JSX.Element {
    const navigate = useNavigate();
    const [company, setCompany] = useState<Company>();
    const params = useParams();
    
    useEffect(()=>{
        // Check if user has viewing permissions
        if (couponStore.getState().auth.clientType!==ClientType.Administrator){
            navigate("/login");
            notify.error("You are not allowed!!!");
        }
        
        getCompany();
        
    },[]);

    function getCompany(){
        // check if we have company in redux
        if(couponStore.getState().admin.company.id === parseInt(params.companyID as string)){
            //console.log("Get from Store");
            setCompany(couponStore.getState().admin.company);
        } else {
        // get company data from backend
            axiosJWT.get(`http://localhost:8080/Admin/GetOneCompany/${params.companyID}`).then(res=>{
                setCompany(res.data);
                couponStore.dispatch(getOneCompanyAction(res.data));
                }).catch((err)=>{
                    console.log(err);
                    notify.error("There was a problem getting the requested data.");
                });
            }
    }

    function deleteCompany() {
        axiosJWT.delete(`http://localhost:8080/Admin/DeleteCompany/${params.companyID}`)
        .then((res)=> {
            couponStore.dispatch(deleteCompanyAction(parseInt(params.companyID as string)));
            notify.success("The company was deleted successfully.");
            navigate("/adminHome");
        })
        .catch((err)=> {
            console.log(err);
            notify.error("There was a problem deleting the company.");
        })   
    }
    return (
        <div>
            <Typography variant="h4" className="HeadLine">Delete Company</Typography>
            <hr/>
            <div className="DeleteCompany Box" style={{ width: "40%" }}>
                <div className="Grid-Parent">
                    <div className="Grid-Child">
                        <Typography variant="h5" className="HeadLine">{company?.name}</Typography>
                        <br/>
                        <Typography variant="h6" className="HeadLine">{company?.email}</Typography>
                        <br/><br/>
                    </div>
                    <div className="Grid-Child">
                        <ButtonGroup variant="contained" fullWidth>
                            <Button type="button" variant="contained" color="error" onClick={deleteCompany} > Delete</Button>
                            <Button variant="contained" color="primary" startIcon={<CancelIcon/>} onClick={() => { navigate("/adminHome") }}>Cancel</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}
