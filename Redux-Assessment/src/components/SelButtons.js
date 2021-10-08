import React from "react";

// import { connect } from 'react-redux';

export default class Button extends React.Component {
  Rchange(event) {
    // var x = event.target.value
    this.props.hanonChange(event);
  }
  render() {
    let data = this.props.data;
    let label = this.props.name;
    return (
      <div>
        <label >{label} </label>
        <select
          onChange={(event) => {
            this.Rchange(event);
          }}
        >
          {data.map((x, key) => {
            return <option key={key}>{x.ability.name}</option>;
          })}
        </select>
      </div>
    );
  }
}
