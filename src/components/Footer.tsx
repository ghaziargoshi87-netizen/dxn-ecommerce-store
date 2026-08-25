'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">عن DXN Store</h3>
            <p className="text-sm">فروشگاه محصولات طبیعی و سلامت در اربیل</p>
            <p className="text-sm mt-2">صاحب: Ghazi Argoshi</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">روابط سریعة</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/products" className="hover:text-green-400">المنتجات</Link></li>
              <li><Link href="/categories" className="hover:text-green-400">الفئات</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">التواصل</h3>
            <p className="text-sm">الهاتف: +964750000000</p>
            <p className="text-sm">البريد: info@dxnstore.com</p>
            <p className="text-sm">الموقع: اربیل، كردستان، عراق</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 DXN Store. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
