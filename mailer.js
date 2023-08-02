var nodemailer = require("nodemailer");

const sendHtmlToClient = (reciever, subject, pdf, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kimcartoonbaby@gmail.com",
      pass: "aupwabovgeaiatdo",
    },
  });

  var mailOptions = {
    from: "kimcartoonbaby@gmail.com",
    to: reciever,
    // to: "sameleno6@gmail.com",
    subject: subject,
    text: "invioce",
    html: pdf,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    let message = "";
    if (error) {
      console.log(error);
      // message.push("something went wrong");
      return message;
    } else {
      console.log("Email sent: " + info.response);
      message = "email sent";
      //   return message
      res.json({ sent: "email sent" });
    }
    // console.log(message);
    return message;
  });
  //  return message
};

module.exports = {
  sendHtmlToClient,
};
