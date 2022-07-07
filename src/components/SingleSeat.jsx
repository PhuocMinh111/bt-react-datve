import { React, Component } from "react";
import { connect } from "react-redux";
import "./ticket.css";
class Ticket extends Component {
  state = {
    selected: false,
  };

  selectSeat = (id) => {
    // if (this.props.seatPicked > this.props.seatNum) return;
    if (
      this.props.seatPicked.indexOf(id) != -1 &&
      this.props.seatPicked.length > 1
    )
      return;
    this.props.addSeat(id);
    this.setState({ selected: !this.state.selected });
    console.log(this.props.seatPicked);
    // this.setState({ ...this.state, seats: [...this.state.seats, id] });
  };

  render() {
    return (
      <button
        id={this.props.soGhe}
        disabled={this.props.canSelect}
        style={{ display: "inline-block" }}
        className={
          this.state.selected ? "ghe mr-2 bg-success" : "ghe mr-2 bg-light"
        }
        onClick={() => this.selectSeat(this.props.soGhe)}
      ></button>
    );
  }
}

const disPatchToProps = function (dispatch) {
  return {
    addSeat: (seat) => {
      dispatch({ type: "ADD_SEAT", payload: seat });
    },
  };
};
export default connect((state) => {
  return { ...state };
}, disPatchToProps)(Ticket);
