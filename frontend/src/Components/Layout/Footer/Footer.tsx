import Clock from "../../Pages/Clock/Clock";
import "./Footer.css";

function Footer(): JSX.Element {
  return (
    <div className="Footer">
      <h3>
        &copy; All rights reserved to Amit Balteriski |{" "}
        <span>{new Date().getFullYear()}</span>
      </h3>
    </div>
  );
}

export default Footer;
