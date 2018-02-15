import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Box extends Component {
  
  render () {
      const colors = this.props.colors.map((color, index) => (
        <li key={index}>{color}</li>
      ));
    return (
      <div className="box"> 
        <ul>
        { colors }
        </ul>
      </div>
    ); 
  }
}

export default Box;