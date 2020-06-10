const posterSize = document.querySelector("#poster-size");
const display = document.querySelector(".display");
const posterFrame = document.querySelector("#poster-frame");

document
  .querySelector("#poster-size")
  .addEventListener("change", CalcSizePrice);

function CalcSizePrice() {
  if (posterSize.innerHTML === "A3(50‎₴)") {
    display.value = 100;
  } else {
    display.value = 50;
  }
}

// document
//   .querySelector("#poster-frame")
//   .addEventListener("change", CalcFramePrice);
// function CalcFramePrice() {
//   if (posterFrame.innerHTML === "Пластикові кріплення(+50‎₴)") {
//     display.value = 50;
//   } else if (posterFrame.innerHTML === "Дерев'яна рамка(+300‎₴)") {
//     display.value = 300;
//   } else {
//     display.value = 0;
//   }
// }
