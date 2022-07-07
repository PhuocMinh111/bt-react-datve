import { React, Component } from "react";
import { connect } from "react-redux";
import "./ticket.css";
class Form extends Component {
  state = {
    name: "",
    seat: 0,
  };
  handleSumbmit = (e) => {
    e.preventDefault();
    this.props.handleForm(this.state.name, this.state.seat);
  };

  render() {
    console.log(this.props);

    return (
      <div id="form" onSubmit={this.handleSumbmit} className="w-75">
        <h6 style={{ color: "#F87424" }} className="text-left">
          Fill The Required Details Below And Select Your Seats
        </h6>
        <form className="row w-md-75  ">
          <div className="col-md-12">
            <h6 className="text-right text-light">
              Number of Seats
              <span className="text-danger">*</span>
            </h6>
          </div>

          <div className="col-8 text-light">
            <div className="row">
              <div className="col-2">
                <label
                  for="inputName"
                  style={{ display: "inline-block" }}
                  className="col-2 col-form-label ml-auto"
                >
                  Name <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-10">
                <textarea
                  style={{ display: "inline-block", background: "transparent" }}
                  row="3"
                  col="8"
                  type="text"
                  name=""
                  id="inputName"
                  value={this.state.name}
                  onChange={(e) =>
                    this.setState({ ...this.state, name: e.target.value })
                  }
                  className="text-light form-control "
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <input
              style={{ display: "inline-block", background: "transparent" }}
              type="number"
              name=""
              id=""
              value={this.state.seat}
              onChange={(e) =>
                this.setState({ ...this.state, seat: e.target.value })
              }
              className="text-light form-control mr-auto"
            />
          </div>
          <div className="col-md-12 ">
            <button
              type="submit"
              style={{ background: "" }}
              className="btn btn-light text-dark text-light mt-5 d-flex justify-content-start"
            >
              Start Selecting
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const disPatchToProps = function (dispatch) {
  return {
    handleForm: (seat, userName) => {
      dispatch({
        type: "FORM_HANDLE",
        payload: { seatNum: seat, userName: userName },
      });
    },
  };
};
export default connect((state) => {
  return { ...state.ticket };
}, disPatchToProps)(Form);
