import { Box, Button, ButtonGroup, Card, Grid, Stack } from "@mui/material";
import "./AdminPage.css";
import { NavLink, useNavigate } from "react-router-dom";

function AdminPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="AdminPage">
      <Box className="NavBar" style={{ padding: 5, marginTop: 5 }}>
        <NavLink to="/adminHomePage">Home Page</NavLink> •{" "}
        <NavLink to="/logout">Logout</NavLink> •{" "}
        <NavLink to="/about">About Us</NavLink>
      </Box>
      <hr className="hrMenu" />
      <Box className="allAdminBox">
        <Card
          variant="outlined"
          className="AdminCard"
          onClick={() => {
            navigate("/myVacations/admin");
          }}
        >
          My Vacations
        </Card>
        <Card
          variant="outlined"
          className="AdminCard"
          onClick={() => {
            navigate("/addVacation");
          }}
        >
          Add Vacation
        </Card>
        <Card
          variant="outlined"
          className="AdminCard"
          onClick={() => {
            navigate("/vacationsReport");
          }}
        >
          My Vacations Stats
        </Card>
      </Box>
    </div>
  );
}

export default AdminPage;
