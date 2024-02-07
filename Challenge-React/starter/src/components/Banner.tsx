import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="header">
        <div className="desc">
          <p>SUMMER VACATION</p>
          <h1>Nomad nation</h1>
          <button className="btn">Read more</button>
        </div>
      </div>
    );
  }
}
