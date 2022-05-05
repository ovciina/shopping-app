import React from "react";
import Product from "./Product";
import { Container, Row, Col } from "react-bootstrap";

export default function Cart({ cart, removeFromCart }) {
  return (
    <>
      <h1 className="text-center">Cart</h1>
      <br></br>
      <Container>
        <Row className="justify-content-center">
          {!cart.length && <h3 className="text-center">No items in cart!</h3>}
          {cart.map((product, idx) => (
            <Col md={4} key={idx}>
              <Product product={product} removeFromCart={removeFromCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
