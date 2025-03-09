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

    const recipients = [process.env.EMAIL_TO1, process.env.EMAIL_TO2];

    const sendEmail = async (toEmails) => {
      try {
        await transporter.sendMail({
          from: process.env.YANDEX_LOGIN, // sender address
          to: toEmails.join(","), // list of receivers
          subject: "Ответ на электронное пригласительное", // Subject line
          html: `<body style="background-color:#f9f9f9;">
                  <div style="background-color:#f9f9f9;">
                    <div style="background:#f9f9f9;background-color:#f9f9f9;Margin:0px auto;max-width:600px;">
                      <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation"
                             style="background:#f9f9f9;background-color:#f9f9f9;width:100%;">
                        <tbody>
                        <tr>
                          <td
                            style="border-bottom:#333957 solid 5px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div style="background:#fff;background-color:#fff;Margin:0px auto;max-width:600px;">
              
                      <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation"
                             style="background:#fff;background-color:#fff;width:100%;">
                        <tbody>
                        <tr>
                          <td
                            style="border:#dddddd solid 1px;border-top:0px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
              
                            <div className="mj-column-per-100 outlook-group-fix"
                                 style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
              
                              <table border="0" cellPadding="0" cellSpacing="0" role="presentation" style="vertical-align:bottom;"
                                     width="100%">
              
                                <tr>
                                  <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
              
                                    <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation"
                                           style="border-collapse:collapse;border-spacing:0px;">
                                      <tbody>
                                      <tr>
                                        <td style="width:64px;">
                                          <img width="100" height="100" alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABUGFpbnQuTkVUIDUuMS40AP/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAGQAZAMBEgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP7+KKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKqX1/Y6Xay32pXtpp1lBs8+8vrmG0tYfNkSGPzbi4eOGPzJpI4k3uN8joi5ZlBALdFABRQAUUAFfiD/wAESfix8U/iv/w9z/4Wl8S/iB8Sv+Fa/wDBb79vj4T/AA6/4T/xl4j8Y/8ACA/Czwd/wqj/AIRH4aeCv+Ei1LUf+EV+H/hX+0dQ/wCEc8G6F9g8OaH9vvf7M021+1T7wD9vqKACigAqpd39jYfZvt17aWX227hsLP7Xcw232u+ud32eytvOdPPu59j+TbRb5pdjbEbacAFuigAooAKKACigArJ1/XtG8LaFrXifxHqdlonh7w5pOo69r2s6lOlrp2kaNpFnNqGqanf3UpWK2srCxt57u6nkYJDBFJI5CqTQB/Ev/wAHnn7cs3hH4CfBr/gn14FvJZ/EHxe1Gz/aB+OsOnh5pdE+D3gLxCugfDWx15I3ZbXSPG/xblbUrO7uIVUav8MbK1S4R7+OG59I/wCCZH7KPh//AILd63/wWB/4KRftI6dqFt8OP28dP8b/ALCH7Iq6rpMs2qfDj9m3wDFpUcHxL8OaNrECeHbrW7Txj4d+FGtaDqEVtFdaL8XfhV8Rp7o79bunlAP1/wD+De39vj/h4J/wTA+BPj/xHrX9r/GP4PWJ/Z4+OTz3H2jUrrx18L9P02y0nxVqUrsJrm++IPw+vPBnjrVLvyILU+Idf1zT7RXTTWY/xz/8GuH7THjv/gnV/wAFYPjr/wAE1v2g5V8MwfHHXvFXwQ17RZb8XOj+Hf2pPgDrPiSHwxLYX5Js5bDxZp0Hj/wTaXmnxR/8JZqusfD+Zbma1s7KNgD/AEz6KACigD8Af+CBf/Oaj/tP9/wUb/8AeN0f8EC/+c1H/af7/go3/wC8boA/f6igAr52/a4/aV8Bfsc/syfHL9qL4mzBPBXwO+G/iXx/qlos621zrl1pFi50LwrpszRzIms+MPEEuleFtEDxOj6vrFlG42sSAD+BL/g7m/4KPeOLn9uL9nH4A/ATxNqmkw/sAaz4M+NPijxhoKiW08OftW+N5Lbxv8NbS7vo1uLSHXvAXgHwhpuv+HYZpra6e78VeMbWSym/sWaSH7V/Zp/4I8+O/wBvH/ggp+2d8efjh4abXv29v+Clfj/W/wDgol8P9VvdLkPiSx8QeApvFOu/s0eD/D6ahrEunWelfFHwf4j+J1n4U1VJIk0P4bftPSaabcNolrFAAf1yfsDftceD/wBu/wDY3/Z4/a28EfZIdK+Nfw30fxLquk2U5uYfC/jezafQPiN4LM7PI8s3gnx/pHiXwpPI7s0s2jvLuYOCf4y/+DLL9vnzrX9oL/gnB441nMlmbj9pX4Cw3s7HNrNJovhT4z+EdPknwirBcyeCPGmj6HaSGSRrz4h64LbZDqNwAD+/GigAooAKKAP5i/8Ag6q/byH7K/8AwTwf9nTwf4n0/wAPfGH9vHX7n4F6PdXmpLpi6D8HYV06f46eKr6581Tb6FNoOraH8ONZuHhnjgsfiTNdBN1oWT5V/ZH03wn/AMFuP+C8f7U37YPjzw54c+KX7D//AATY8FXv7Kv7O3hzxZo2l+Kfh78Qfih4obxHonijxrNoOtWlxoHiqyukm+J3imG4vtKu5rXTtU+Ct8Z47nQ9KlUA+3P2Kv8Agr1/wQf/AGIv2TvgD+yf8N/2+/g43hX4GfDTw94ITVIfC/xG02TxV4htrc33jbx5qNjB4IeC31v4heNb7xD4419IG8k654h1B4gsbKo/ZD/hgj9hb/oy79k3/wARz+D/AP8AMdQB/mTf8HFHx5/Y68Wf8FKvhb/wUK/4Jp/tM+DviF4o8bWHgbx58QLjwLH4ls9X+HP7RfwG1LQbPwn4+Sz8SeHdBtbSx8UeFdJ+H9xp0Wlx6g03i7wT4y1zWpY7nXrYXH92f/BXj/gjz+zP+1P/AME7v2mfhd8Cv2X/AIEeAfjvbeBZ/iB8FfEnw1+DvgHwf4wPxI+HFxD4x0XwtpuseGPDun6gsXxEt9Jv/hxfwSSTWzWHi25n8kXUFrcQAH6MfsBftd+D/wBvL9jb9nn9rXwT9jg0z40fDnSPEWsaRZTi4h8LeObJp9B+I3gxpfOndpfBvj3SfEfhiR5ZXklOlecxPmAn+Mf/AIMtf2+yB+0B/wAE3PHesFZImuv2kfgLb38xDAZ0fwv8Z/B9i8yDBR/+EM8aaTotvNuJf4g6ytqAmoXFAH9/FFAH4A/8EC/+c1H/AGn+/wCCjf8A7xuj/ggX/wA5qP8AtP8Af8FG/wD3jdAH7/Vyfj3xz4S+GHgbxp8S/H2uWXhjwL8PPCfiPxz408S6kzpp3h7wl4S0e81/xHrl+8aSOllpOj6feX90yI7rBbyFUYgAgH8e3/B1B+178K/FnxD/AGHP+CUvjj4z6X8Gfhd8c/iz4K+OP7bHxGurxo4/Af7OXhTxJLZaDYzR2llrM95qmuX+m+M/GWh6G2mJc3Xiz4d/D+IS/Ydcldel/wCCD3wL8N/8FR/jt/wUC/4LO/tefB/wh8RdH/aV+LFz8E/2UvAfxd8IeHfHOi+B/gV8LJrGCS50/Q/E1pr2iC+SDTfAfgZ9c063sZ/+Em8C/Ee7jjEXiq63gH6peGP+C/n/AAQ58F+GvD3g7wl+3P8ABPw74V8J6HpPhnwz4f0nw58R7LStC8P6DYW+l6No+mWcPgRYrTT9M061trKytolWOC2gjiQBUAr9DP8Ahgj9hb/oy79k3/xHP4P/APzHUAf5aP7TP7V/7Pf7BH/Bex/28f8Agnp8VPDPxj/Z8l+Nem/tEWEHw5TUdLtF8N/FsX0H7RnwRbS9V0jwrDoSXcus/ErQfCulQWo0fR/B2veDZYpt1u8Nv/Xt/wAHQv8AwSd+BXjf/gmZ4q+PP7N/wA+Enwv+J/7JXibT/i9qkvwo+GfhDwLqXiv4Q3oXwx8VNG1JvCeh6UmoWXh3TtQ0n4mzS6nIw0/T/AGqJYsJr+S3ugD+r/wH448K/E3wP4M+JPgXWbTxH4I+IPhTw7448HeIbBmex17wr4s0iz17w9rNk7KrNaappF/Z31szKrNDOhKgkgfyvf8ABob+3z/w0v8A8E+tX/ZX8Z62t78Uv2KPEcHhPSobq5jfUdU+A/jp9R134ZX4V/Kmmj8Laxa+Mvh+YoIpoNJ0Hw94OS4uvO1SGFQD+syigD8if+Cn/g3/AIK8fF7wv4v+CH/BOuf9jv4d+BfiX8IG8M+Ivjx8c/iB8V9E+L3gfxd4g1jxHpni6D4f+F/Bnww8c+GEtl8CLoaaB4t1S4m1XTfEGt6vd22kQTaHpV9P+u1AH8lH/BGr/gmp/wAFuf8Agkh4Ht/2c9Pj/wCCW3xR/Z58cfH20+K3xP8AEMfj79pm3+Nekaf4k07wL4P8b/8ACM6mPg94V8Ka7NpPhLwZb33hTSvEOitKNbku7W78QnSLqzttK/rXoAKKAPiv9sfXv+Cgui2HgRf2Cfh5+yp481a9m8Sp8R3/AGpPH/xN8C6TodvDHoZ8JT+Fm+GfhTxXfazNdzSeIU1q0v4LCOGK302S1vQ7zQyfalAH+eT8Kf8Ag2h/4Lf/AAE/beT/AIKC/A/4zf8ABOH4Y/GWy+M3jj4yaL4S0D4g/tDHwDo7/ELVfEF34l+HcOhT/s7GWb4cX+heJ9Y8EzaLJ4j/ALQbwrdPaJq8V6I9QT/Q2oA+bf2VNS/a21T4UQ3P7avhf4C+Efjcuv6vDdaX+zf4m8c+LPhlJ4ZjW0/sO+tdV+ImiaB4lXVrpmvTqVlPp4t7XZbpb3FwC8h+kqAPwB/4IF/85qP+0/3/AAUb/wDeN1+v/wAAv2XPgT+y/wD8Lq/4UX4G/wCEH/4aI/aA+I/7Ufxi/wCKm8Y+Jv8AhMPjt8W/7G/4WD45/wCKw8Q+IP8AhH/+Eg/4R/SP+KZ8Lf2J4O0r7J/xJPD2m/aLrzgD8Vf+Cxf7K/8AwWm/b8+Hfxw/Y8/Zrv8A9gz4Qfsp/Ey48LaZcfEzx18T/jrZ/Hfxl4HsrXQde8Q+FNY0rw38H/FnhXwjZav4vtLrStWOlTazca14Qshp0l3bW+uapbN/RTQB/PR/wR4/ZV/4LDfsCfD79nf9jX4/aR/wTe8U/sefCHTPH2j33xA+CHjP9oX/AIX/ABWuuSeOPHOiXI0bxf8ADjwr8PfEmoXnxK1+xsdevPsfhiRvDN3f6pIuo+IraSfVv6F6ACigD8tP+ChOj/8ABT/x/D4m+EH7Gfwn/YQ8a/BP4l/BXV/BvjzX/wBrL4i/GbQteh8TeMj4z8NeKtEtvBfw28B+I9L1vwcvg268N3EFzfa3aXl9qV/runXNgLO2tZ5/1LoA/gD/AOCaf/Bu/wD8F1f+CVP7Rtn+0r+z18Z/+CdfiTVL7wvqfgXx58OfF3xS/aNn8JeP/BGr3um6ld6Drsdj+ztoVxb3dpqmj6XrOhaxp+prc6TqthBIVu7CbUNOvf7/ACgDzb4O3PxcvPhb4Cu/j3pXgDQ/jNc+GdMm+JejfCvV9e174daZ4ukgVtWsvB2s+KNM0bxBqWh285Mdpd6tpdldyqpZ4cbWb0mgAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKAP/9k=">
                                        </td>
                                      </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div
                                      style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:16px;line-height:22px;text-align:left;color:#555;">
                                      Статус - ${data.body.presence}<br/><br/>
                                      Гости - ${data.body.persons}!
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
              
                    </div>
                  </div>
              </body>`, // html body
        });

      } catch (error) {
        console.error("Ошибка отправки:", error);
      }
    };

    await sendEmail(recipients);

    // console.log('Получены данные:', data);

    // Здесь можно сохранить данные в базу или отправить куда-либо
    return NextResponse.json({message: 'Данные успешно сохранены'}, {status: 200});
  } catch (error) {
    console.error('Ошибка обработки запроса:', error);
    return NextResponse.json({message: 'Ошибка сервера'}, {status: 500});
  }
}
