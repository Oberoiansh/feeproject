let toastBox = document.querySelector(".toast");

let msg=["hi","hello","hola"]

function append1() {
  let toast = document.createElement("a");
  let a=Math.floor(Math.random() * 3)
  toast.href=msg[a]
  toast.innerHTML = msg[a];
  toast.classList.add("notification");
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
