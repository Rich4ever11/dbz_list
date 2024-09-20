import { card_info } from "../data/characterData.js";

export const getCardById = (id) => {
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
