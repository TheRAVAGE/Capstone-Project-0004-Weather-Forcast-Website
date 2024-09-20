import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://api.weatherapi.com/v1/current.json?q="

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/location", async (req, res) => {
    const API_KEY = req.query.key;
    const config = {
        headers: { key: `${API_KEY}` }
    }
    const location = req.query.location;
    const result = await axios.get(API_URL + location + "&aqi=yes", config);
    // const resp = JSON.stringify(result.data);
    res.render("info.ejs", { content: result.data });
});

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});