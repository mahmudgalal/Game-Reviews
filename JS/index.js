import { page } from "./home.js";
page.getCategory();
const home = document.querySelector(".home");

document.getElementById("btnClose").addEventListener("click", function () {
  document.querySelector(".details").classList.add("d-none");
  home.classList.remove("d-none");
});