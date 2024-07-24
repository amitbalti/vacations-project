import { useState } from "react";
import "./UserVacations.css";
import SingleVacationUser from "../../Vacations/SingleVacation/SingleVacationUser/SingleVacationUser";
import Vacation from "../../../../Model/Vacation";
import { Pagination, Stack } from "@mui/material";

function UserVacations(): JSX.Element {
  const [vacation, setVacation] = useState<Vacation[]>([]);

  return (
    <div className="UserVacations">
      <Stack spacing={2}>
        <Pagination
          count={10}
          style={{ marginRight: "auto", marginLeft: "auto", marginTop: 10 }}
        />
        <div
          className="Box"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          {vacation.map((item) => (
            <SingleVacationUser key={item.vacationId} vacationData={item} />
          ))}
        </div>
      </Stack>
    </div>
  );
}

export default UserVacations;
