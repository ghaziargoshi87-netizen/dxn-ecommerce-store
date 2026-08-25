'use client';

export default function Home() {
  return (
    <>
      <div className="bg-green-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">مرحبا بك في DXN Store 🌿</h1>
        <p className="text-xl mb-8">فروشگاه محصولات بهداشتی و ارایشی و مکمل‌های طبیعی</p>
        <div className="flex gap-4 justify-center">
          <a href="/products" className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100">
            تصفح المنتجات
          </a>
          <a href="#categories" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10">
            الفئات
          </a>
        </div>
      </div>

      <section id="categories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">الفئات الرئيسية</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
              <div className="text-4xl mb-2">💊</div>
              <h3 className="font-bold">محصولات بهداشتی</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
              <div className="text-4xl mb-2">💄</div>
              <h3 className="font-bold">ارایشی</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
              <div className="text-4xl mb-2">🌿</div>
              <h3 className="font-bold">ویتامین‌ها</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
              <div className="text-4xl mb-2">☕</div>
              <h3 className="font-bold">قهوه گیاهی</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
              <div className="text-4xl mb-2">🍵</div>
              <h3 className="font-bold">شربت داروی</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="font-bold">محصولات دیگر</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
