'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';

export default function Header() {
  const { getTotalItems } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-green-600 text-white p-2 rounded-lg">
            <span className="font-bold text-xl">DXN</span>
          </div>
          <span className="font-bold text-gray-800 hidden sm:inline">DXN Store</span>
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/products" className="text-gray-700 hover:text-green-600">
            المنتجات
          </Link>
          <Link href="/categories" className="text-gray-700 hover:text-green-600">
            الفئات
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
