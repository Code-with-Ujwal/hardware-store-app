'use client';
import { ShoppingCart, UserCircle2 } from 'lucide-react';
import { useCart } from './CartProvider';


export default function Navbar() {
const { cartCount } = useCart();


return (
<nav className="flex items-center justify-between px-4 py-3 bg-white">
<div className="flex items-center gap-2">
<img src="/globe.svg" alt="logo" className="w-7 h-7" />
<span className="font-semibold text-base">Wire Hardware Store</span>
</div>
<div className="flex items-center gap-3">
<div className="relative icon-btn" aria-label="Cart">
<ShoppingCart className="w-6 h-6" />
{cartCount > 0 && (
<span className="absolute -top-1 -right-1 badge bg-brand-600 text-white">{cartCount}</span>
)}
</div>
<button className="icon-btn" aria-label="Profile">
<UserCircle2 className="w-7 h-7" />
</button>
</div>
</nav>
);
}