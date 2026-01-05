import express from "express";
const app = express();

app.post("/signup", (req, res) => {
  res.send("Hello bhai");
});
app.post("/signin", (req, res) => {
  res.send("Hello bhai");
});
app.get("/chat", (req, res) => {
  res.send("Hello bhai");
});

app.listen(30001);
