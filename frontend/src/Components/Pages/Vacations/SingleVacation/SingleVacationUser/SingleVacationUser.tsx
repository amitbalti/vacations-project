import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Vacation from "../../../../../Model/Vacation";
import "./SingleVacationUser.css";
import { FavoriteBorder } from "@mui/icons-material";

interface vacationProps {
  vacationData: Vacation;
}

function SingleVacationUser(props: vacationProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="SingleVacationUser Box">
      <Card sx={{ maxWidth: 345 }}>
        <FavoriteBorder />
        <CardMedia
          sx={{ height: 140 }}
          component="img"
          src={props.vacationData.img} // make it dynamic (according to the backend data)
          title={`${1}`} // add the destenation name dynamically
        />
        <CardContent>
          <Typography variant="h5" className="img-text">
            {/* Make the destination name to be written here */}
            {props.vacationData.destination}
          </Typography>
          <hr />
          <Typography variant="body2">
            {props.vacationData.description}
            {/* DESCRIPTION */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" fullWidth>
            {props.vacationData.price}$
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SingleVacationUser;
