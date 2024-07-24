import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./EditVacation.css";
import Vacation from "../../../../Model/Vacation";
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
import {
  AttachMoney,
  CalendarMonthTwoTone,
  FlightTakeoff,
  ImageOutlined,
  NoteAltTwoTone,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function EditVacation(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const tempVacation = new Vacation(
    "destination",
    "na",
    new Date(),
    new Date(),
    300,
    "na",
    1
  );

  const vacationId = 2;

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

  return (
    <div className="EditVacation">
      <Box className="NavBar" style={{ padding: 5, marginTop: 5 }}>
        <NavLink to="/adminHomePage">Home Page</NavLink> •{" "}
        <NavLink to="/logout">Logout</NavLink> •{" "}
        <NavLink to="/about">About Us</NavLink>
      </Box>
      <hr className="hrMenu" />
      <div className="EditVacation Box" style={{ marginTop: 15 }}>
        <Typography variant="h4" className="HeadLine">
          Edit Vacation
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

          <FormControl
            style={{ margin: 10, width: 230, marginTop: "-10px" }}
            required
          >
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
              rows={1.5}
              {...register("description", {
                required: { value: true, message: "Please enter description" },
                min: { value: 50, message: "Your description is too short..." },
              })}
              // onChange={(event) => setDescription(event.target.value)}
            />
          </FormControl>

          <br />
          <span className="ErrMsg">{errors.description?.message}</span>
          <br />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker"]}
              sx={{
                width: 230,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "-10px",
              }}
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

          {/* /////// CHECK ABOUT ///////*/}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker"]}
              sx={{
                width: 230,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "-20px",
              }}
            >
              <DatePicker
                label="End Date"
                disablePast={true}

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

          <FormControl
            style={{ width: 230, marginTop: "-10px" }}
            variant="outlined"
          >
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
            style={{ width: 200, marginRight: "30px", marginTop: "-10px" }}
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
              {...register("img", {
                required: {
                  value: true,
                  message: "You have to import image",
                },
              })}
              // onChange={(event) => setImg(event.target.value)}
            />
          </FormControl>

          <br />
          <span className="ErrMsg">{errors.img?.message}</span>
          <br />

          <Button fullWidth variant="contained" color="primary" type="submit">
            Update Vacation
          </Button>
          <br />
          <Button
            fullWidth
            variant="outlined"
            color="error"
            type="reset"
            style={{ marginTop: 5 }}
          >
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditVacation;
