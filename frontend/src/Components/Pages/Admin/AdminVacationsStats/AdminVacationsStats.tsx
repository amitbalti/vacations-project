import { Box } from "@mui/material";
import "./AdminVacationsStats.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import { NavLink } from "react-router-dom";

const data = [
  {
    destination: "Tokoy",
    amountOfLikes: 4000,
  },
  {
    destination: "Tel Aviv",
    amountOfLikes: 3000,
  },
  {
    destination: "Amsterdam",
    amountOfLikes: 2000,
  },
  {
    destination: "New York",
    amountOfLikes: 2780,
  },
  {
    destination: "Vancouver",
    amountOfLikes: 1890,
  },
  {
    destination: "Manchester",
    amountOfLikes: 2390,
  },
  {
    destination: "Dublin",
    amountOfLikes: 3490,
  },
];
function AdminVacationsStats(): JSX.Element {
  return (
    <div className="AdminVacationsStats">
      <Box className="NavBar" style={{ padding: 5, marginTop: 5 }}>
        <NavLink to="/adminHomePage">Home Page</NavLink> •{" "}
        <NavLink to="/logout">Logout</NavLink> •{" "}
        <NavLink to="/about">About Us</NavLink>
      </Box>
      <hr className="hrMenu" />
      <BarChart
        className="Box"
        width={730}
        height={250}
        data={data}
        margin={{ top: 25, right: 30, left: 20, bottom: 15 }}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
          padding: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="destination"
          // dataKey=destination
        >
          <Label value="Destination" offset={0} position="bottom" />
        </XAxis>
        <YAxis
          label={{
            value: "Amount of Likes",
            angle: -90,
            position: "insideBottomLeft",
          }}
        />
        <Bar
          dataKey="amountOfLikes"
          // dataKey=amountOfLikes
          fill="#8884d8"
        >
          <LabelList
            dataKey="amountOfLikes"
            //   dataKey=destination
            position="top"
          />
        </Bar>
      </BarChart>
    </div>
  );
}

export default AdminVacationsStats;
