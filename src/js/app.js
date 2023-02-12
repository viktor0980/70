import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

const img = document.createElement("div");
img.classList.add("image");

const main = document.getElementsByClassName("main");
main[0].appendChild(img);

const image = document.createElement("img");
image[0].setAttribute("src", "image");
const image2 = document.getElementsByClassName("image");
main[0].appendChild(image2);
image.resize(200, 200);


  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
