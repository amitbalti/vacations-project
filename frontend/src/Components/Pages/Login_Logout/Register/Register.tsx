import {
  Face,
  Group,
  MailOutline,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
// import notify from "../../../Utils/Notify/Notify";
import "./Register.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../../Redux/Auth/actions/authActions";
import axios from "axios";

function Register(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleAdminChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(event.target.checked);
    console.log("Are you an Admin?", event.target.checked);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterChange = () => {
    // Dispatch register action
    dispatch(register(firstName, surname, email, password, isAdmin));

    // Make API request using Axios
    axios
      .post("http://localhost:8080/register", {
        firstName,
        surname,
        email,
        password,
        isAdmin,
      })
      .then((response) => {
        // Handle successful registration
        console.log("Registration successfully", response.data);
        navigate("/");
      })
      .catch((error) => {
        // Handle registration error
        console.log("Registration failed", error.response.data);
      });
  };

  return (
    <div>
      <Box className="NavBar" style={{ padding: 5, marginTop: 5 }}>
        <NavLink to="/about">About Us</NavLink>
      </Box>
      <hr className="hrMenu" />
      <div className="Register Box" style={{ marginTop: 55 }}>
        <Typography variant="h4" className="HeadLine">
          Register
        </Typography>
        <hr />
        <br />
        <FormControl style={{ margin: 10 }} required>
          <InputLabel htmlFor="firstName" required>
            First Name
          </InputLabel>
          <Input
            type="text"
            id="firstName"
            aria-describedby="my-helper-text"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Face
                  style={{ fontSize: 35, marginBottom: 5, color: "purple" }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <FormControl style={{ margin: 10 }} required>
          <InputLabel htmlFor="surname" required>
            Surname
          </InputLabel>
          <Input
            type="text"
            id="surname"
            aria-describedby="my-helper-text"
            required
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Group
                  style={{ fontSize: 35, marginBottom: 5, color: "purple" }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <FormControl style={{ margin: 10 }} required>
          <InputLabel htmlFor="email" required>
            Email Address
          </InputLabel>
          <Input
            type="text"
            id="email"
            aria-describedby="my-helper-text"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <MailOutline
                  style={{ fontSize: 35, marginBottom: 5, color: "purple" }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="standard"
          style={{ margin: 10 }}
          required
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <br />
        <FormControlLabel
          style={{ color: "purple" }}
          label={"Are you an Admin?"}
          labelPlacement="top"
          control={<Checkbox checked={isAdmin} onChange={handleAdminChange} />}
        ></FormControlLabel>
        <br /> <br />
        <ButtonGroup variant="contained" fullWidth>
          <Button color="primary" onClick={handleRegisterChange}>
            Register
          </Button>
          {/* <Button
            color="primary"
            onClick={() => {
              notify.success("You have registered successfully!");
            }}
          >
            Register
          </Button> */}
        </ButtonGroup>
        <p>
          Already a member? <br />
          <Button
            onClick={() => {
              navigate("/");
            }}
            sx={{ fontSize: 12 }}
          >
            Login
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Register;
