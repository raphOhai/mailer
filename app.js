const express = require("express");
const app = express();

const cors = require("cors");

const PORT = process.env["PORT"] || 11000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/email"));

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
