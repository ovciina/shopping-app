import React from "react";
import data from "../data";
import Product from "./Product";
import { Container, Row, Col } from "react-bootstrap";

export default function Products({ addToCart }) {
  return (
    <>
      <h1 className="text-center">Products</h1>
      <br></br>
      <Container>
        <Row>
          {data.map((product, idx) => (
            <Col md={4} key={idx}>
              <Product product={product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
