import React, { Component } from "react";
import { connect } from "react-redux";

export class Sumary extends Component {
  renderTable() {
    const { seatPicked, userName } = this.props;

    return (
      <tr>
        <th scope="row">1</th>
        <td>{userName}</td>
        <td>
          {seatPicked.reduce((seat, item, index) => {
            return (seat += item + ", ");
          }, "")}
        </td>
        <td>
          {seatPicked.reduce((price, item, index) => {
            return (price += index * 75000);
          }, 0)}
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table style={{ background: "white" }} className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>{this.props.isSubmit && this.renderTable()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sumary);
