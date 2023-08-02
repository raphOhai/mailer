const { sendTemp1 } = require("../html1");
const { sendHtmlToClient } = require("../mailer");
const express = require("express");
const router = express.Router();


router.post("/contact", async (req, res) => {
  console.log(req.body);
  const mail = sendTemp1(req.body);
  sendHtmlToClient("sameleno6@gmail.com", "from h-Corp contact form", mail, res);
});

router.get("/", (req, res) => {
  res.json("connected");
});


module.exports = router;