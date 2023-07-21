import React from "react";

class MovieCards extends React.Component {
  // addStars = () => {
  //   // Type-1:
  //   // this.setState({
  //   //   stars: this.state.stars + 0.5,
  //   // });

  //   // Type-2:
  //   this.setState(
  //     (prevState) => {
  //       if (prevState.stars < 10) {
  //         return {
  //           stars: prevState.stars + 0.5,
  //         };
  //       }

  //       return;
  //     }
  //     // () => console.log("Inside the setState - Stars: ", this.state.stars)
  //   );

  //   // console.log("Outside the setState - Stars: ", this.state.stars);
  // };

  // minusStars = () => {
  //   this.setState((prevState) => {
  //     if (prevState.stars > 0) {
  //       return {
  //         stars: prevState.stars - 0.5,
  //       };
  //     }
  //   });
  // };

  // handleFav = () => {
  //   this.setState({
  //     fav: !this.state.fav,
  //   });
  // };
  // handleCart = () => {
  //   this.setState({
  //     cart: !this.state.cart,
  //   });
  // };

  render() {
    // for changing props data names...
    // const { movies: data } = this.props;
    const { title, plot, price, rating, stars, fav, cart, poster } =
      this.props.movies;
    const { movies, addStars, minusStars, favBtn, cartBtn } = this.props;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={poster} alt="Movie Poster" />
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
                  onClick={() => {
                    minusStars(movies);
                  }}
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
                  onClick={() => {
                    addStars(movies);
                  }}
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
                onClick={() => {
                  favBtn(movies);
                }}
              >
                {fav ? "Un-favourite" : "Favourite"}
              </button>

              <button
                className={cart ? "unfavourite-btn" : "cart-btn"}
                onClick={() => {
                  cartBtn(movies);
                }}
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
