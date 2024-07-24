import { MailOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
// import notify from "../../Utils/Notify/Notify";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/Auth/actions/authActions";
import "./Login.css";
import axios from "axios";

function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dispatch login action
    dispatch(login(email, password));

    // Make API request using Axios
    axios
      .post("http://localhost:8080/login", {
        email,
        password,
      })
      .then((response) => {
        // Handle successful login
        console.log("Login successful", response.data);

        // Determine the user's role (Admin or regular User) based on the response data
        const { role } = response.data;

        // Navigate to the desired page based on the user's role
        if (role === "Admin") {
          navigate("/adminHomePage");
        } else if (role === "User") {
          navigate("/userHomePage");
        }
      })
      .catch((error) => {
        // Handle login error
        console.log("Login failed", error.response.data);
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="Login">
      <Box className="NavBar" style={{ padding: 5, marginTop: 5 }}>
        <NavLink to="/about">About Us</NavLink>
      </Box>
      <hr className="hrMenu" />
      <div className="Login Box" style={{ marginTop: 100 }}>
        <Typography variant="h4" className="HeadLine">
          Login
        </Typography>
        <hr />
        <br />
        <FormControl>
          <InputLabel htmlFor="email" required>
            Email address
          </InputLabel>
          <Input
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
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard" required>
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
        <br /> <br />
        <ButtonGroup variant="contained" fullWidth>
          <Button color="primary" onClick={handleLogin} type="submit">
            Login
          </Button>
          {/* <Button
          color="primary"
          onClick={() => {
            notify.success("You have logged in successfully!");
          }}
        >
          Login
        </Button> */}
        </ButtonGroup>
        <p>
          Don't have account? <br />
          <Button sx={{ fontSize: 12 }} onClick={() => navigate("/register")}>
            register now!
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Login;
