import express from "express";
import os from "os";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const helloMsg = `Version 2: Hello from ${os.hostname()}`;
  console.log(helloMsg);
  res.send(helloMsg);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
