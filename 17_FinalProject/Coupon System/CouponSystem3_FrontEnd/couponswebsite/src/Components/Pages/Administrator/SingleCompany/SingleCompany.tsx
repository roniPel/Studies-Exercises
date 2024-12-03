import { useNavigate } from "react-router-dom";
import { Company } from "../../../../Models/Company";
import "./SingleCompany.css";
import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import  DeleteIcon  from "@mui/icons-material/Delete";
import UpdateIcon from '@mui/icons-material/Update';
import { useEffect } from "react";
import { couponStore } from "../../../../Redux/store";
import { ClientType } from "../../../../Models/ClientType";
import notify from "../../../../Utilities/notify";

interface companyProps {
    company: Company;
}

export function SingleCompany(props: companyProps): JSX.Element {
    const navigate = useNavigate();
    useEffect(()=>{
        if (couponStore.getState().auth.clientType!==ClientType.Administrator){
            navigate("/login");
            notify.error("You are not allowed!!!");
        }
    },[]);

    return (
        <div className="SingleCompany Box" onClick={()=>{
            navigate(`/company/${props.company.id.valueOf()}`)
        }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                    <Typography variant="h6" color="text.secondary">
                    id: {props.company.id}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    {props.company.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    Email: {props.company.email}
                    </Typography >
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
