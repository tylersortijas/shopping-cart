import { React, useState } from "react";
import cars from "../carsData.js";
import Checkout from "./Checkout.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const [cartClicked, setCartClicked] = useState(false);

  const onAdd = (car) => {
    const exist = cartItems.find((x) => x.id === car.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === car.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...car, qty: 1 }]);
    }
  };

  const onRemove = (car) => {
    const exist = cartItems.find((x) => x.id === car.id);
    if (exist) {
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== car.id));
      }
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === car.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const carItems = cars.map((car) => (
    <div key={car.id} id={car.id} className="card-container">
      <img src={car.image} alt="car" />
      <div className="car-information">
        <h2>{car.name}</h2>
        <p>{car.description}</p>
        <p>${car.price.toFixed(2)}</p>
        <button onClick={() => onAdd(car)}>Purchase</button>
      </div>
    </div>
  ));

  return (
    <div>
      <div
        onClick={() => {
          setCartClicked(!cartClicked);
        }}
        className="cart-container"
      >
        <FontAwesomeIcon icon={faBagShopping} />
        <div>
          {cartItems.length !== 0 && (
            <div className="cart-length">{cartItems.length}</div>
          )}
        </div>
      </div>
      <div>
        {cartClicked ? (
          <Checkout cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} setCartClicked={setCartClicked} />
        ) : null}
      </div>
      <div className="shop-container">
        <div className="breadcrumb">
          <ul>
            <li>HOME</li>
            <li>/</li>
            <li>
              <span className="model-shop-breadcrumb">MODELS</span>
            </li>
          </ul>
        </div>
        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_hero_01.jpg"
          alt="lamborghini-revuelto"
          className="shop-background-image"
        ></img>
        <div className="shop-title">
          <h2>Lamborghini</h2>
          <h1>Models</h1>
        </div>
        <div className="car-container">{carItems}</div>
      </div>
    </div>
  );
}

export default Shop;
