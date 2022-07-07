import { React, Component } from "react";
import { connect } from "react-redux";
import "./ticket.css";
class Ticket extends Component {
  state = {
    selected: false,
  };

  selectSeat = () => {
    this.setState({ selected: true });
  };

  render() {
    return (
      <button
        id={this.props.soGhe}
        style={{ display: "inline-block" }}
        className={
          this.state.selected ? "ghe mr-2 bg-success" : "ghe mr-2 bg-light"
        }
        onClick={this.selectSeat}
      ></button>
    );
  }
}

export default connect((state) => {
  return { ...state };
}, null)(Ticket);
