// Instructions Modal
const openInstructionsBtn = document.getElementById("open-instructions-btn");
const instructionsModal = document.getElementById("instructions-modal");
const closeInstructionsBtn = document.querySelector(".close");

openInstructionsBtn.onclick = function() {
  instructionsModal.style.display = "block";
}

closeInstructionsBtn.onclick = function() {
  instructionsModal.style.display = "none";
}

// Result Popup Modal
const resultPopup = document.getElementById("result-popup");
const closeResultBtn = document.getElementById("close-result-btn");

// If crop recommendation exists, show result
if (typeof prediction !== "undefined" && prediction) {
  resultPopup.style.display = "block";
}

// Close the result popup when the close button is clicked
closeResultBtn.onclick = function() {
  resultPopup.style.display = "none";
}
