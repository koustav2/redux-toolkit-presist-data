import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../public/redux/slice/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItems);

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const totalPrice = products.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((item) => (
          <div key={item.id} className="cartCard">
            <img src={item.image} alt="" />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <h4>{totalPrice}</h4>
    </div>
  );
};

export default Cart;
