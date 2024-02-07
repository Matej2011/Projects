import React, { Component } from "react";

type Props = {};

type State = {};

export default class Details extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="desc-img">
        <div className="text">
          <p className="red-txt">About</p>
          <h2>Stories of Adventure</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            quibusdam quae perferendis. Nemo vero deserunt et praesentium, ipsa,
            corrupti veniam aliquid maiores id recusandae accusantium eligendi
            nihil natus consectetur quae assumenda ex impedit atque labore
            sapiente ipsam, modi doloremque. Doloremque.
          </p>
        </div>
        <div className="image">
          <img
            src="https://img.freepik.com/premium-photo/beautiful-landscape-based-3d-rendering-illustration_771975-25.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    );
  }
}
