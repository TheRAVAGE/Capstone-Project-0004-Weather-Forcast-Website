import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import env from "dotenv";

const app = express();
const port = 10000;

const API_URL = "http://api.weatherapi.com/v1/current.json?q=";
env.config();
const API_KEY = process.env.API_KEY;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/location", async (req, res) => {
  
  const config = {
    headers: { key: `${API_KEY}` },
  };
  const location = req.query.location;
  const result = await axios.get(API_URL + location + "&aqi=yes", config);
  res.render("info.ejs", { content: result.data });
});

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
