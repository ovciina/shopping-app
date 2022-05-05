import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Product({ product, addToCart, removeFromCart }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}:-</Card.Text>
        {addToCart && (
          <Button onClick={() => addToCart(product)} variant="success">
            Add to Cart!
          </Button>
        )}
        {removeFromCart && (
          <Button onClick={() => removeFromCart(product)} variant="danger">
            Remove from Cart! ({product.qty})
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
