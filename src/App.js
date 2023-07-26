import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesData";

export default class App extends Component {
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
    let { movies, cartCount } = this.state;
    const mId = movies.indexOf(movie);
    movies[mId].cart = !movies[mId].cart;
    if (movies[mId].cart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    this.setState({
      movies,
      cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.handleIncStars}
          minusStars={this.handleDecStars}
          favBtn={this.handleFav}
          cartBtn={this.handleCart}
        />
      </>
    );
  }
}
