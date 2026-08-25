import { db } from '@/db';
import { products } from '@/db/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');
    const limit = parseInt(searchParams.get('limit') || '10');

    let result;
    if (categoryId) {
      result = await db
        .select()
        .from(products)
        .where((p: any) => p.categoryId === parseInt(categoryId))
        .limit(limit);
    } else {
      result = await db.select().from(products).limit(limit);
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Products fetch error:', error);
    return NextResponse.json(
      { error: 'خرابی در دریافت محصولات' },
      { status: 500 }
    );
  }
}
