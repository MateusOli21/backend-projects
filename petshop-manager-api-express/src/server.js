require("dotenv").config();

const app = require("./app");

app.listen(process.env.PORT || 3000, () =>
  console.log(`Running API on port ${process.env.PORT}`)
);
