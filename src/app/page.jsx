// src/app/page.jsx
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 'vga-1',
    name: 'VGA Card CRX 125 TS',
    price: 450,
    image: 'https://images.unsplash.com/photo-1616628182504-fb689c962f8d?q=80&w=1200&auto=format&fit=crop',
    discount: '30% OFF',
  },
  {
    id: 'hdd-1',
    name: 'Hard Disk Drive (HDD)',
    price: 375,
    image: 'https://images.unsplash.com/photo-1587202372775-98927b4153ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'cpu-1',
    name: 'Central Processing Unit',
    price: 600,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'ssd-1',
    name: 'Solid-State Drive (SSD)',
    price: 350,
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca29?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'psu-1',
    name: 'Power Supply',
    price: 480,
    image: 'https://images.unsplash.com/photo-1610468747340-8ad6d2b9c0c8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'od-1',
    name: 'Optical Disc Drive',
    price: 530,
    image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* navbar */}
      <Navbar />

      {/* hero header block */}
      <div className="hero-gradient text-white px-6 py-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <img src="/globe.svg" alt="chip" className="w-14 h-14 opacity-90" />
          <h1 className="text-xl font-semibold">Wire Hardware Store</h1>
        </div>
      </div>

      {/* content */}
      <section className="px-4 py-4 bg-white/70">
        <h2 className="text-lg font-semibold mb-3 text-slate-800">Products</h2>

        {/* grid of product cards */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="mt-6 py-6 text-center text-sm text-slate-600">
        <p>© Wire Hardware Store | All rights reserved | 444-131-1121 | Privacy</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:underline">Shipping</a>
          <a href="#" className="hover:underline">Returns</a>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>
        <div className="flex justify-center gap-4 mt-4 text-2xl">
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>
      </footer>
    </main>
  );
}