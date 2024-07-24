import { useEffect } from "react";
import MainRouter from "../../Routes/MainRouter/MainRouter";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
  useEffect(() => {
    // store.dispatch(VacationDownloadedAction(JSON.parse(localStorage.getItem("vacations"))))
  }, []);
  return (
    <div className="MainLayout">
      <header>
        <Header />
      </header>
      <main>
        <MainRouter />
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default MainLayout;
