import React from "react";
import content from "../mock/mock";
import Container from "../container/Container";
import Dropdown from "./Dropdown";

class Sys extends React.Component {
  render() {
    return (
      <div >
        <Container content={this.props.content} />
      </div>
    );
  }
}
Sys.defaultProps = {
  content: content,
};
export default Sys;
