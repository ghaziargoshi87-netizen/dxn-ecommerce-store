import { db } from '@/db';
import { orders, orderItems, products } from '@/db/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, city, address, paymentMethod, notes, items, totalAmount } = body;

    if (!name || !phone || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'اطلاعات مورد نیاز را وارد کنید' },
        { status: 400 }
      );
    }

    const orderNumber = `ORD-${Date.now()}`;

    const orderResult = await db
      .insert(orders)
      .values({
        orderNumber,
        customerName: name,
        customerEmail: email || '',
        customerPhone: phone,
        customerCity: city || '',
        customerAddress: address || '',
        totalAmount: totalAmount.toString(),
        status: 'pending',
        paymentMethod,
        notes,
      })
      .returning();

    const orderId = orderResult[0].id;

    for (const item of items) {
      await db.insert(orderItems).values({
        orderId,
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      });
    }

    return NextResponse.json(
      { success: true, orderNumber },
      { status: 201 }
    );
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'خرابی در ثبت سفارش' },
      { status: 500 }
    );
  }
}
