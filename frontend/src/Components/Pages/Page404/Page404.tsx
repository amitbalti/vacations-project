import brain from "../../../assets/shockedBrain.png";
import "./Page404.css";

function Page404(): JSX.Element {
  return (
    <div
      className="Page404"
      //   style={{
      //     backgroundImage: `url(${brain})`,
      //     // backgroundRepeat: "no-repeat",
      //     backgroundSize: "cover",
      //     height: "570px",
      //   }}
    >
      <h1>404</h1>
      <h2>Oops... That page doesn't exist....</h2>

      {/* <img src={brain} className="brainImg" /> */}
    </div>
  );
}

export default Page404;
