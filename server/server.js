const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session");
const app = express();

const config = require('./src/configs/db.config')
const userRouter = require('./src/routes/user.route');

app.use(cors({origin: config.port}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "shoppingcart-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Shopping Cart application." });
});

app.use('/user', userRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
});