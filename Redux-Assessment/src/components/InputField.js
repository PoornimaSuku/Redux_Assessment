import React, { Component } from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemInput: "",
      data: [],
      count: 0,
    };
  }

  handleSubmit = (event)=>{ {
    this.props.onSubmit(event);
 
  }}
  

  render() {
    return (
      <div className="create-new">
        <form class="example" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id='msg'
            className="Input"
            name="msg"
            placeholder="Please enter your task"
            
          />
          <button type="submit" id="submit" >
            Add
          </button>
        </form>
        
      </div>
    );
  }
}
