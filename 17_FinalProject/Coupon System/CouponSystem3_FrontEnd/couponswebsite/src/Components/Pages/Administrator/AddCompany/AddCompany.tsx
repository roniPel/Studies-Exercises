import { useNavigate } from "react-router-dom";
import "./AddCompany.css";
import { useEffect, useState } from "react";
import { ClientType } from "../../../../Models/ClientType";
import { couponStore } from "../../../../Redux/store";
import notify from "../../../../Utilities/notify";
import { SubmitHandler, useForm } from "react-hook-form";
import { Company } from "../../../../Models/Company";
import axiosJWT from "../../../../Utilities/axiosJWT";
import { addCompanyAction, getOneCompanyAction } from "../../../../Redux/adminReducer";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';

export function AddCompany(): JSX.Element {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors} } = useForm<Company>();

    couponStore.subscribe(()=>{
        // Todo - update Subscibe so that store is updated after adding new company
    });
    useEffect(()=>{
        // Check if user has viewing permissions
        if (couponStore.getState().auth.clientType!==ClientType.Administrator){
            navigate("/login");
            notify.error("You are not allowed!!!");
        }
    },[]);

    const onSubmit: SubmitHandler<Company> = (data) => {
        data.id=0;
        //console.log(data);
        axiosJWT.post(`http://localhost:8080/Admin/AddCompany`,data)
        .then((res)=> {
            //console.log(res.data);
            data.id = res.data;
            couponStore.dispatch(addCompanyAction(data));
            notify.success("The company was created successfully.");
            navigate("/adminHome");
        })
        .catch((err)=> {
            console.log(err);
            notify.error("There was a problem creating the company.");
        })
    }

    return (
        <div className="AddCompany" >
            <div className = "Box" style={{ width: "40%" }}>
                <Typography variant="h4" className="HeadLine">New Company</Typography>
                <hr /><br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField required type="text" label="Company Name" fullWidth 
                    {...register("name",{required:true, maxLength:20})} />
                    {errors.name?.type == "required" && <><br/><span style={{ color: "red" }}>Name is required</span></>}
                    {errors.name?.type == "maxLength" && <><br/><span style={{ color: "red" }}>Name is too long. Max length: 20</span></>}
                    <br/><br/>
                    <TextField required type="text" label="Company Email" variant="outlined" fullWidth 
                    {...register("email",{required:true, maxLength:30})} />
                    {errors.name?.type == "maxLength" && <><br/><span style={{ color: "red" }}>Email is too long. Max length: 30</span></>}
                    <br/><br/>
                    <TextField required type="password" label="Company Password" variant="outlined" fullWidth 
                    {...register("password",{required:true, minLength:5, maxLength:15})} />
                    {errors.password?.type == "required" && <><br/><span style={{color: "red"}}>Password is required</span></>}
                    {errors.password?.type == "minLength" && <><br/><span style={{color: "red"}}>Password is too short.  Minimum length: 5</span></>}
                    {errors.password?.type == "maxLength" && <><br/><span style={{color: "red"}}>Password is too long.  Maximum length: 15</span></>}
                    <br/><br/>
                    <TextField label="password check" variant="outlined" type="password" fullWidth />
                    <br /><br />
                    <hr />
                    <br/>
                    {/* Todo - add a check that passwords are the same */}
                    <ButtonGroup variant="contained" fullWidth>
                        <Button type="submit" variant="contained" color="primary" startIcon={<AddIcon/>} >Add</Button>
                        <Button variant="contained" color="error" startIcon={<CancelIcon/>} onClick={() => { navigate("/adminHome") }}>Cancel</Button>
                    </ButtonGroup>
                </form>
            </div>
        </div>
    );
}
