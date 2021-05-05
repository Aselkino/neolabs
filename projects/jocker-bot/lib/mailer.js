// const nodemailer = require('nodemailer');

// const from = 'kulbachaevaasel@gmail.com';
// const to = 'kulbachaevaasel@gmail.com';

// const transport = nodemailer.createTransport("SWIP", {
//     {
//       service: 'gmail',
//                 secure: false,
//                 port: 25,
//                 auth: {
//                     user: process.env.EMAIL,
//                     pass: process.env.EMAIL_PASS,
//                 },
//                 tls: {
//                     rejectUnauthorized: false,
//                 },
// }
// });
// transport.sendMail({
//     from: from,
//     to: to,
//     text: MessageChannel,
//     subject: 'тестовое задание'
// });



const nodemailer = require('nodemailer');

const message = `Привет это nodejs`;

const mailForMalling = `neolabs.mailer@gmail.com`;
const passwordForMail = `Ctujlyzctynz,hm`

const transport = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'mailForMalling',
    pass: 'passwordForMail',
  },
  tls: {
    rejectUnauthorized: false,
  },
});
console.log("Отправляя письмо")

transport
  .sendMail({
    from: 'mailForMalling',
    to: 'kulbachaevaasel@gmail.com',
    text: message,
    subject: 'Тестовое письмо',
  })
  .then(() => {
    console.log('Успешно выслал письмо');
  })
  .catch((e) => {
    console.log('error', e.message);
  });

console.log('Синхронная операция');