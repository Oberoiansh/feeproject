let toastBox = document.querySelector(".toast");

let msg=["https://youtu.be/51VupvTTSno","https://youtu.be/ewwxbpJecx4","https://youtu.be/pSK7eNh1r9E","https://youtu.be/r0PhmnYo-us","https://youtu.be/BLUh8QCLoSU","https://youtu.be/nAIFCWMhC_0","https://youtu.be/UeTDUClwXsE"]

function append1() {
  let toast = document.createElement("a");
  let a=Math.floor(Math.random() * msg.length)
  toast.href=msg[a]
  toast.target="_blank"
  toast.innerHTML = "notification: click here";
  toast.classList.add("notification");
  toastBox.appendChild(toast);

  setTimeout(function(){
    toast.remove();
  }, 10000);
}
