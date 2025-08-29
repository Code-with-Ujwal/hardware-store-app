"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">🛠 Hardware Store</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/products" className="hover:underline">Products</Link>
      </div>
    </nav>
  );
}
