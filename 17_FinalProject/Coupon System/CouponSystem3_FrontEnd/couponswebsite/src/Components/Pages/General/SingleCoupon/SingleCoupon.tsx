import { useNavigate } from "react-router-dom";
import { Coupon } from "../../../../Models/Coupon";
import "./SingleCoupon.css";
import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


interface couponProps {
    coupon: Coupon;
}
    
export function SingleCoupon(props: couponProps): JSX.Element {
    const IMAGE_WIDTH=200;
    const navigate = useNavigate();

    return (
        <div id="singleCoupon" className="SingleCoupon Box"
            onClick={()=>{
                navigate(`/coupon/${props.coupon.id}`)
            }}
        >
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    width={IMAGE_WIDTH}
                    image={props.coupon.image}
                    alt={props.coupon.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{props.coupon.title}</Typography>
                    <Typography variant="h6" color="text.secondary">{props.coupon.description}</Typography >
                    <Typography variant="body2" color="text.secondary">Category: {props.coupon.category}</Typography ><br/>
                    <Typography variant="body1" color="text.secondary">
                    Valid Until: {props.coupon.end_date}<br/>
                    Only {props.coupon.price} (NIS)<br/>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button size="small" color="primary">
                            Buy Now!
                        </Button>
                        <Button size="small" color="secondary">
                            Details
                        </Button>
                    </ButtonGroup>
                </CardActions>
            </Card>
        </div>
    );
}
function navigate(arg0: string) {
    throw new Error("Function not implemented.");
}

