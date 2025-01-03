import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Получены данные:', body);

    // Здесь можно сохранить данные в базу или отправить куда-либо
    return NextResponse.json({ message: 'Данные успешно сохранены' }, { status: 200 });
  } catch (error) {
    console.error('Ошибка обработки запроса:', error);
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}
