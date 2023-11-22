import { log } from "node:console";
import { createServer } from "node:http";

const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.end("hi");
});

server.listen(port, () => log("server running..."));
