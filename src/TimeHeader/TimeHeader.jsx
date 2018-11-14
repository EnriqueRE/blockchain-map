import React, { Component } from 'react';
import './TimeHeader.css';

export class TimeHeader extends Component {
  render() {
    return (
      <div className="col-md-8 offset-md-4 time-header">
        <strong>Today is: {this.getDate()}</strong>
      </div>
    );
  }

  getDate() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    return today.toLocaleDateString("en-US", options);
  }
}
