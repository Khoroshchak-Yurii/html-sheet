const posterSize = document.querySelector("#poster-size");
const display = document.querySelector(".display");
const posterFrame = document.querySelector("#poster-frame");

document
  .querySelector("#poster-size")
  .addEventListener("change", calcSizePrice);

let sizePrice = display.value;
function calcSizePrice() {
  if (posterSize.value === "A2") {
    sizePrice = 100;
  } else if (posterSize.value === "A3") {
    sizePrice = 50;
  } else {
    sizePrice = "";
  }
  return sizePrice;
}

document
  .querySelector("#poster-frame")
  .addEventListener("change", CalcFramePrice);
function CalcFramePrice() {
  let framePrice = display.value;
  if (posterFrame.value === "plastic") {
    framePrice = 50;
  } else if (posterFrame.value === "wood") {
    framePrice = 300;
  } else if (posterFrame.value === "none") {
    framePrice = 0;
  } else {
    framePrice = 0;
  }
  display.value = sizePrice + framePrice + "₴";
}
