import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header({
  navigateTo,
  isLoggedIn,
  setIsLoggedIn,
  cart,
  totalItemsCart,
}) {
  const navLinkAction = (selectedLink) => {
    if (selectedLink === "logout") {
      setIsLoggedIn(false);
      navigateTo("authentication");
    } else {
      navigateTo(selectedLink);
    }
  };

  return (
    <Navbar collapseOnSelect={true} expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">JO PadelStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          {isLoggedIn && (
            <Nav
              className="text-start"
              onSelect={(selectedLink) => navLinkAction(selectedLink)}
            >
              <Nav.Link eventKey="logout">Logout</Nav.Link>
              <Nav.Link eventKey="products">Products</Nav.Link>
              {
                <Nav.Link eventKey="cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  {totalItemsCart ? `(${totalItemsCart})` : ""}
                </Nav.Link>
              }
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
