import React from 'react';
import content from '../mock/mock';
import Dropdown from './Dropdown';

class Region extends React.Component {
  render() {
    return (
      <div>
        <Dropdown  Content = {this.props.Content}/>
      </div>
    )
  }
}
Region.defaultProps ={
  Content: content
}
export default Region;