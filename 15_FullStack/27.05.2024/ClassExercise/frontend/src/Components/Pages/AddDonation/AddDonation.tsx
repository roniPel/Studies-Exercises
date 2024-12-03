import { useNavigate } from "react-router-dom";
import "./AddDonation.css";
import { Donation } from "../../Model/Donation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import axios from "axios";

export function AddDonation(): JSX.Element {
    const navigate = useNavigate();

    //declare our needed methods from react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<Donation>();

    const onSubmit: SubmitHandler<Donation> = (data) => {
        axios.post("http://localhost:8080/api/v1/donation/add",data)
        .then((res)=>{
            navigate("/");
        })
        .catch(err=>{
            console.log(err);
        });
    }

    return (
        <div className="AddDonation">
			<div className="Box" style={{ width: "40%" }}>
                <Typography variant="h4" className="HeadLine">Add Donation</Typography>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField label="name" variant="outlined" {...register("name")} fullWidth />
                    <br /><br />
                    <TextField label="donationAmount" variant="outlined" {
                        ...register("donationAmount", { required: true, min:1 }    )} fullWidth />
                    {errors.donationAmount?.type=="required" && <><br/><span style={{ color: "red" }}>Min donation is 1</span></>}
                    <br /><br />
                    <TextField label="blessing" variant="outlined" {...register("blessing")} fullWidth />
                    <br /><br />
                    <hr />
                    <ButtonGroup variant="contained" fullWidth>
                        <Button type="submit" color="primary" >register</Button>
                        <Button color="error" onClick={() => { navigate("/") }}>cancel</Button>
                    </ButtonGroup>
                </form>
            </div>
        </div>
    );
}
