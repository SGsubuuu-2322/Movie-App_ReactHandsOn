import React from "react";

class MovieCards extends React.Component {
  addStars = () => {
    // Type-1:
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });

    // Type-2:
    this.setState(
      (prevState) => {
        if (prevState.stars < 10) {
          return {
            stars: prevState.stars + 0.5,
          };
        }

        return;
      }
      // () => console.log("Inside the setState - Stars: ", this.state.stars)
    );

    // console.log("Outside the setState - Stars: ", this.state.stars);
  };

  minusStars = () => {
    this.setState((prevState) => {
      if (prevState.stars > 0) {
        return {
          stars: prevState.stars - 0.5,
        };
      }
    });
  };

  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };
  handleCart = () => {
    this.setState({
      cart: !this.state.cart,
    });
  };

  render() {
    // for changing props data names...
    // const { movies: data } = this.props; 
    const { title, plot, price, rating, stars, fav, cart } = this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
              alt="Movie Poster"
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                  alt="decrease"
                  className="str-btn"
                  onClick={this.minusStars}
                />

                <img
                  src="https://cdn-icons-png.flaticon.com/128/616/616490.png"
                  alt="stars"
                  className="stars"
                />

                <img
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  alt="increase"
                  className="str-btn"
                  onClick={this.addStars}
                  // this.addStars.bind(this)
                />
                <span className="starCount">{stars}</span>
              </div>
              {/* {this.state.fav ? (
                <button className="unfavourite-btn" onClick={this.handleFav}>
                  Un-favourite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favourite
                </button>
              )} */}

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.handleFav}
              >
                {fav ? "Un-favourite" : "Favourite"}
              </button>

              <button
                className={cart ? "unfavourite-btn" : "cart-btn"}
                onClick={this.handleCart}
              >
                {cart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCards;
