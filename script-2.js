// const yesButton = document.getElementById("yesButton");
// const noButton = document.getElementById("noButton");
// let noButtonClickedCount = 0;

// yesButton.addEventListener("click", () => {
//   window.location.href = "index-3.html"; // Replace with your target page
// });

// noButton.addEventListener("click", () => {
//   noButtonClickedCount++;
//   if (noButtonClickedCount === 1) {
//     noButton.style.marginLeft = "100%"; /* Shift to the right */
//   } else if (noButtonClickedCount === 2) {
//     noButton.style.marginLeft = "-100%"; /* Shift to the left */
//   } else {
//     noButton.style.display = "none"; /* Disappear */
//   }
// });

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
let noButtonClickedCount = 0;

yesButton.addEventListener("click", () => {
  window.location.href = "index-3.html";
});

noButton.addEventListener("click", () => {
  noButtonClickedCount++;
  if (noButtonClickedCount === 1) {
    noButton.style.marginLeft = "100%";
  } else if (noButtonClickedCount === 2) {
    noButton.style.marginLeft = "-100%";
  } else {
    noButton.style.display = "none";
  }
});
