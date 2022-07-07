import { React, Component } from "react";
import { connect } from "react-redux";
import "./ticket.css";
import data from "../data/danhSachGhe.json";
import SingleSeat from "./SingleSeat";
class Seat extends Component {
  render() {
    console.log(this.props);
    const { danhSachGhe } = data[1];

    return (
      <div className="w-75 mx-auto mt-3">
        <table>
          <thead>
            <tr>
              <th></th>
              {danhSachGhe.map((ele, index) => {
                return (
                  <th className="mr-2 text-light text-center">{index + 1}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              if (index == 0) return false;
              const { danhSachGhe, hang } = item;
              return (
                <tr key={index}>
                  <td
                    style={{ marginRight: "1rem", display: "inline-block" }}
                    className=" text-light"
                  >
                    {hang}
                  </td>
                  {danhSachGhe.map((ghe, index) => {
                    const { soGhe } = ghe;
                    return (
                      <td key={index}>
                        <SingleSeat ghe={ghe} soGhe={soGhe} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect((state) => {
  return { ticket: state.ticket };
}, null)(Seat);
