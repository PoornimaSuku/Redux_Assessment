import React from "react";

export default class Button extends React.Component {
  buttonItem=(event)=> {
    this.props.ButtonItem(event);
  }

  render() {
    let label3 = this.props.label3;

    return (
      <div>
        <button className="btn btn-success" onClick={this.buttonItem}>
          {label3}
        </button>{" "}
      </div>
    );
  }
}
