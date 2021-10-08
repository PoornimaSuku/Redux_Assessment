import React, { Component } from "react";
import content from "../mock/mock";
import Button from "./Button";
// import "./styles/Popup.css";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      msg: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      msg: nextProps.msg,
    });
  }

  msgHandler=(e)=> {
    this.setState({ msg: e.target.value });
  }

  handleSave() {
    const item = this.state.msg;
    this.props.saveDetails(item);
  }
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div
              className="modal-content"
              style={{ backgroundColor: "rgb(138,206,218)" }}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit todo
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* <p><span className="modal-lable">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p> */}
                <p>
                  <span className="modal-lable">Msg:</span>
                  <input
                    value={this.state.msg}
                    name="msg"
                    id="msg"
                    onChange={this.msgHandler}
                  />
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="close"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="save"
                  data-dismiss="modal"
                  onClick={
                    this.handleSave}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
