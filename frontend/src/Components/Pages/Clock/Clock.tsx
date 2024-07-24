import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Clock.css";

function Clock(): JSX.Element {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="Clock">{currentTime}</div>;
}

export default Clock;
