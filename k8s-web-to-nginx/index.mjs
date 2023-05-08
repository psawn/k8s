import express from "express";
import fetch from "node-fetch";
import os from "os";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const helloMsg = `Version 2: Hello from ${os.hostname()}`;
  console.log(helloMsg);
  res.send(helloMsg);
});

app.get("/nginx", async (req, res) => {
  const url = "http://nginx";
  // nginx is the name of other service as specified in the nginx.yaml, it refers to cluster ip of service nginx
  const response = await fetch(url);
  const body = await response.text();
  res.send(body);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
