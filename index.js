const app = require("./app");

require("dotenv").config({ path: "config.env" });

const port = process.env.RUNNING_PORT || 5500;

//server listen

app.listen(port, () => {
  console.log(`Server runuing on port ${port}`);
});
