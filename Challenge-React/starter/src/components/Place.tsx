import React, { Component } from "react";
import { PlaceType } from "./Places";

type Props = PlaceType;

export default class Place extends Component<Props> {
  render() {
    return (
      <div key={this.props.id}>
        <img src={this.props.img} alt="" />
        <div className="place-desc">
          <h3>{this.props.place}</h3>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}
