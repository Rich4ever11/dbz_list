import { dragonBallCharacters } from "./public/data/characterData.js";
import { pool } from "./database.js";

const createDragonBallTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS dbz_characters;

    CREATE TABLE IF NOT EXISTS dbz_characters (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        imgurl VARCHAR(255) NOT NULL,
        powerlevel NUMERIC(100, 2) NOT NULL
    )
`;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 dragon ball character table created successfully");
  } catch (err) {
    console.error("⚠️ error creating dragon ball character table", err);
  }
};

const seedDragonBallChractersTable = async () => {
  await createDragonBallTable();

  dragonBallCharacters.forEach((character) => {
    const insertQuery = {
      text: "INSERT INTO dbz_characters (name, description, imgurl, powerlevel) VALUES ($1, $2, $3, $4)",
    };

    const values = [
      character.name,
      character.description,
      character.imgURL,
      character.powerLevel,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting dragon ball character", err);
        return;
      }

      console.log(`✅ ${character.name} added successfully`);
    });
  });
};

seedDragonBallChractersTable();
