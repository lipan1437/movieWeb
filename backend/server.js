const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv")
app.use(cors())
app.use(dotenv())

const PORT = process.env.PORT || 5000;
app.use(express.json());
const API_KEY = process.env.API_KEY

app.get("api/movies", async (req, res) => {
  const search = req.query.search;
  try {
    const res = await axios.get(
      `http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
    );
    res.json(res.data.Search);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/api/movie/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const res = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );
    res.json(res.data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`server is running PORT...${PORT}`);
});
