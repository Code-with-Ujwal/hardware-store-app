'use client';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartProvider';


export default function ProductCard({ product }) {
const { addToCart } = useCart();


return (
<div className="relative bg-white rounded-xl shadow-md p-3 flex flex-col">
{/* product image */}
<div className="relative overflow-hidden rounded-lg mb-2">
<img src={product.image} alt={product.name} className="w-full h-36 object-cover" />
{product.discount && (
<span className="absolute top-2 right-2 badge bg-yellow-300 text-black">{product.discount}</span>
)}
</div>


<h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
<p className="mt-1 font-semibold">${product.price.toFixed(2)}</p>


<button
onClick={() => addToCart(product)}
className="mt-3 w-full flex items-center justify-center gap-2 bg-[#0b1957] text-white py-2 rounded-lg"
>
<ShoppingCart className="w-4 h-4" />
</button>
</div>
);
}