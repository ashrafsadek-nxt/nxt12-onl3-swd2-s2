document.getElementById("btn").addEventListener("click", Calculate);

function Calculate() {
  const sou = document.getElementById("source").value;
  const tar = document.getElementById("target").value;
  const res = document.getElementById("result");
  const cou = parseFloat(document.getElementById("count").value) || 0;
  const coup = document.getElementById("coupon").value.trim();
  let dis = parseFloat(document.getElementById("discount").value) || 0;

  //   price factor
  let factor = 0;

  //   calculating price factor
  if (sou === tar) {
    res.innerText = "The same language";
  } else if (sou === "ar" && tar === "en") {
    factor = 10;
  } else if (sou === "en" && tar === "ar") {
    factor = 12;
  } else if (sou === "ar" && tar === "fr") {
    factor = 15;
  } else if (sou === "fr" && tar === "ar") {
    factor = 18;
  } else if (sou === "en" && tar === "fr") {
    factor = 8;
  } else if (sou === "fr" && tar === "en") {
    factor = 9;
  } else {
    alert("there are erorr");
  }

  //   calculating discount
  if (coup === "discount10") {
    dis = 0.9;
  } else {
    dis = 1;
  }

  res.innerText = `The total price is : $${factor * cou * dis}`;
}
