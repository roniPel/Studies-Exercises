import { Button, ButtonGroup, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ClientType } from "../../../../Models/ClientType";
import axios from "axios";
import notify from "../../../../Utilities/notify";
import { UserDetails } from "../../../../Models/UserDetails";
import axiosJWT from "../../../../Utilities/axiosJWT";
import { Customer } from "../../../../Models/Customer";
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import { couponStore } from "../../../../Redux/store";
import { addCustomerAction } from "../../../../Redux/adminReducer";
import { useEffect, useState } from "react";


export function Register(): JSX.Element {
    const navigate = useNavigate();
    const [isAdmin,setAdmin] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Customer>();

    useEffect(()=>{
        setAdmin(couponStore.getState().auth.clientType===ClientType.Administrator);
    },[]);

    const onSubmit: SubmitHandler<Customer> = (data) => {
        data.id = 0;
        //console.log(data);
        //Todo - check that the passwords are the same , if not, do not countinue
        if(isAdmin){
            axiosJWT.post("http://localhost:8080/Admin/AddCustomer",data)
        .then((res)=>{
            data.id = res.data;
            // Update redux
            couponStore.dispatch(addCustomerAction(data));
            notify.success("User was added successfully");
            navigate("/adminHome");

        })
        .catch(err=>{
            console.log(err);
            notify.error("There was a problem saving the user");
        });
        }
        else {
            axios.post("http://localhost:8080/Guest/AddCustomer", data)
            .then((res)=>{
                data.id = res.data;
                // No need to update redux, since user is 'guest'
                notify.success("User was added successfully");
                navigate("/login");
                
            })
            .catch(err=>{
                console.log(err);
                notify.error("There was a problem saving the user");
            });
        }
        
    }

    return (
        <div className="Register">
            <div className="Box" style={{ width: "40%" }}>
                <Typography variant="h4" className="HeadLine">New Customer / Register</Typography>
                <hr /><br/>
                {/* <input type="text" placeholder="user name..." onChange={(args)=>setEmail(args.target.value)}/><br/><br/> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField label="first name" variant="outlined" {...register("firstName", {maxLength:20})} fullWidth />
                    {errors.firstName?.type == "maxLength" && <><br/><span style={{ color: "red" }}>First Name is too long. Max length: 20</span></>}
                    <br /><br />
                    <TextField label="last name" variant="outlined" {...register("lastName",{maxLength:20})} fullWidth />
                    {errors.lastName?.type == "maxLength" && <><br/><span style={{ color: "red" }}>Last Name is too long. Max length: 20</span></>}
                    <br /><br />
                    <TextField required label="email" variant="outlined" {
                        ...register("email", { required: true , maxLength:30})} fullWidth />
                    {errors.email && <span style={{ color: "red" }}>Email is required</span>}
                    {errors.email?.type == "maxLength" && <><br/><span style={{ color: "red" }}>Email is too long. Max length: 30</span></>}
                    <br /><br />
                    <TextField required label="password" type="password" variant="outlined" {
                        ...register("password", { required: true, minLength: 5, maxLength: 10 })} fullWidth />
                    {errors.password?.type == "required" && <><br /><span style={{ color: "red" }}>password is required</span></>}
                    {errors.password?.type == "minLength" && <><br /><span style={{ color: "red" }}>password is too short</span></>}
                    {errors.password?.type == "maxLength" && <><br /><span style={{ color: "red" }}>password is too long</span></>}
                    <br /><br />
                    <TextField label="password check" variant="outlined" type="password" fullWidth />
                    <hr />
                    <br/>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button type="submit" color="primary" startIcon={<AddIcon/>} >register</Button>
                        <Button color="error" startIcon={<CancelIcon/>} onClick={() => { navigate("/") }}>Cancel</Button>
                    </ButtonGroup>
                </form>
            </div>
        </div>
    );
}
