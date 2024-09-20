import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { card_info } from "./public/data/characterData.js";
import { getCardById } from "./public/util/card.js";

const app = express();
const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("/CharacterList.html", { root: __dirname + "/public" });
});

app.get("/character/data", (req, res) => {
  res.json({ data: card_info });
});

app.get("/character/data/:id", (req, res) => {
  const char_data = getCardById(req.params.id);
  res.json({ data: char_data });
});

app.get("/character/:id", (req, res) => {
  const boss_id = parseInt(req.params.id);
  if (boss_id < 0 || boss_id > card_info.length * 2 - 1 || isNaN(boss_id)) {
    res.redirect("/not_found");
  } else {
    res
      .status(200)
      .sendFile("/Character.html", { root: __dirname + "/public" });
  }
});

app.get("*", function (req, res) {
  res.status(404).sendFile("/NotFound.html", { root: __dirname + "/public" });
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
