const server = require("./src/app.js");

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
245006;
