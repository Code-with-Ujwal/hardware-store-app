export default function Home() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-600">🛠 Hardware Store</h1>
        <p className="mt-2 text-gray-700 text-lg">
          Find the best tools, cement, tiles, and paints at affordable prices!
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-xl">🔨 Hammer</h2>
          <p className="text-gray-600">High quality steel hammer</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-xl">🪚 Saw</h2>
          <p className="text-gray-600">Durable wood saw</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-xl">🪣 Paint</h2>
          <p className="text-gray-600">Waterproof interior paint</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-xl">⚡ Drill Machine</h2>
          <p className="text-gray-600">Electric drill for home & shop</p>
        </div>
      </section>
    </main>
  );
}
