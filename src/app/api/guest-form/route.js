import {NextResponse} from 'next/server';
import nodemailer from "nodemailer";

/*const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'itzel.conroy@ethereal.email',
    pass: 'W58sJEJ4uaeuJ5Nk74'
  }
});*/

const transporter = nodemailer.createTransport({
  service: "yandex",
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_YANDEX_LOGIN,
    pass: process.env.NEXT_PUBLIC_YANDEX_PASS
  }
});


export async function POST(req) {
  try {

    const data = await req.json();

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_YANDEX_LOGIN, // sender address
      to: "crj-100@yandex.ru", // list of receivers
      subject: "Ответ на электронное пригласительное", // Subject line
      // text: "Hello world?", // plain text body
      html: `<p>Кто - ${data.body.persons}</p></br><p>Статус - ${data.body.presence}</p>`, // html body
    });


    console.log('Получены данные:', data);

    // Здесь можно сохранить данные в базу или отправить куда-либо
    return NextResponse.json({message: 'Данные успешно сохранены'}, {status: 200});
  } catch (error) {
    console.error('Ошибка обработки запроса:', error);
    return NextResponse.json({message: 'Ошибка сервера'}, {status: 500});
  }
}
