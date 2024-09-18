const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));

const card_info = [
  {
    card_bundle: [
      {
        title: "ZUES ⚡",
        description:
          "King of Olympus and the ruler of the Greek Pantheon, as well as the God of the Sky, Thunder, Lightning, Storms, Hospitality and Heavens.",
        imgURL: "./images/AkinZeus.webp",
      },
      {
        title: "POSEIDON 💧",
        description:
          "The Olympian God of the Seas, Rivers, Water, Storms, Tempests, Winds, Hurricanes, Rain, Floods, Drought, Earthquakes and Horses.",
        imgURL: "./images/poseidon.png",
      },
    ],
  },
  {
    card_bundle: [
      {
        title: "HADES ☠️",
        description:
          "the Olympian God of the Dead and the Ruler of the Underworld. Eldest son of the mighty titan Cronos and the goddess Rhea.",
        imgURL: "./images/Hades-Render.webp",
      },
      {
        title: "CRONOS ⌛",
        description:
          "The leader the mighty Titans who were born to Gaia and Ouranos. He fathered the first of the Olympians with his wife Rhea.",
        imgURL: "./images/Cronos_Render.webp",
      },
    ],
  },

  {
    card_bundle: [
      {
        title: "HERCULES 💪",
        description:
          "The Demigod son of Zeus and a mortal woman named Alcmene, He is known for being the god of God of Strength.",
        imgURL: "./images/AkinHercules.webp",
      },
      {
        title: "HERMES 👟",
        description:
          "the Olympian God of Travelers, Messengers, Thieves, Commerce, Sports, Athletics, and Speed.",
        imgURL: "./images/AkinHermes.webp",
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.render(__dirname + "/index.html");
});

app.get("/GOW/data", (req, res) => {
  res.json({ data: card_info });
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
