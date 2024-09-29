import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { dragonBallCharacters } from "./public/data/characterData.js";
import DragonBallController from "./controllers.js";
import "./dotenv.js";

const app = express();
const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("/CharacterList.html", { root: __dirname + "/public" });
});

app.get("/character/data", DragonBallController.getDragonBallCharacters);

app.get("/character/data/:id", DragonBallController.getDragonBallCharacter);

app.get("/character/:id", (req, res) => {
  const boss_id = parseInt(req.params.id);
  if (
    boss_id < 0 ||
    boss_id > dragonBallCharacters.length * 2 - 1 ||
    isNaN(boss_id)
  ) {
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
