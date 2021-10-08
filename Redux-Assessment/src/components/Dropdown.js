import React from "react";
import Buttons from "./SelButtons";
import Popup from "./Popup.js";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }
  // componentDidMount() {
  //   this.props.fetchabilities(this.props.content.pokemon[0].ability.name);
  // }

  changePokemon=(event)=>{ {
    var pokemon = event.target.value;
    console.log(pokemon);
    // this.setState({ isOpen: !this.state.isOpen });
    this.props.fetchabilities(pokemon);
  }
}
  togglePopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div style={{ marginLeft: 200 }}>
        <h1>{this.props.content.heading}</h1>
        <div className="dropdown">
          <Buttons
            id="button"
            className="first"
            data={this.props.content.pokemon}
            name={this.props.content.label1}
            hanonChange={this.changePokemon}
          />
        </div>
        <br />
        <br />
        <div>
          <Buttons data={this.props.res} name={this.props.content.label2} />
        </div>
        {this.props.error && this.state.isOpen && (
          <Popup
            content={
              <>
                <b>ERROR</b>
                <br />
                <hr />
                <br />
                <b>Might, need to check api call.</b>
              </>
            }
            handleClose={this.togglePopup}
          />
        )}
      </div>
    );
  }
}
