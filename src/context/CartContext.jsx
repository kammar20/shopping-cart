import { createContext, useContext, useMemo, useState } from 'react';
import { productList } from '../data/ProductData';

const CartContext = createContext(null);

export function useCart() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  // Add Item to the Cart or Increase quantity
  function addToCart(id, count = 1) {
    // if item already present in cart increase quantity by 1
    const selectedItem = cartItem.find((item) => item.id === id);
    if (selectedItem) {
      const updateCart = cartItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + count } : item
      );
      setCartItem(updateCart);
      // else add item to the cart
    } else {
      const selectedItem = productList.find((item) => item.id === id);
      setCartItem([...cartItem, { ...selectedItem, quantity: count }]);
    }
  }

  // Remove Item from Cart
  function removeItemFromCart(id) {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setCartItem(updateCart);
  }

  // Decrease Quantity
  function decreaseItemQuantity(id) {
    const updateCart = cartItem
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setCartItem(updateCart);
  }

  // Total Amount
  const calculateTotalAmount = useMemo(() => {
    return cartItem.reduce(
      (total, item) => total + item.productPrice * item.quantity,
      0
    );
  }, [cartItem]);

  // Total Cart Item
  const cartTotalItems = useMemo(() => {
    return cartItem.reduce((total, item) => total + item.quantity, 0);
  }, [cartItem]);

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeItemFromCart,
        decreaseItemQuantity,
        calculateTotalAmount,
        cartTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
