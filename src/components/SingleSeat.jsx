import { React, Component } from "react";
import { connect } from "react-redux";
import "./ticket.css";
class Ticket extends Component {
  render() {
    return (
      <div
        // id={this.props.ghe.soGhe}
        style={{ display: "inline-block" }}
        className="ghe mr-2"
      ></div>
    );
  }
}

export default connect((state) => {
  return { ticket: state.ticket };
}, null)(Ticket);
