import {NextResponse} from 'next/server';
import nodemailer from "nodemailer";



export async function POST(req) {
  try {

    const transporter = nodemailer.createTransport({
      service: "yandex",
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: 'cheshire778',
        pass: process.env.YANDEX_PASS
      }
    });

    const data = await req.json();

    // console.log(data)

    await transporter.sendMail({
      from: process.env.YANDEX_LOGIN, // sender address
      to: "crj-100@yandex.ru", // list of receivers
      subject: "Ответ на электронное пригласительное", // Subject line
      // text: "Hello world?", // plain text body
      html: `<p>Кто - ${data.body.persons}</p><p>Статус - ${data.body.presence}</p>`, // html body
    });


    // console.log('Получены данные:', data);

    // Здесь можно сохранить данные в базу или отправить куда-либо
    return NextResponse.json({message: 'Данные успешно сохранены'}, {status: 200});
  } catch (error) {
    console.error('Ошибка обработки запроса:', error);
    return NextResponse.json({message: 'Ошибка сервера'}, {status: 500});
  }
}
