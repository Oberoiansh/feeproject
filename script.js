let toastBox = document.getElementById("toastBox");
let section =
  'Successful';
let team_member =
  'Error';
let project =
  'Submit';

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
