import { pool } from "./database.js";

const getDragonBallCharacters = async (req, res) => {
  const getCharacterData = `
    SELECT *
    FROM dbz_characters
    ORDER BY id ASC
`;

  try {
    const result = await pool.query(getCharacterData);
    console.log("🎉 dbz characters data obtained");
    res.status(200).json({ data: result.rows });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getDragonBallCharacter = async (req, res) => {
  const getCharacterData = `
    SELECT *
    FROM dbz_characters
    WHERE id = ${req.params.id}
    ORDER BY id ASC
`;

  try {
    const result = await pool.query(getCharacterData);
    console.log("🎉 dbz character data obtained");
    res.status(200).json({ data: result.rows });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getDragonBallCharacters,
  getDragonBallCharacter,
};
