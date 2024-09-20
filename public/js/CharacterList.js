function handleCardRender(card_info) {
  const { id, title, description, imgURL } = card_info;

  // Creating the outer layer of the card
  let card_container = document.createElement("div");
  card_section.appendChild(card_container);

  let card_article = document.createElement("article");
  card_article.id = "card";
  card_container.appendChild(card_article);

  // Creating the card contents
  let card_title = document.createElement("h1");
  card_title.id = "card_title";
  card_title.innerText = title;
  card_article.appendChild(card_title);

  let card_description = document.createElement("p");
  card_description.id = "card_description";
  card_description.innerHTML = description;
  card_article.appendChild(card_description);

  let card_button_wrapper = document.createElement("div");
  card_button_wrapper.id = "card_button_wrapper";
  card_article.appendChild(card_button_wrapper);

  let card_button = document.createElement("button");
  card_button.id = "card_button";
  card_button.innerHTML = "View Info";
  card_button.onclick = function () {
    location.href = `/character/${id}`;
  };
  card_button_wrapper.appendChild(card_button);

  let card_image = document.createElement("img");
  card_image.id = "card_image";
  card_image.src = imgURL;
  card_article.appendChild(card_image);

  return card_container;
}

async function handleCardCreation() {
  const result = await fetch("/character/data");
  const json_data = await result.json();
  card_info = json_data.data;
  card_info.map((card_bundle) => {
    const card_one = card_bundle.card_bundle[0];
    const card_two = card_bundle.card_bundle[1];

    let card_section = document.createElement("div");
    card_section.id = "card_section";
    card_section.className = "container";

    let card_section_grid = document.createElement("div");
    card_section_grid.className = "grid";
    card_section.appendChild(card_section_grid);

    card_section_grid.appendChild(handleCardRender(card_one));
    card_section_grid.appendChild(handleCardRender(card_two));

    document.getElementById("main_card_body").appendChild(card_section);
  });
}

handleCardCreation();
