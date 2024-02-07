import React, { Component } from "react";

type Props = {};

type State = {};

export default class Details2 extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="desc-img">
        <div className="text">
          <p className="red-txt">About</p>
          <h2>Popular Adventure</h2>
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
            src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    );
  }
}
