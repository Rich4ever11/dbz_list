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
        title: "GOKU/孫悟空",
        description:
          "A Saiyan raised on Earth and the main protagonist of the Dragon Ball series",
        imgURL: "/images/goku-png-32668.png",
      },
      {
        id: 1,
        title: "Vegeta/ベジータ",
        description:
          "The prince of the fallen Saiyan race and one of the main characters of the Dragon Ball series",
        imgURL: "/images/Vegeta.webp",
      },
    ],
  },
  {
    card_bundle: [
      {
        id: 2,
        title: "Frieza/フリーザ",
        description:
          "A major antagonist in the Dragon Ball Z and responsible for the Genocide of the Saiyan race",
        imgURL: "/images/frieza.webp",
      },
      {
        id: 3,
        title: "Cell/セル",
        description:
          "A major antagonist in the Dragon Ball Z and The ultimate creation of Dr. Gero",
        imgURL: "/images/cell.png",
      },
    ],
  },
  {
    card_bundle: [
      {
        id: 4,
        title: "KID BUU/(魔人ブウ(純粋)",
        description:
          "A major antagonist in the Dragon Ball Z and the original, pure form of Majin Buu",
        imgURL: "/images/buu.png",
      },
      {
        id: 5,
        title: "GOKU BLACK/ゴクウブラック",
        description:
          "A major antagonist in the Dragon Ball Super and an alternate incarnation of Zamasu and a former North Kai and Supreme Kai apprentice ",
        imgURL: "/images/blackgoku.png",
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
