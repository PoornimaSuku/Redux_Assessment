import React, { Component } from "react";
import { Redirect } from "react-router";
import DisplayCard from "./DisplayCard.js";
import Input from "./InputField.js";
import content from "../mock/mock";
import "./styles/Input.css";

class List extends Component {
  constructor(props) {
    super(props);

    this.editItem = this.editItem.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
    this.state = {
      requiredItem: 0,
      list: [
        `All changes are saved locally, automatically. 
         Drag this item onto another list (on the right) to transfer it.`,
      ],
    };
  }

  editItem=(index)=>{
    this.setState({
      requiredItem: index,
    });
  }

  saveDetails=(item)=> {
    const requiredItem = this.state.requiredItem;
    let templist = this.state.list;
    templist[requiredItem] = item;
    this.setState({ list: templist });
  }

  deleteItem=(index)=> {
    let templist = this.state.list;
    templist.splice(index, 1);
    this.setState({ list: templist });
  }
  handleSubmit = (event) => {
    var taskLen = event.target.elements.msg.value;
    if (taskLen.length > 0) {
      this.setState({
        list: [...this.state.list, taskLen],
      });
      event.target.reset();
    }
    event.preventDefault();
  };
  render() {
    return (
      <div style={{backgroundColor:'#f1181850'}}>
        <div style={{ marginLeft: 400 , backgroundColor:'#f1181850'}}>
          <div>
            <h1 className='todo'>Todo-List</h1>
          </div>
          <div >
            <Input onSubmit={this.handleSubmit} id="input" />
          </div>
          <br />
         
          <div >
            <DisplayCard
              id="button"
              list={this.state.list}
              Bonedit={this.editItem}
              Bondel={this.deleteItem}
              requiredItem={this.state.requiredItem}
              BsaveDetails={this.saveDetails}
              Content={this.props.content}
            />
          </div>
        </div>
      </div>
    );
  }
}
List.defaultProps = {
  content: content,
};

export default List;
