function toggleMenu() {
  document.getElementById("ulList").classList.toggle("open");
  document.getElementById("button").classList.toggle("open");
}
const x = document.getElementById("button");
x.onclick = toggleMenu;
