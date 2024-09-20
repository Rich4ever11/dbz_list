const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
// app.set("public", __dirname + "/public");
// app.engine("html", ejs.renderFile);

const card_info = [
  {
    card_bundle: [
      {
        id: 0,
        title: "ZUES ⚡",
        description:
          "King of Olympus and the ruler of the Greek Pantheon, as well as the God of the Sky, Thunder, Lightning, Storms, Hospitality and Heavens.",
        imgURL: "/images/AkinZeus.webp",
      },
      {
        id: 1,
        title: "POSEIDON 💧",
        description:
          "The Olympian God of the Seas, Rivers, Water, Storms, Tempests, Winds, Hurricanes, Rain, Floods, Drought, Earthquakes and Horses.",
        imgURL: "/images/poseidon.png",
      },
    ],
  },
  {
    card_bundle: [
      {
        id: 2,
        title: "HADES ☠️",
        description:
          "the Olympian God of the Dead and the Ruler of the Underworld. Eldest son of the mighty titan Cronos and the goddess Rhea.",
        imgURL: "/images/Hades-Render.webp",
      },
      {
        id: 3,
        title: "CRONOS ⌛",
        description:
          "The leader the mighty Titans who were born to Gaia and Ouranos. He fathered the first of the Olympians with his wife Rhea.",
        imgURL: "/images/Cronos_Render.webp",
      },
    ],
  },
  {
    card_bundle: [
      {
        id: 4,
        title: "HERCULES 💪",
        description:
          "The Demigod son of Zeus and a mortal woman named Alcmene, He is known for being the god of God of Strength.",
        imgURL: "/images/AkinHercules.webp",
      },
      {
        id: 5,
        title: "HERMES 👟",
        description:
          "the Olympian God of Travelers, Messengers, Thieves, Commerce, Sports, Athletics, and Speed.",
        imgURL: "/images/AkinHermes.webp",
      },
    ],
  },
];

const getCardById = (id) => {
  for (let i = 0; i < card_info.length; i++) {
    const card_one = card_info[i].card_bundle[0];
    const card_two = card_info[i].card_bundle[1];
    if (card_one.id == id) {
      return card_one;
    } else if (card_two.id == id) {
      return card_two;
    }
  }

  return null;
};

app.get("/", (req, res) => {
  res.sendFile("/CharacterList.html", { root: __dirname + "/public" });
});

app.get("/boss/data", (req, res) => {
  res.json({ data: card_info });
});

app.get("/boss/data/:id", (req, res) => {
  boss_data = getCardById(req.params.id);
  res.json({ data: boss_data });
});

app.get("/boss/:id", (req, res) => {
  const boss_id = parseInt(req.params.id);
  console.log(boss_id);
  if (boss_id < 0 || boss_id > card_info.length * 2 || isNaN(boss_id)) {
    res.status(404).sendFile("/NotFound.html", { root: __dirname + "/public" });
  }
  res.status(200).sendFile("/Character.html", { root: __dirname + "/public" });
  // }
  // res.status(404).sendFile("/NotFound.html", { root: __dirname + "/public" });
  // res.render("/boss.html", { name: "example" });
});

//The 404 Route (keep last)
app.get("*", function (req, res) {
  res.status(404).sendFile("/NotFound.html", { root: __dirname + "/public" });
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
