


const btngrid = document.querySelector("#gridbtn");
const btnlist = document.querySelector("#listbtn");
const typeDisplay = document.querySelector('.cards');







btngrid.addEventListener("click", () => {
	typeDisplay.classList.add("cards");
	typeDisplay.classList.remove("list");
});

btnlist.addEventListener("click", showList);
function showList() {
	typeDisplay.classList.add("list");
	typeDisplay.classList.remove("grid");
}
