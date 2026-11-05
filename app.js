import express from "express";
import path from "path";
import { getoriginalurl, shorturl } from "./controller/url.js";
import "./database/db.js";

const app = express();
const port = 4444;
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(import.meta.dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs", { shorturl: null });
});

app.post("/short", shorturl);
app.get("/:shortCode", getoriginalurl);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
