const express = require("express");
const app = express();
const { sendHtmlToClient } = require("./mailer");
const { sendTemp1 } = require("./html1");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = process.env["PORT"] || 11000;
console.log("working");

app.post("/contact", async (req, res) => {
  console.log(req.body);
  const mail = sendTemp1(req.body);
//   console.log(mail);
  sendHtmlToClient("ogbodotc@gmail.com", "from h-Corp contact form", mail, res);
//   console.log(req.body);
});

app.get("/", (req, res) => {
  res.json("connected");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
