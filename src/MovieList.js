import { Component } from "react";
import MovieCards from "./MovieCards";
import { movies } from "./moviesData";

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
    // this.addStars = this.addStars.bind(this);
  }

  handleIncStars = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);
    if (movies[mId].stars < 10) {
      movies[mId].stars += 0.5;
      this.setState({
        movies,
      });
    }

    return;
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);
    if (movies[mId].stars > 0) {
      movies[mId].stars -= 0.5;
      this.setState({
        movies,
      });
    }
    return;
  };

  handleFav = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);
    movies[mId].fav = !movies[mId].fav;
    this.setState({
      movies,
    });
  };
  handleCart = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);
    movies[mId].cart = !movies[mId].cart;
    this.setState({
      movies,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.map((data) => {
          return (
            <MovieCards
              key={data.id}
              movies={data}
              addStars={this.handleIncStars}
              minusStars={this.handleDecStars}
              favBtn={this.handleFav}
              cartBtn={this.handleCart}
            />
          );
        })}
      </>
    );
  }
}
