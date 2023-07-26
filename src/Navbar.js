// Styling the component using styled-components...
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: #0f0;
  }
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.span`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export default function Navbar(props) {
  return (
    <>
      <Nav className="navbar">
        <Title className="app-title">MovieFlix</Title>
        <CartContainer className="cart">
          <CartIcon
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <CartCount className="cart-count" color="Yellow" show={true}>
            {props.cartCount}
          </CartCount>
        </CartContainer>
      </Nav>
    </>
  );
}
