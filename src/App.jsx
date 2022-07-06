import "./index.css";
import Ticket from "./components/SingleSeat";
import Form from "./components/Form";
import Seat from "./components/Seat";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="App">
      <div className="text-center mt-3 text-light">
        <h1>MOVIE SEAT SELECTION</h1>
      </div>

      <div id="main" className="container mt-3">
        <Form />
        <div className="row mt-3 text-light">
          <div className="col-3 d-flex align-items-center">
            <span
              style={{
                background: "green",
                height: "30px",
                width: "30px",
                display: "inline-block",
              }}
              className="square mr-2"
            ></span>
            <small>Selected Seat</small>
          </div>
          <div className="col-3 d-flex align-items-center">
            <span
              style={{
                background: "red",
                height: "30px",
                width: "30px",
                display: "inline-block",
              }}
              className="square mr-2"
            ></span>
            <small>Reserved Seat</small>
          </div>
          <div className="col-3 d-flex align-items-center">
            <span
              style={{ height: "30px", width: "30px", display: "inline-block" }}
              className="square ghe mr-2"
            ></span>
            <small>Empty Seat</small>
          </div>
        </div>
        <Seat />
        <Ticket />
      </div>
    </div>
  );
}
