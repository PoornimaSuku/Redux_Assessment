import React, { Component } from "react";
import Modal from "./Modal";
import Button from "./Button";

export default class DisplayCard extends React.Component {
  constructor(props) {
    super(props);

    this.saveDetails = this.saveDetails.bind(this);
  }

  deleteItem=(event)=> {
    this.props.Bondel(event);
  }
  editItem(event) {
    this.props.Bonedit(event);
  }
  saveDetails(item) {
    this.props.BsaveDetails(item);
  }
  render() {
    const brochure = this.props.list.map((item, index) => {
      return (
        <div style={{ textAlign: "left" }}>
          <div class="list-group">
            <a
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <p class="mb-1">{item}</p>
              <div style={{ textAlign: "end" }}>
                <div
                  className="col-sm-8"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <Button
                    label3={this.props.Content.label3}
                    ButtonItem={() => this.editItem(index)}
                  />
                </div>{" "}
                <div>
                  <Button
                    
                    label3={this.props.Content.label4}
                    ButtonItem={()=>this.deleteItem(index)}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    });

    const requiredItem = this.props.requiredItem;
    let modalData = this.props.list[requiredItem];
    return (
      <div>
        <div class="col-sm-3 container" style={{ textAlign: "center" }}>
          <div class="card">
            <div class="card-body">
              <p class="card-text">{brochure}</p>
            </div>
          </div>
        </div>

        <Modal msg={modalData} saveDetails={this.saveDetails} />
      </div>
    );
  }
}
