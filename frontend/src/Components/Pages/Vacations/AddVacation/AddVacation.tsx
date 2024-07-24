// import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Vacation from "../../../../Model/Vacation";
import "./AddVacation.css";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";
// import advancedFormat from "dayjs/plugin/advancedFormat";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVacation } from "../../../../Redux/Vacations/actions/vacationActions";
import axios from "axios";
import { useForm } from "react-hook-form";

function AddVacation(): JSX.Element {
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  // dayjs.extend(advancedFormat);

  const handleAddingVacation = () => {
    // Dispatch adding a vacation
    dispatch(
      addVacation(destination, description, startDate, endDate, price, img)
    );
  };

  // Make API request using Axios
  axios
    .post("http://localhost:8080/addVacation", {
      destination,
      description,
      startDate,
      endDate,
      price,
      img,
    })
    .then((response) => {
      // Handle successful login
      console.log("Added Vacation successfully", response.data);

      // Determine the user's role (Admin or regular User) based on the response data
      const { role } = response.data;

      if (role === "Admin") {
        navigate("/myVacations/admin");
      } else if (role === "User") {
        navigate("/userHomePage");
      }
    })
    .catch((error) => {
      // Handle adding vacation error
      console.log("Adding the vacation failed...", error.response.data);
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Vacation>({
    // defaultValues: async ():AsyncDefaultValues<Vacation> =>
    //   await fetch(`http://localhost:8080/vacations/getVacation/${vacationId}`),
  });

  // Handle once the data was sent to me:
  const send = (vacationData: Vacation) => {
    console.log(vacationData);
  };
  {
    /*  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Vacation>();

  const send = (userData: Vacation) => {
    let vacations: Vacation[] = [];
    console.log(userData);
    // const vacationIdentifier = userData.
    // axios.get().then(response)=>{}
  };
*/
  }
  return (
    <div className="AddVacation">
      <Box className="NavBar" style={{ padding: 5, marginTop: 5 }}>
        <NavLink to="/adminHomePage">Home Page</NavLink> •{" "}
        <NavLink to="/logout">Logout</NavLink> •{" "}
        <NavLink to="/about">About Us</NavLink>
      </Box>
      <hr className="hrMenu" />
      <div className="EditVacation Box" style={{ marginTop: 50 }}>
        <Typography variant="h4" className="HeadLine">
          Add New Vacation
        </Typography>
        <hr />
        <form onSubmit={handleSubmit(send)}>
          <FormControl style={{ margin: 10, width: 230 }} required>
            <InputLabel
              htmlFor="destination"
              required
              sx={{ marginLeft: "-15px", fontSize: "15px" }}
            >
              Destination
            </InputLabel>
            <Input
              type="text"
              id="destination"
              aria-describedby="my-helper-text"
              required
              // onChange={(event) => setDestination(event.target.value)}
              {...register("destination", {
                required: {
                  value: true,
                  message: "Please insert your destination",
                },
                minLength: {
                  value: 2,
                  message: "Your destination name is too short...",
                },
              })}
            />
          </FormControl>
          <br />
          <span className="ErrMsg">{errors.destination?.message}</span>
          <br />
          <FormControl style={{ margin: 10, width: 230 }} required>
            <InputLabel
              htmlFor="description"
              required
              sx={{ marginLeft: "-15px", fontSize: "15px" }}
            >
              Description
            </InputLabel>
            <Input
              type="text"
              id="description standard-multiline-static"
              aria-describedby="my-helper-text"
              required
              multiline
              rows={2.5}
              onChange={(event) => setDescription(event.target.value)}
              // {...register("description", {
              //   required: { value: true, message: "Please enter description" },
              //   min: { value: 50, message: "Your description is too short..." },
              // })}
            />
          </FormControl>
          <br />
          <span className="ErrMsg">{errors.description?.message}</span>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker"]}
              sx={{ width: 230, marginLeft: "auto", marginRight: "auto" }}
            >
              <DatePicker
                label="Start Date"
                disablePast={true}
                // value={startDate}
                // onChange={(event) => setStartDate(event.target.value)}
                // {...register("startDate", {
                //   required: {
                //     value: true,
                //     message: "You haven't picked a start date...",
                //   },
                //   /////// Make Validation that the date
                //   /////// will not be in the past
                //   min: {
                //     value: 50,
                //     message: "Your start date has already passed...",
                //   },
                // })}
              />
            </DemoContainer>
          </LocalizationProvider>
          <br />
          <span className="ErrMsg">{errors.startDate?.message}</span>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker"]}
              sx={{ width: 230, marginLeft: "auto", marginRight: "auto" }}
            >
              <DatePicker
                label="End Date"
                disablePast={true}
                // minDate={
                //   startDate ? dayjs(startDate).add(1, "day").toDate() : null
                // }
                // onChange={(event) => setEndDate(event.target.value)}
                // {...register("endDate", {
                //   required: {
                //     value: true,
                //     message: "You haven't picked end date...",
                //   },
                //   /////// Make Validation that the date
                //   /////// will not be in the past or
                //   /////// before the start date
                //   min: {
                //     value: 50,
                //     message: "Your end date has already passed...",
                //   },
                //   max: {
                //     value: 52,
                //     message: "Your end date can't be before the start date...",
                //   },
                // })}
              />
            </DemoContainer>
          </LocalizationProvider>
          <br />
          <span className="ErrMsg">{errors.endDate?.message}</span>
          <br />
          <FormControl style={{ width: 230 }} variant="outlined">
            <InputLabel
              required
              htmlFor="price"
              sx={{ fontSize: "19px", marginLeft: "-15px" }}
            >
              Price
            </InputLabel>
            <Input
              required
              id="price"
              // onChange={(event) => setPrice(+event.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              {...register("price", {
                required: {
                  value: true,
                  message: "You have to insert the vacation price",
                },
                min: { value: 1, message: "The price can't be empty" },
                max: { value: 5, message: "That's a lot of money dude... 🧐" },
              })}
            />
          </FormControl>

          <br />
          <span className="ErrMsg">{errors.price?.message}</span>
          <br />

          <FormControl
            style={{ width: 200, marginRight: "30px" }}
            variant="outlined"
          >
            <InputLabel
              required
              htmlFor="img"
              sx={{ marginLeft: "-15px", fontSize: "15px" }}
            >
              Choose cover image
            </InputLabel>
            <TextField
              sx={{
                marginBottom: "20px",
                width: "230px",
                marginTop: "40px",
              }}
              id="img"
              type="file"
              variant="standard"
              required
              onChange={(event) => setImg(event.target.value)}
            />
          </FormControl>

          <br />
          <span className="ErrMsg">{errors.img?.message}</span>
          <br />

          <Button fullWidth variant="contained" color="primary">
            Add Vacation
          </Button>
          <br />
          <br />
          <Button fullWidth variant="outlined" color="error">
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddVacation;
