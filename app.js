const express = require("express");
const cors = require("cors");

const { sendHtmlToClient } = require("./mailer");
const { sendTemp1 } = require("./html1");

const app = express();
app.use(express.json());
const PORT = process.env["PORT"] || 11000;
console.log("working");
app.use(cors());
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
