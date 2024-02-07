import React, { Component } from "react";
import Place from "./Place";

type Props = {};

export interface PlaceType {
  id: number;
  place: string;
  desc: string;
  img: string;
}

type State = {
  places: PlaceType[];
};

export default class Places extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  componentDidMount(): void {
    fetch("http://localhost:5001/places")
      .then((res) => res.json())
      .then((places) => {
        this.setState({
          places: places,
        });
      });
  }

  render() {
    return (
      <div className="item">
        {this.state.places.map((place) => {
          return (
            <Place
              key={place.id}
              id={place.id}
              img={place.img}
              place={place.place}
              desc={place.desc}
            />
          );
        })}
      </div>
    );
  }
}
