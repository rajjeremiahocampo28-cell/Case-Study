import React, { useState } from "react";
import "./App.css";
import ProductList from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  return (
    <div className="container">

      <h1>⌚ Products</h1>

      {!showCheckout ? (
        <>
          <ProductList addToCart={addToCart} />
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            proceedToCheckout={() => setShowCheckout(true)}
          />
        </>
      ) : (
        <Checkout
          cart={cart}
          clearCart={clearCart}
          goBack={() => setShowCheckout(false)}
        />
      )}
    </div>
  );
}

export default App;
