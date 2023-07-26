import { Component } from "react";
import MovieCards from "./MovieCards";

export default class MovieList extends Component {
  render() {
    const { movies, addStars, minusStars, favBtn, cartBtn } = this.props;
    return (
      <>
        {movies.map((data) => {
          return (
            <MovieCards
              key={data.id}
              movies={data}
              addStars={addStars}
              minusStars={minusStars}
              favBtn={favBtn}
              cartBtn={cartBtn}
            />
          );
        })}
      </>
    );
  }
}
