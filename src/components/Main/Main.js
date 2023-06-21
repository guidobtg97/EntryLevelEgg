import "./main.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

const Main = (props) => {
  console.log();
  return (
    <main>
      <div className="main-content">
        <h1>
          ¡Te damos la bienvenida a tu <br />
          comunidad profesional
          <br />
          de principantes!
        </h1>
        <Login />
      </div>
      <div className="main-svg">
        <img src="../assets/main.svg" alt="main.svg" />
      </div>
    </main>
  );
};

export default Main;
