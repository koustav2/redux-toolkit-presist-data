import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const items = useSelector((state) => state.cart.cartItems);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div
        style={{
          display: 'flex',
          gap: '5px',
        }}
      >
        <Link
          style={{
            textDecorationLine: 'none',
            color: 'blueviolet',
          }}
          className="navLink"
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            textDecorationLine: 'none',
            color: 'blueviolet',
          }}
          className="navLink"
          to="/cart"
        >
          Cart
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
};
export default NavBar;
