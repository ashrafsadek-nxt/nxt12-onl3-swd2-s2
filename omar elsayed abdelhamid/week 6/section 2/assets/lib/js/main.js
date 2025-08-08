var change = document.querySelector(".change");
change.addEventListener("click", () => {
  var colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "gray",
    "black",
  ];

  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;
});

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const card = {
    photo: "assets/photo/pexels-mak_-jp-107017486-33126155.jpg",
    text: "Lorem adipisicing elit. Corporis, ea?",
    button: "button",

    photo1: "assets/photo/pexels-mak_-jp-107017486-33126155.jpg",
    text1: "Lorem adipisicing elit. Corporis, ea?",
    button1: "button",

    photo2: "assets/photo/pexels-mak_-jp-107017486-33126155.jpg",
    text2: "Lorem adipisicing elit. Corporis, ea?",
    button2: "button",

    photo3: "assets/photo/pexels-mak_-jp-107017486-33126155.jpg",
    text3: "Lorem adipisicing elit. Corporis, ea?",
    button3: "button",
    };

    var content = document.querySelector(".content");

  content.innerHTML = `
    <div>
      <img src="${card.photo}" style="width:300px;">
      <p>${card.text}</p>
      <button>${card.button}</button>
    </div>
    <div>
      <img src="${card.photo1}" style="width:300px;">
      <p>${card.text1}</p>
      <button>${card.button1}</button>
    </div>

    <div>
      <img src="${card.photo2}" style="width:300px;">
      <p>${card.text2}</p>
      <button>${card.button2}</button>
    </div>

    <div>
      <img src="${card.photo3}" style="width:300px;">
      <p>${card.text3}</p>
      <button>${card.button3}</button>
    </div>
  `;
});
