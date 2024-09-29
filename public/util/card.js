import { dragonBallCharacters } from "../data/characterData.js";

export const getDragonBallCharacterByID = (id) => {
  for (let i = 0; i < dragonBallCharacters.length; i++) {
    const dragonBallCharacter = dragonBallCharacters[i];
    if (dragonBallCharacter.id === id) {
      return dragonBallCharacter;
    }
  }
  return null;
};
