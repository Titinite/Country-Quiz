import express from "express";

const app = express();

const PORT = 3000;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});