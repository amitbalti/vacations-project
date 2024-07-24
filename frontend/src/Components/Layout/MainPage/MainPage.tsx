import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../../Utils/Notify/Notify";
import "./MainPage.css";

function MainPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="MainPage">
      <h1>Welcome to your vacations page 🤩</h1>
    </div>
  );
}

export default MainPage;
