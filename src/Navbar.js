import { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar" style={styles.nav}>
          <div className="app-title">
            <h1 style={styles.title}>MovieFlix</h1>
          </div>
          <div className="cart" style={styles.cartIconContainer}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
              alt="cart-icon"
              style={styles.cartIcon}
            />
            <span className="cart-count" style={styles.cartCount}>
              0
            </span>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  cartIcon: {
    height: 48,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginLeft: 20,
  },

  cartIconContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
};
