'use client';
import React from 'react';
import { useCart } from '@/components/CartProvider';
import { useRouter } from 'next/navigation';


export default function CheckoutPage() {
const { state, total, clear } = useCart();
const router = useRouter();


function handleSubmit(e) {
e.preventDefault();
// production: call server to create payment intent
clear();
alert('Order placed (demo). Integrate real payment gateway.');
router.push('/products');
}


return (
<div className="p-4">
<h2 className="text-xl font-semibold mb-3">Checkout</h2>
<form onSubmit={handleSubmit} className="max-w-md space-y-4">
<input name="name" required placeholder="Full name" className="w-full border p-2 rounded" />
<input name="phone" required placeholder="Phone" className="w-full border p-2 rounded" />
<input name="address" required placeholder="Address" className="w-full border p-2 rounded" />


<div className="p-3 bg-gray-100 rounded">
<div className="text-sm text-gray-600">Order total: Rs. {total}</div>
</div>


<button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Place Order</button>
</form>


<section className="mt-6">
<h3 className="font-medium">Items</h3>
<ul className="mt-2 space-y-2">
{state.items.map(it => (
<li key={it.id} className="flex justify-between">
<div>{it.name} x {it.qty}</div>
<div>Rs. {it.price * it.qty}</div>
</li>
))}
</ul>
</section>
</div>
);
}