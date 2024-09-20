const createCard = (character_card, card_info) => {
  const { id, title, description, imgURL, powerLevel } = card_info;

  // Creating the outer layer of the card
  let character_card_title = document.createElement("h1");
  character_card_title.id = "character_card_title";
  character_card_title.innerText = title;
  character_card.appendChild(character_card_title);

  let character_card_text_wrapper = document.createElement("div");
  character_card_text_wrapper.id = "character_card_text_container";
  character_card.appendChild(character_card_text_wrapper);

  let character_card_text = document.createElement("p");
  character_card_text.id = "character_card_text";
  character_card_text.innerText = description;
  character_card_text_wrapper.appendChild(character_card_text);

  let character_card_img_wrapper = document.createElement("div");
  character_card_img_wrapper.id = "character_card_img_wrapper";
  character_card.appendChild(character_card_img_wrapper);

  let character_card_image = document.createElement("img");
  character_card_image.src = imgURL;
  character_card_image.id = "character_card_img";
  character_card_img_wrapper.appendChild(character_card_image);

  let character_card_power_level = document.createElement("p");
  character_card_power_level.id = "character_card_power_level";
  character_card_power_level.innerText = `Power Level: ${powerLevel}`;
  character_card.appendChild(character_card_power_level);

  return character_card;
};

async function handleCardCreation() {
  character_id =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  console.log(character_id);
  const result = await fetch(`/character/data/${character_id}`);
  const json_data = await result.json();
  card_info = json_data.data;
  createCard(document.getElementById("character_card"), card_info);
}

handleCardCreation();
