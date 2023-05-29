let toastBox = document.getElementById("toastBox");
let section =
  ['You Are Touching My Eyes 😊',new Audio("eyes.mp3")];
let team_member =
  ['You Are Touching My Nose 😒',new Audio("nose.mp3")];
let project =
  ['You Are Touching My Tongue 😝',new Audio("tounge.mp3")];
let bell =
  ['You Are Touching My Bell 😍',new Audio("BELL.mp3")];
let belt =
  ['You Are Touching My Belt 😁',new Audio("BELT.mp3")];
let face =
  ['You Are Touching My Face 😂',new Audio("head (2).mp3")];

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg[0];
  toastBox.appendChild(toast);
  msg[1].play()


  setTimeout(() => {
    toast.remove();
  }, 5000);
}