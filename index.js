import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 10000;
<<<<<<< HEAD
const API_URL = "http://api.weatherapi.com/v1/current.json?q=";
=======
const API_URL = "http://api.weatherapi.com/v1/current.json?q="
>>>>>>> e3ea00b7312a51a4b474878fa044ca187201bfe3

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/location", async (req, res) => {
  const API_KEY = req.query.key;
  const config = {
    headers: { key: `${API_KEY}` },
  };
  const location = req.query.location;
  const result = await axios.get(API_URL + location + "&aqi=yes", config);
  res.render("info.ejs", { content: result.data });
});

app.listen(port, () => {
<<<<<<< HEAD
  console.log(`Server Started on port ${port}`);
=======
    console.log(`Server Started on port ${port}`);
>>>>>>> e3ea00b7312a51a4b474878fa044ca187201bfe3
});
