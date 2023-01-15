const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
const { uuid } = require("uuidv4");

app.post("/login", (req, res) => {
  const name = process.env.NAME;
  const auth = uuid();
  res.setHeader("Set-Cookie", `_auth=${auth}`);
  res.status(200).send({ name, auth });
});

app.get("/", (req, res) => {
  let cookies = {};
  const cookiesArray = req.headers.cookie.split(";");
  cookiesArray.forEach((cookie) => {
    const [key, value] = cookie.trim().split("=");
    cookies[key] = value;
  });
  const name = process.env.NAME;
  res.status(200).send({
    name,
    cookies,
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
