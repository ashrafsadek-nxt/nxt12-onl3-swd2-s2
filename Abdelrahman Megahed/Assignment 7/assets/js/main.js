const btn = document.getElementById("btn");
const container = document.getElementById("container");

let cardCount = 0;

function addCard() {
  // Create Elements
  const card = document.createElement("div");
  const title = document.createElement("h2");
  const img = document.createElement("img");
  const cardParagraph = document.createElement("p");
  const cardBtn = document.createElement("button");

  /* Set Card Content and Attributes */
  card.className = "card";

  // Set Tiltle
  title.textContent = `Card ${++cardCount}`;
  title.className = "card-title";

  // Set Image
  img.src = "assets/imgs/img.png";
  img.alt = "Image";
  img.className = "card-img";

  // Set Paragraph
  cardParagraph.textContent = "This is a card paragraph.";

  // Set Button
  cardBtn.textContent = "Click Me!";
  cardBtn.className = "card-btn";

  // Add Elements to Card
  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(cardParagraph);
  card.appendChild(cardBtn);

  // Add Card to Container
  container.appendChild(card);
}

btn.addEventListener("click", addCard);
