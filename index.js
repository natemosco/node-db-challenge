const server = require("./server");

const PORT = process.env.PORT || 3459;

server.listen(PORT, () => {
  console.log(
    `\n\n\t\t Welcome Back Sir, we are currently listening on port: ${PORT}\n\n`
  );
});
