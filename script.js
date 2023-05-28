let toastBox = document.getElementById("toastBox");
let section =
  'You Are Touching My Eyes 😊';
let team_member =
  'You Are Touching My Nose 😒';
let project =
  'You Are Touching My Tongue 😝';
let bell='You Are Touching My Bell 😍'
let belt="You Are Touching My Belt 😁"
let face="You Are Touching My Face 😂"

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Aman")) {
    toast.classList.add("team");
  }
  if (msg.includes("toast")) {
    toast.classList.add("project");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}