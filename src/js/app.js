import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

var img = document.createElement("div");
img.classList.add("image");

var main = document.getElementsByClassName("main");
main[0].appendChild(img);
var image = document.createElement("img");
image[0].setAttribute("src", "image");
image.src = "https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"
var image2 = document.getElementsByClassName("image");
main[0].appendChild(image2);
image.resize(200, 200);


  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
