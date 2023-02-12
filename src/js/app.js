import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

const img = document.createElement("div");
img.classList.add("image");

const main = document.getElementsByClass("main");
main.appendChild(img);

const image = document.createElement("img");
image[0].setAttribute("src", "image");
const image2 = document.getElementsByClass("image");
main.appendChild(image2);



  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
