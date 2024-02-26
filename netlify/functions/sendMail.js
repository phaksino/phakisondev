const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    // Transporter config. For example, using Gmail:
    service: 'gmail',
    auth: {
      user: 'phakisontseketsii@gmail.com',
      pass: 'myae dhjp ixwn tfpo', // It's recommended to use OAuth2 or environment variables for security
    },
  });

  try {
    const response = await transporter.sendMail({
      from: 'communications@letseng.co.ls', // sender address
      to: 'phakisontseketsii@gmail.com', // list of receivers
      subject: "New Contact Form Submission", // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
