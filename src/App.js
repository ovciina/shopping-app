import React, { useState } from "react";
import Authentication from "./components/Authentication";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const AUTHENTICATION_PAGE = "authentication";
  const PRODUCTS_PAGE = "products";
  const CART_PAGE = "cart";

  const [page, setPage] = useState(AUTHENTICATION_PAGE);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const addToCart = (product) => {
    const productExists = cart.find((x) => x.id === product.id);
    if (productExists) {
      setCart(
        cart.map((x) =>
          x.id === product.id
            ? { ...productExists, qty: productExists.qty + 1 }
            : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const productExists = cart.find((x) => x.id === product.id);
    console.log("productExists", productExists);
    if (productExists.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id
            ? { ...productExists, qty: productExists.qty - 1 }
            : x
        )
      );
    }
  };

  const totalItemsCart = cart.reduce((sum, product) => sum + product.qty, 0);

  return (
    <div className="App">
      <Header
        navigateTo={navigateTo}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        cart={cart}
        totalItemsCart={totalItemsCart}
      />
      {page === AUTHENTICATION_PAGE && (
        <Authentication setIsLoggedIn={setIsLoggedIn} navigateTo={navigateTo} />
      )}
      {page === PRODUCTS_PAGE && <Products addToCart={addToCart} />}
      {page === CART_PAGE && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
      <Footer />
    </div>
  );
}

export default App;
