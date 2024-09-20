const createCard = (boss_card, card_info) => {
  const { id, title, description, imgURL } = card_info;

  // Creating the outer layer of the card
  let boss_card_title = document.createElement("h1");
  boss_card_title.id = "boss_card_title";
  boss_card_title.innerText = title;
  boss_card.appendChild(boss_card_title);

  let boss_card_text_wrapper = document.createElement("div");
  boss_card_text_wrapper.id = "boss_card_text_container";
  boss_card.appendChild(boss_card_text_wrapper);

  let boss_card_text = document.createElement("p");
  boss_card_text.id = "boss_card_text";
  boss_card_text.innerText = description;
  boss_card_text_wrapper.appendChild(boss_card_text);

  let boss_card_img_wrapper = document.createElement("div");
  boss_card_img_wrapper.id = "boss_card_img_wrapper";
  boss_card.appendChild(boss_card_img_wrapper);

  let boss_card_image = document.createElement("img");
  boss_card_image.src = imgURL;
  boss_card_image.id = "boss_card_img";
  boss_card_img_wrapper.appendChild(boss_card_image);

  return boss_card;
};

async function handleCardCreation() {
  boss_id =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  console.log(boss_id);
  const result = await fetch(`/boss/data/${boss_id}`);
  const json_data = await result.json();
  card_info = json_data.data;
  createCard(document.getElementById("boss_card"), card_info);
  console.log(card_info);
}

handleCardCreation();
