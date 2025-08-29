'use client';
import { createContext, useContext, useMemo, useState } from 'react';


const CartContext = createContext();


export function CartProvider({ children }) {
const [items, setItems] = useState([]); // each: {id, name, price, qty}


const addToCart = (product) => {
setItems((prev) => {
const existing = prev.find((p) => p.id === product.id);
if (existing) {
return prev.map((p) => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
}
return [...prev, { ...product, qty: 1 }];
});
};


const cartCount = items.reduce((n, p) => n + p.qty, 0);
const total = items.reduce((sum, p) => sum + p.price * p.qty, 0);


const value = useMemo(() => ({ items, addToCart, cartCount, total }), [items]);
return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


export const useCart = () => useContext(CartContext);