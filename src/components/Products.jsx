import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../public/redux/slice/cartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="productsWrapper">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
          <h5>Price: {item.price}</h5>
          <button onClick={() => handleAdd(item)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
