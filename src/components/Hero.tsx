'use client';

export default function Hero() {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">مرحبا بك في DXN Store</h1>
        <p className="text-xl mb-8">منتجات طبيعية وصحية 100%</p>
        <a href="/products" className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100">
          تصفح المنتجات
        </a>
      </div>
    </section>
  );
}
