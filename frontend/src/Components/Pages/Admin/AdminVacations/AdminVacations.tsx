import { useState } from "react";
import Vacation from "../../../../Model/Vacation";
import SingleVacationAdmin from "../../Vacations/SingleVacation/SingleVacationAdmin/SingleVacationAdmin";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function AdminVacations(): JSX.Element {
  const [vacation, setVacation] = useState<Vacation[]>([]);

  return (
    <div className="AdminVacations">
      <Box className="NavBar" style={{ padding: 5, marginTop: 5 }}>
        <NavLink to="/adminHomePage">Home Page</NavLink> •{" "}
        <NavLink to="/logout">Logout</NavLink> •{" "}
        <NavLink to="/about">About Us</NavLink>
      </Box>
      <hr className="hrMenu" />
      <div className="Box">
        {vacation.map((item) => (
          <SingleVacationAdmin key={item.vacationId} vacationData={item} />
        ))}
      </div>
    </div>
  );
}

export default AdminVacations;
