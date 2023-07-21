import { Component } from "react";
import MovieCards from "./MovieCards";

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "This is movie about supernatural powers of heroes...",
      price: 299,
      rating: 8.9,
      stars: 0,
      fav: false,
      cart: false,
    };
    // this.addStars = this.addStars.bind(this);
  }

  render() {
    return (
      <>
        <MovieCards movies={this.state} />
      </>
    );
  }
}
