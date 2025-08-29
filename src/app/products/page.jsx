export default function Products() {
  const products = [
    { name: "Hammer", desc: "High quality steel hammer", emoji: "🔨" },
    { name: "Saw", desc: "Durable wood saw", emoji: "🪚" },
    { name: "Paint", desc: "Waterproof interior paint", emoji: "🪣" },
    { name: "Drill Machine", desc: "Electric drill for home & shop", emoji: "⚡" },
  ];

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Ourr Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{p.emoji} {p.name}</h2>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
