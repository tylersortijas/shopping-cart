import React from "react";
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import HomePage from "./components/Homepage.js";
import Shop from "./components/Shop.js";

function RouteSwitch() {
  return (
    <HashRouter>
      <>
        <nav className="nav-container">
          <div className="nav-container-left">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/themes/custom/lambo_facelift_2019/images/logo.png"
              alt="Lamborghini Logo"
            />
            <ul className="nav-links">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                <li>Home</li>
              </Link>
              <Link
                to="/shop"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                <li>Shop</li>
              </Link>
            </ul>
          </div>
        </nav>
      </>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
