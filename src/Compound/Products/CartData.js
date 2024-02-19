import { useState } from 'react';

const loadDataFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
};

const useCartData = () => {
  const [cartData, setCartData] = useState(loadDataFromLocalStorage('cartData'));
  const [paymentMethod, setPaymentMethod] = useState(loadDataFromLocalStorage('paymentMethod') || null);

  const addToCart = (product) => {
    const existingProductIndex = cartData.findIndex((p) => p.name === product.name);

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update the quantity
      const updatedCartData = [...cartData];
      updatedCartData[existingProductIndex].quantity += product.quantity || 1;
      setCartData(updatedCartData);

      // Save updated cart data to localStorage
      localStorage.setItem('cartData', JSON.stringify(updatedCartData));
    } else {
      // Product does not exist in the cart, add it
      const updatedCartData = [...cartData, { ...product, quantity: product.quantity || 1 }];
      setCartData(updatedCartData);

      // Save updated cart data to localStorage
      localStorage.setItem('cartData', JSON.stringify(updatedCartData));
    }
  };

  const removeFromCart = (productName) => {
    const updatedCartData = cartData.filter((product) => product.name !== productName);
    setCartData(updatedCartData);
    localStorage.setItem('cartData', JSON.stringify(updatedCartData));
  };

  const addPaymentMethod = (method) => {
    setPaymentMethod(method);
    localStorage.setItem('paymentMethod', JSON.stringify(method));
  };

  return {
    cartData,
    addToCart,
    removeFromCart,
    paymentMethod,
    addPaymentMethod
  };
};

export default useCartData;
