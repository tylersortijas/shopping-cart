import React from "react";

function Checkout(props) {
  const { cartItems, onAdd, onRemove, setCartClicked } = props;

  const itemsPrice = cartItems.reduce(
    (sum, current) => sum + current.price * current.qty,
    0
  );

  const taxPrice = itemsPrice * 0.1;

  const totalPrice = itemsPrice + taxPrice;

  return (
    <div className="checkout-container">
      <div className="checkout-header">
      <h2>Cart Items {cartItems.length}</h2>  
      <span onClick={() => {setCartClicked(false)}} className="cart-exit-button">X</span>
      </div>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-content">
          <div>{item.name}</div>
          <div>
            <button onClick={() => onAdd(item)}>+</button>
            <button onClick={() => onRemove(item)}>-</button>
          </div>
          <div>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="item-price">
            <div>Items Price</div>
            <div>${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="tax-price">
            <div>Tax Price</div>
            <div>${taxPrice.toFixed(2)}</div>
          </div>
          <div className="total-price">
            <div>Total Price</div>
            <div>${totalPrice.toFixed(2)}</div>
          </div>
        </>
      )}
      <>
        <hr></hr>
        <button>Checkout</button>
        <p>
          {" "}
          *Disclaimer* We are not responsible for you wallet going negative.
        </p>
      </>
    </div>
  );
}

export default Checkout;
