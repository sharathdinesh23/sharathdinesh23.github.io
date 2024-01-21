// const yesButton = document.getElementById("yesButton");
// const noButton = document.getElementById("noButton");
// let noButtonClickedCount = 0;

// yesButton.addEventListener("click", () => {
//   window.location.href = "your-other-page.html"; // Replace with your target page
// });

// noButton.addEventListener("click", () => {
//   noButtonClickedCount++;
//   if (noButtonClickedCount === 1) {
//     noButton.style.marginLeft = "50%"; /* Shift to the right */
//   } else if (noButtonClickedCount === 2) {
//     noButton.style.marginLeft = "-50%"; /* Shift to the left */
//   } else {
//     noButton.style.display = "none"; /* Disappear */
//   }
// });


// yesButton.style.position = "fixed"; /* Keep it in place */
// yesButton.style.left = "50%"; /* Center it horizontally */
// yesButton.style.transform = "translateX(-50%)"; /* Adjust for centering */

// // ... (inside the noButton's click event listener)
// if (noButtonClickedCount === 1) {
//     noButton.style.marginLeft = "100%"; /* Shift to the right */
//   } else if (noButtonClickedCount === 2) {
//     noButton.style.marginLeft = "-100%"; /* Shift to the left */
//   } else {
//     // ...
//   }
  

// const yesButton = document.getElementById("yesButton");
// const noButton = document.getElementById("noButton");
// let noButtonClickedCount = 0;

// yesButton.addEventListener("click", () => {
//   window.location.href = "index-2.html"; // Replace with your target page
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
  window.location.href = "index-2.html";
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
